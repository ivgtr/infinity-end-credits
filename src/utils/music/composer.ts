import type { MusicSection, MusicStyle } from "@/types/music";
import { getRandomStyle } from "./styles";

/**
 * 音楽作曲アルゴリズム
 * スタイルを切り替えながら、無限に音楽を生成
 */
export class MusicComposer {
  private currentStyle: MusicStyle;
  private currentStyleElapsedTime: number = 0;
  private currentStyleDuration: number = 0;
  private progressionHistory: string[] = [];
  private maxHistorySize = 3;

  constructor() {
    // 初期スタイルをランダムに選択
    this.currentStyle = getRandomStyle();
    this.currentStyleDuration = this.getRandomDuration();
  }

  /**
   * 現在のスタイルを取得
   */
  public getCurrentStyle(): MusicStyle {
    return this.currentStyle;
  }

  /**
   * 新しい音楽セクションを生成
   * スタイルの持続時間を追跡し、必要に応じて切り替え
   */
  public generateSection(): MusicSection {
    // スタイル切り替えが必要かチェック
    if (this.currentStyleElapsedTime >= this.currentStyleDuration) {
      this.switchStyle();
    }

    // 現在のスタイルからコード進行を選択
    let progression =
      this.currentStyle.progressions[
        Math.floor(Math.random() * this.currentStyle.progressions.length)
      ]!;

    // 履歴を考慮して重複を避ける
    let attempts = 0;
    const maxAttempts = 10;
    while (
      this.progressionHistory.includes(progression.name) &&
      attempts < maxAttempts &&
      this.currentStyle.progressions.length > 1
    ) {
      progression =
        this.currentStyle.progressions[
          Math.floor(Math.random() * this.currentStyle.progressions.length)
        ]!;
      attempts++;
    }

    // セクションの長さを計算
    const chordDuration = progression.chords.reduce(
      (sum, chord) => sum + chord.duration,
      0
    );

    // メロディーパターンを選択（スタイルに応じて確率調整）
    let melody = undefined;
    const melodyProbability = this.getMelodyProbability();
    if (
      Math.random() < melodyProbability &&
      this.currentStyle.melodyPatterns.length > 0
    ) {
      melody =
        this.currentStyle.melodyPatterns[
          Math.floor(Math.random() * this.currentStyle.melodyPatterns.length)
        ]!;
    }

    // 履歴に追加
    this.progressionHistory.push(progression.name);
    if (this.progressionHistory.length > this.maxHistorySize) {
      this.progressionHistory.shift();
    }

    // 経過時間を更新
    this.currentStyleElapsedTime += chordDuration;

    return {
      progression,
      melody,
      duration: chordDuration,
      style: this.currentStyle,
    };
  }

  /**
   * 複数のセクションを生成
   */
  public generateSections(count: number): MusicSection[] {
    const sections: MusicSection[] = [];
    for (let i = 0; i < count; i++) {
      sections.push(this.generateSection());
    }
    return sections;
  }

  /**
   * スタイルを切り替え
   */
  private switchStyle(): void {
    // 現在のスタイルと異なる新しいスタイルを選択
    this.currentStyle = getRandomStyle(this.currentStyle.type);
    this.currentStyleElapsedTime = 0;
    this.currentStyleDuration = this.getRandomDuration();
    this.progressionHistory = []; // 履歴をクリア

    console.log(
      `🎵 スタイル切り替え: ${this.currentStyle.name} (${this.currentStyleDuration}秒間)`
    );
  }

  /**
   * スタイルの持続時間をランダムに決定
   */
  private getRandomDuration(): number {
    const [min, max] = this.currentStyle.durationRange;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * メロディーの出現確率を取得（スタイルに応じて調整）
   */
  private getMelodyProbability(): number {
    switch (this.currentStyle.type) {
      case "grand":
        return 0.8; // 壮大: メロディー多め
      case "monotonous":
        return 0.4; // 退屈: メロディー少なめ
      case "bright":
        return 0.85; // 明るい: メロディー多め
      case "dark":
        return 0.6; // ダーク: 適度
      case "ambient":
        return 0.5; // アンビエント: 適度
      default:
        return 0.7;
    }
  }

  /**
   * 履歴とスタイルをリセット
   */
  public reset(): void {
    this.currentStyle = getRandomStyle();
    this.currentStyleElapsedTime = 0;
    this.currentStyleDuration = this.getRandomDuration();
    this.progressionHistory = [];
  }
}
