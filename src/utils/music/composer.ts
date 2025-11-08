import type { MusicSection, MusicStyle } from "@/types/music";
import { getRandomStyle } from "./styles";
import { SCALES } from "./core/constants";
import {
  generateMusicalMelody,
  generateChordBasedMelody,
  generateSmoothChordMelody,
} from "./patterns/melodies/generators";
import { addMicroVariations } from "./patterns/melodies/humanize";
import { applyRandomVariation } from "./patterns/melodies/variations";
import {
  createMozartRocket,
  createFateMotif,
  createAlbertiBass,
  createBaroqueSequence,
  createOctaveJump,
  createPentatonicRock,
  createSyncopated8Beat,
  createBlueNoteDescend,
  createBebopChromatic,
  createIIVITurnaround,
  createInsenDescend,
  createCelticRoll,
  createHijazMaqam,
  createRagaOrnament,
  createArpeggiatorSeq,
  createDropBuild,
  createSidechainRhythm,
  createEnoAmbientPad,
  createShimmerReverb,
  createTexturalDrone,
  createGranularCloud,
  createModularSequence,
} from "./patterns";

// 定型パターン生成関数のマッピング
const FAMOUS_PATTERN_FUNCTIONS: Record<string, (root: number, duration: number) => any> = {
  createMozartRocket,
  createFateMotif,
  createAlbertiBass,
  createBaroqueSequence,
  createOctaveJump,
  createPentatonicRock,
  createSyncopated8Beat,
  createBlueNoteDescend,
  createBebopChromatic,
  createIIVITurnaround,
  createInsenDescend,
  createCelticRoll,
  createHijazMaqam,
  createRagaOrnament,
  createArpeggiatorSeq,
  createDropBuild,
  createSidechainRhythm,
  createEnoAmbientPad,
  createShimmerReverb,
  createTexturalDrone,
  createGranularCloud,
  createModularSequence,
};

/**
 * 音楽作曲アルゴリズム
 * スタイルを切り替えながら、無限に音楽を生成
 * 革新的な生成アルゴリズムでダイナミクスと多様性を提供
 */
export class MusicComposer {
  private currentStyle: MusicStyle;
  private currentStyleElapsedTime: number = 0;
  private currentStyleDuration: number = 0;
  private progressionHistory: string[] = [];
  private maxHistorySize = 3;
  private sectionCount = 0;
  private lastHadMelody = false;
  private lastHadBass = false;
  private lastHadArpeggio = false;
  private lastHadDrums = false;
  private totalElapsedTime: number = 0; // 総再生時間（全スタイル通じて）
  private lastMelodyGenerationMethod: 'scaleBased' | 'famousPattern' | 'chordBased' | 'existingPattern' | null = null;

  constructor() {
    // 初期スタイルをランダムに選択
    this.currentStyle = getRandomStyle();
    this.currentStyleDuration = this.getRandomDuration();
    console.log(
      `🎵 初期スタイル: ${this.currentStyle.name} (${this.currentStyleDuration}秒間)`
    );
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

    // レイヤーの選択（革新的アルゴリズム）
    const layers = this.selectLayers();

    // メロディーパターンを選択（重み付きランダム選択）
    // 時間経過、前回の選択、スタイル特性に応じて確率を動的に調整
    let melody = undefined;
    if (
      layers.includeMelody &&
      this.currentStyle.melodyPatterns.length > 0
    ) {
      const weights = this.getMelodyGenerationWeights();
      const rand = Math.random();
      const rootNote = progression.chords[0]!.root;

      // 重み付き確率に基づいて生成方法を選択
      let cumulativeWeight = 0;
      let selectedMethod: 'scaleBased' | 'famousPattern' | 'chordBased' | 'existingPattern' = 'existingPattern';

      cumulativeWeight += weights.scaleBasedWeight;
      if (rand < cumulativeWeight) {
        selectedMethod = 'scaleBased';
      } else {
        cumulativeWeight += weights.famousPatternWeight;
        if (rand < cumulativeWeight) {
          selectedMethod = 'famousPattern';
        } else {
          cumulativeWeight += weights.chordBasedWeight;
          if (rand < cumulativeWeight) {
            selectedMethod = 'chordBased';
          } else {
            selectedMethod = 'existingPattern';
          }
        }
      }

      // 選択された方法でメロディーを生成
      if (selectedMethod === 'scaleBased') {
        // 方法1: スケールベースのメロディーを生成（動的スケール選択）
        const availableScales = this.getAvailableScales();

        if (availableScales.length > 0) {
          const randomScale = availableScales[
            Math.floor(Math.random() * availableScales.length)
          ]!;

          melody = generateMusicalMelody(
            rootNote,
            randomScale,
            chordDuration
          );
          this.lastMelodyGenerationMethod = 'scaleBased';
        } else {
          // フォールバック: 既存パターン
          melody =
            this.currentStyle.melodyPatterns[
              Math.floor(Math.random() * this.currentStyle.melodyPatterns.length)
            ]!;
          this.lastMelodyGenerationMethod = 'existingPattern';
        }
      } else if (
        selectedMethod === 'famousPattern' &&
        this.currentStyle.famousPatterns &&
        this.currentStyle.famousPatterns.length > 0
      ) {
        // 方法2: 定型パターン生成
        const randomFamousPattern = this.currentStyle.famousPatterns[
          Math.floor(Math.random() * this.currentStyle.famousPatterns.length)
        ]!;

        const patternFunction = FAMOUS_PATTERN_FUNCTIONS[randomFamousPattern];
        if (patternFunction) {
          melody = patternFunction(rootNote, chordDuration);
          this.lastMelodyGenerationMethod = 'famousPattern';
        } else {
          // フォールバック: 既存パターン
          melody =
            this.currentStyle.melodyPatterns[
              Math.floor(Math.random() * this.currentStyle.melodyPatterns.length)
            ]!;
          this.lastMelodyGenerationMethod = 'existingPattern';
        }
      } else if (selectedMethod === 'chordBased') {
        // 方法3: コード進行連動メロディー生成
        const useSmooth = Math.random() < 0.5;
        melody = useSmooth
          ? generateSmoothChordMelody(progression)
          : generateChordBasedMelody(progression);
        this.lastMelodyGenerationMethod = 'chordBased';
      } else {
        // 方法4: 既存のメロディーパターンを使用
        melody =
          this.currentStyle.melodyPatterns[
            Math.floor(Math.random() * this.currentStyle.melodyPatterns.length)
          ]!;

        // 既存パターンに30%の確率で変奏を適用
        if (Math.random() < 0.3) {
          melody = applyRandomVariation(melody);
        }

        this.lastMelodyGenerationMethod = 'existingPattern';
      }

      // マイクロバリエーションを適用（60%の確率）
      if (melody && Math.random() < 0.6) {
        const dynamicsOptions: Array<'crescendo' | 'decrescendo' | 'swell' | 'accent' | null> = [
          'crescendo',
          'decrescendo',
          'swell',
          'accent',
          null,
        ];
        const dynamics = dynamicsOptions[Math.floor(Math.random() * dynamicsOptions.length)];

        melody = addMicroVariations(melody, {
          humanize: true,
          humanizeIntensity: 0.4 + Math.random() * 0.3, // 0.4-0.7
          dynamics,
        });
      }

      this.lastHadMelody = true;
    } else {
      this.lastHadMelody = false;
    }

    // ベースラインパターンを選択
    let bass = undefined;
    if (
      layers.includeBass &&
      this.currentStyle.bassPatterns.length > 0
    ) {
      bass =
        this.currentStyle.bassPatterns[
          Math.floor(Math.random() * this.currentStyle.bassPatterns.length)
        ]!;
      this.lastHadBass = true;
    } else {
      this.lastHadBass = false;
    }

    // アルペジオパターンを選択
    let arpeggio = undefined;
    if (
      layers.includeArpeggio &&
      this.currentStyle.arpeggioPatterns.length > 0
    ) {
      arpeggio =
        this.currentStyle.arpeggioPatterns[
          Math.floor(Math.random() * this.currentStyle.arpeggioPatterns.length)
        ]!;
      this.lastHadArpeggio = true;
    } else {
      this.lastHadArpeggio = false;
    }

    // ドラムパターンを選択
    let drums = undefined;
    if (
      layers.includeDrums &&
      this.currentStyle.drumPatterns.length > 0
    ) {
      drums =
        this.currentStyle.drumPatterns[
          Math.floor(Math.random() * this.currentStyle.drumPatterns.length)
        ]!;
      this.lastHadDrums = true;
    } else {
      this.lastHadDrums = false;
    }

    // 履歴に追加
    this.progressionHistory.push(progression.name);
    if (this.progressionHistory.length > this.maxHistorySize) {
      this.progressionHistory.shift();
    }

    // 経過時間を更新
    this.currentStyleElapsedTime += chordDuration;
    this.totalElapsedTime += chordDuration;
    this.sectionCount++;

    return {
      progression,
      melody,
      bass,
      arpeggio,
      drums,
      duration: chordDuration,
      style: this.currentStyle,
    };
  }

  /**
   * レイヤー選択アルゴリズム
   * ダイナミクスと多様性を提供するために、レイヤーを戦略的に選択
   */
  private selectLayers(): {
    includeMelody: boolean;
    includeBass: boolean;
    includeArpeggio: boolean;
    includeDrums: boolean;
  } {
    // セクション番号に基づいたパターン
    const sectionMod = this.sectionCount % 8;

    // スタイルごとのベース確率
    let melodyProb = this.getMelodyProbability();
    let bassProb = this.getBassProbability();
    let arpeggioProb = this.getArpeggioProbability();
    let drumsProb = this.getDrumsProbability();

    // 時間経過による進化: 徐々にレイヤーが豊かになる
    const evolutionMultiplier = this.getEvolutionMultiplier();
    melodyProb *= evolutionMultiplier;
    bassProb *= evolutionMultiplier;
    arpeggioProb *= evolutionMultiplier;
    drumsProb *= evolutionMultiplier;

    // ダイナミクスパターン: 徐々にレイヤーを追加/削除
    if (sectionMod === 0 || sectionMod === 4) {
      // ビルドアップ: 最小限から開始
      melodyProb *= 0.3;
      bassProb *= 0.5;
      arpeggioProb *= 0.3;
      drumsProb *= 0.4;
    } else if (sectionMod === 2 || sectionMod === 6) {
      // クライマックス: すべてのレイヤー
      melodyProb *= 1.5;
      bassProb *= 1.3;
      arpeggioProb *= 1.2;
      drumsProb *= 1.4;
    }

    // 前のセクションとの連続性を考慮
    // 同じレイヤーが続きすぎないように
    if (this.lastHadMelody && this.lastHadBass && this.lastHadArpeggio && this.lastHadDrums) {
      // すべてあった場合、少し減らす
      melodyProb *= 0.7;
      arpeggioProb *= 0.6;
      drumsProb *= 0.7;
    } else if (!this.lastHadMelody && !this.lastHadBass && !this.lastHadArpeggio && !this.lastHadDrums) {
      // 何もなかった場合、増やす
      melodyProb *= 1.5;
      bassProb *= 1.5;
      drumsProb *= 1.3;
    }

    return {
      includeMelody: Math.random() < melodyProb,
      includeBass: Math.random() < bassProb,
      includeArpeggio: Math.random() < arpeggioProb,
      includeDrums: Math.random() < drumsProb,
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
    this.sectionCount = 0; // セクションカウントをリセット

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
        return 0.85; // 壮大: メロディー多め
      case "monotonous":
        return 0.35; // 退屈: メロディー少なめ
      case "bright":
        return 0.9; // 明るい: メロディー多め
      case "dark":
        return 0.65; // ダーク: 適度
      case "ambient":
        return 0.60; // アンビエント: 適度（浮遊感を保ちつつ動きを追加）
      case "jazzy":
        return 0.80; // ジャジー: ジャズはメロディ重要
      case "retro":
        return 0.88; // レトロ: 80年代はメロディ重視
      case "electronic":
        return 0.75; // エレクトロニック: メロディも重要だがアルペジオがメイン
      case "orchestral":
        return 0.90; // オーケストラ: メロディー重視
      case "ethnic":
        return 0.85; // エスニック: メロディー多め
      case "lofi":
        return 0.75; // ローファイ: 適度
      default:
        return 0.7;
    }
  }

  /**
   * ベースの出現確率を取得
   */
  private getBassProbability(): number {
    switch (this.currentStyle.type) {
      case "grand":
        return 0.75; // 壮大: ベース多め
      case "monotonous":
        return 0.4; // 退屈: ベース少なめ
      case "bright":
        return 0.85; // 明るい: ベース多め
      case "dark":
        return 0.8; // ダーク: ベース多め
      case "ambient":
        return 0.45; // アンビエント: ベース控えめだが存在感あり
      case "jazzy":
        return 0.90; // ジャジー: ウォーキングベースが重要
      case "retro":
        return 0.85; // レトロ: シンセベースが重要
      case "electronic":
        return 0.85; // エレクトロニック: ベースラインが重要
      case "orchestral":
        return 0.70; // オーケストラ: 適度
      case "ethnic":
        return 0.60; // エスニック: 適度
      case "lofi":
        return 0.75; // ローファイ: ベース重要
      default:
        return 0.65;
    }
  }

  /**
   * アルペジオの出現確率を取得
   */
  private getArpeggioProbability(): number {
    switch (this.currentStyle.type) {
      case "grand":
        return 0.6; // 壮大: 適度
      case "monotonous":
        return 0.2; // 退屈: アルペジオほぼなし
      case "bright":
        return 0.8; // 明るい: アルペジオ多め
      case "dark":
        return 0.5; // ダーク: 適度
      case "ambient":
        return 0.70; // アンビエント: テクスチャを豊かに
      case "jazzy":
        return 0.70; // ジャジー: コンピング的なアルペジオ
      case "retro":
        return 0.75; // レトロ: シンセアルペジオ
      case "electronic":
        return 0.90; // エレクトロニック: アルペジオが特徴的
      case "orchestral":
        return 0.50; // オーケストラ: 控えめ
      case "ethnic":
        return 0.55; // エスニック: 適度
      case "lofi":
        return 0.65; // ローファイ: 適度
      default:
        return 0.5;
    }
  }

  /**
   * ドラムの出現確率を取得
   */
  private getDrumsProbability(): number {
    switch (this.currentStyle.type) {
      case "grand":
        return 0.6; // 壮大: ドラム適度
      case "monotonous":
        return 0.0; // 退屈: ドラムなし
      case "bright":
        return 0.85; // 明るい: ドラム多め
      case "dark":
        return 0.75; // ダーク: ドラム多め
      case "ambient":
        return 0.15; // アンビエント: 非常に控えめなリズム要素
      case "jazzy":
        return 0.65; // ジャジー: スウィング感のためドラム適度
      case "retro":
        return 0.80; // レトロ: 80年代ポップはドラム重要
      case "electronic":
        return 0.85; // エレクトロニック: リズム重視、ドラム多め
      case "orchestral":
        return 0.40; // オーケストラ: 控えめ
      case "ethnic":
        return 0.70; // エスニック: リズム重要
      case "lofi":
        return 0.75; // ローファイ: ビート重要
      default:
        return 0.5;
    }
  }

  /**
   * 時間経過による進化係数を取得
   * 時間が経つにつれて音楽が豊かになる
   */
  private getEvolutionMultiplier(): number {
    const elapsed = this.totalElapsedTime;

    if (elapsed < 60) {
      // 最初の1分: 控えめに開始（70%）
      return 0.7;
    } else if (elapsed < 300) {
      // 1-5分: 通常（100%）
      return 1.0;
    } else if (elapsed < 900) {
      // 5-15分: やや豊か（120%）
      return 1.2;
    } else if (elapsed < 1800) {
      // 15-30分: 豊か（140%）
      return 1.4;
    } else {
      // 30分以上: 非常に豊か（160%）
      return 1.6;
    }
  }

  /**
   * 利用可能なスケールを取得
   * 時間経過に応じて、推奨スケールから全スケールへと段階的に解禁
   */
  private getAvailableScales(): (keyof typeof SCALES)[] {
    // スタイル推奨スケール
    const recommendedScales = this.currentStyle.scales as (keyof typeof SCALES)[];

    // 全スケール（16種類）
    const allScales = Object.keys(SCALES) as (keyof typeof SCALES)[];

    if (this.totalElapsedTime < 300) {
      // 最初の5分: 推奨スケールのみ（80%）+ ランダム1つ（20%）
      if (Math.random() < 0.8) {
        return recommendedScales;
      } else {
        const randomScale = allScales[Math.floor(Math.random() * allScales.length)];
        // 重複を避けて追加
        if (!recommendedScales.includes(randomScale)) {
          return [...recommendedScales, randomScale];
        }
        return recommendedScales;
      }
    } else if (this.totalElapsedTime < 900) {
      // 5-15分: 推奨（60%）+ 全て（40%）
      return Math.random() < 0.6 ? recommendedScales : allScales;
    } else {
      // 15分以上: 全スケールから選択可能
      return allScales;
    }
  }

  /**
   * メロディー生成方法の重み付き確率を計算
   * 時間経過、文脈、スタイル特性に応じて動的に調整
   */
  private getMelodyGenerationWeights(): {
    scaleBasedWeight: number;
    famousPatternWeight: number;
    chordBasedWeight: number;
    existingPatternWeight: number;
  } {
    // 基本重み（各25%）
    let weights = {
      scaleBasedWeight: 0.25,
      famousPatternWeight: 0.25,
      chordBasedWeight: 0.25,
      existingPatternWeight: 0.25,
    };

    // 1. 時間経過による変化
    if (this.totalElapsedTime < 120) {
      // 序盤（0-2分）: 定型パターンを多めに（親しみやすさ重視）
      weights.famousPatternWeight = 0.4;
      weights.scaleBasedWeight = 0.15;
      weights.chordBasedWeight = 0.25;
      weights.existingPatternWeight = 0.2;
    } else if (this.totalElapsedTime < 600) {
      // 中盤（2-10分）: バランス良く
      // デフォルトのまま
    } else {
      // 終盤（10分以上）: スケールベースと既存パターンを増やす（新鮮さ重視）
      weights.scaleBasedWeight = 0.35;
      weights.existingPatternWeight = 0.3;
      weights.chordBasedWeight = 0.2;
      weights.famousPatternWeight = 0.15;
    }

    // 2. 前回の選択に応じた調整（同じ方法が連続しないように）
    if (this.lastMelodyGenerationMethod) {
      switch (this.lastMelodyGenerationMethod) {
        case 'scaleBased':
          weights.scaleBasedWeight *= 0.5;
          break;
        case 'famousPattern':
          weights.famousPatternWeight *= 0.5;
          break;
        case 'chordBased':
          weights.chordBasedWeight *= 0.5;
          break;
        case 'existingPattern':
          weights.existingPatternWeight *= 0.5;
          break;
      }
    }

    // 3. スタイル特性による調整
    const styleType = this.currentStyle.type;
    if (styleType === 'grand' || styleType === 'orchestral') {
      // クラシック系: 定型パターン多め
      weights.famousPatternWeight *= 1.3;
    } else if (styleType === 'ambient' || styleType === 'electronic') {
      // アンビエント系: スケールベース多め
      weights.scaleBasedWeight *= 1.4;
    } else if (styleType === 'jazzy') {
      // ジャズ系: コードベース多め
      weights.chordBasedWeight *= 1.4;
    } else if (styleType === 'ethnic') {
      // エスニック系: 定型パターン多め（民族音階パターン）
      weights.famousPatternWeight *= 1.2;
    }

    // 4. 正規化（合計を1.0にする）
    const sum = Object.values(weights).reduce((a, b) => a + b, 0);
    return {
      scaleBasedWeight: weights.scaleBasedWeight / sum,
      famousPatternWeight: weights.famousPatternWeight / sum,
      chordBasedWeight: weights.chordBasedWeight / sum,
      existingPatternWeight: weights.existingPatternWeight / sum,
    };
  }

  /**
   * 履歴とスタイルをリセット
   */
  public reset(): void {
    this.currentStyle = getRandomStyle();
    this.currentStyleElapsedTime = 0;
    this.currentStyleDuration = this.getRandomDuration();
    this.progressionHistory = [];
    this.sectionCount = 0;
    this.lastHadMelody = false;
    this.lastHadBass = false;
    this.lastHadArpeggio = false;
    this.lastHadDrums = false;
    this.totalElapsedTime = 0;
    this.lastMelodyGenerationMethod = null;
  }
}
