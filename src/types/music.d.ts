/**
 * 音符の定義
 */
export interface Note {
  /** 音程（MIDIノート番号） */
  pitch: number;
  /** 持続時間（秒） */
  duration: number;
  /** 開始時刻（秒） */
  startTime: number;
  /** 音量（0-1） */
  velocity?: number;
}

/**
 * コードの定義
 */
export interface Chord {
  /** ルート音（MIDIノート番号） */
  root: number;
  /** コードタイプ（major, minor, sus4など） */
  type: 'major' | 'minor' | 'sus4' | 'sus2' | 'maj7' | 'min7' | 'dom7' |
        'maj9' | 'min9' | 'min11' | 'add9' | 'add11' | '6' | 'dim7' | 'aug';
  /** 持続時間（秒） */
  duration: number;
}

/**
 * コード進行パターン
 */
export interface ChordProgression {
  /** パターン名 */
  name: string;
  /** コードの配列 */
  chords: Chord[];
  /** テンポ（BPM） */
  tempo: number;
}

/**
 * メロディーパターン
 */
export interface MelodyPattern {
  /** パターン名 */
  name: string;
  /** 音符の配列 */
  notes: Note[];
  /** 繰り返し回数 */
  repeat?: number;
}

/**
 * ベースラインパターン
 */
export interface BassPattern {
  /** パターン名 */
  name: string;
  /** 音符の配列（ルート音からの相対位置） */
  pattern: number[];
  /** 各音の持続時間 */
  durations: number[];
  /** リズムパターン */
  rhythm: number[];
}

/**
 * アルペジオパターン
 */
export interface ArpeggioPattern {
  /** パターン名 */
  name: string;
  /** コード内の音のインデックスパターン */
  pattern: number[];
  /** 各音の持続時間 */
  noteDuration: number;
  /** パターンの速度係数 */
  speed: number;
}

/**
 * ドラムパターン
 */
export interface DrumPattern {
  /** パターン名 */
  name: string;
  /** キックドラムのタイミング（秒） */
  kick: number[];
  /** スネアドラムのタイミング（秒） */
  snare: number[];
  /** ハイハットのタイミング（秒） */
  hihat: number[];
  /** パターンの長さ（秒） */
  duration: number;
}

/**
 * 音楽セクション
 */
export interface MusicSection {
  /** コード進行 */
  progression: ChordProgression;
  /** メロディーパターン（オプション） */
  melody?: MelodyPattern;
  /** ベースラインパターン（オプション） */
  bass?: BassPattern;
  /** アルペジオパターン（オプション） */
  arpeggio?: ArpeggioPattern;
  /** ドラムパターン（オプション） */
  drums?: DrumPattern;
  /** 持続時間（秒） */
  duration: number;
  /** スタイル */
  style: MusicStyle;
}

/**
 * 音楽スタイル
 */
export type MusicStyleType = 'grand' | 'monotonous' | 'bright' | 'dark' | 'ambient' | 'jazzy' | 'retro' | 'electronic' | 'orchestral' | 'ethnic' | 'lofi';

/**
 * 音色パラメータ
 */
export interface SoundParameters {
  /** パッド音の音量 */
  padVolume: number;
  /** パッド音のアタック時間 */
  padAttack: number;
  /** パッド音のリリース時間 */
  padRelease: number;
  /** メロディー音の音量 */
  leadVolume: number;
  /** メロディー音のアタック時間 */
  leadAttack: number;
  /** メロディー音のリリース時間 */
  leadRelease: number;
  /** オシレータータイプ */
  oscillatorType: OscillatorType;
}

/**
 * 音楽スタイル定義
 */
export interface MusicStyle {
  /** スタイルタイプ */
  type: MusicStyleType;
  /** スタイル名 */
  name: string;
  /** 説明 */
  description: string;
  /** 音色パラメータ */
  soundParams: SoundParameters;
  /** コード進行パターン */
  progressions: ChordProgression[];
  /** メロディーパターン */
  melodyPatterns: MelodyPattern[];
  /** ベースラインパターン */
  bassPatterns: BassPattern[];
  /** アルペジオパターン */
  arpeggioPatterns: ArpeggioPattern[];
  /** ドラムパターン */
  drumPatterns: DrumPattern[];
  /** スタイルの持続時間範囲（秒） */
  durationRange: [number, number];
  /** 推奨スケール/モード（スケールベースのメロディー生成に使用） */
  scales: string[];
  /** 有名な定型パターン生成関数名（オプション） */
  famousPatterns?: string[];
}
