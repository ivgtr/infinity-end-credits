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
  type: 'major' | 'minor' | 'sus4' | 'sus2' | 'maj7' | 'min7';
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
 * 音楽セクション
 */
export interface MusicSection {
  /** コード進行 */
  progression: ChordProgression;
  /** メロディーパターン（オプション） */
  melody?: MelodyPattern;
  /** 持続時間（秒） */
  duration: number;
  /** スタイル */
  style: MusicStyle;
}

/**
 * 音楽スタイル
 */
export type MusicStyleType = 'grand' | 'monotonous' | 'bright' | 'dark' | 'ambient';

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
  /** スタイルの持続時間範囲（秒） */
  durationRange: [number, number];
}
