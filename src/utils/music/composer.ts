import type { MusicSection } from "@/types/music";
import { getRandomChordProgression, getRandomMelodyPattern } from "./patterns";

/**
 * 音楽作曲アルゴリズム
 * パターンを組み合わせて、無限に音楽を生成
 */
export class MusicComposer {
  private sectionHistory: string[] = [];
  private maxHistorySize = 5;

  /**
   * 新しい音楽セクションを生成
   * 直近の履歴を考慮して、同じパターンが連続しないようにする
   */
  public generateSection(): MusicSection {
    // コード進行を選択（履歴を考慮）
    let progression = getRandomChordProgression();
    let attempts = 0;
    const maxAttempts = 10;

    while (
      this.sectionHistory.includes(progression.name) &&
      attempts < maxAttempts
    ) {
      progression = getRandomChordProgression();
      attempts++;
    }

    // セクションの長さを計算
    const chordDuration = progression.chords.reduce(
      (sum, chord) => sum + chord.duration,
      0
    );

    // メロディーパターンを選択（80%の確率で追加）
    let melody = undefined;
    if (Math.random() < 0.8) {
      melody = getRandomMelodyPattern();
    }

    // 履歴に追加
    this.sectionHistory.push(progression.name);
    if (this.sectionHistory.length > this.maxHistorySize) {
      this.sectionHistory.shift();
    }

    return {
      progression,
      melody,
      duration: chordDuration,
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
   * 履歴をクリア
   */
  public clearHistory(): void {
    this.sectionHistory = [];
  }
}
