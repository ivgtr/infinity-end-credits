import type { ChordProgression, MelodyPattern, Note } from "@/types/music";
import { SCALES } from "@/utils/music/core/constants";
import { getChordNotes } from "@/utils/music/core/helpers";

/**
 * スケールベースのメロディーパターンを生成
 * @param root ルート音（MIDIノート番号）
 * @param scaleName スケール名
 * @param duration メロディーの総持続時間（秒）
 * @param noteCount 音符の数（デフォルト: 4-8のランダム）
 * @returns 生成されたメロディーパターン
 */
export function generateScaleMelody(
  root: number,
  scaleName: keyof typeof SCALES,
  duration: number,
  noteCount?: number
): MelodyPattern {
  const scale = SCALES[scaleName];
  const count = noteCount ?? Math.floor(Math.random() * 5) + 4; // 4-8音符

  const notes: Note[] = [];
  let currentTime = 0;

  // メロディーの動きのパターンを決定
  const movementPattern = Math.random();
  let previousScaleIndex = Math.floor(scale.length / 2); // 中央付近から開始

  for (let i = 0; i < count; i++) {
    // 音符の持続時間（総時間を音符数で均等に分配、若干のランダム性を持たせる）
    const baseDuration = duration / count;
    const durationVariation = baseDuration * (Math.random() * 0.4 - 0.2); // ±20%
    const noteDuration = Math.max(0.5, baseDuration + durationVariation);

    // スケール内の音を選択（前の音との関連性を持たせる）
    let scaleIndex: number;

    if (movementPattern < 0.3) {
      // 上昇パターン
      scaleIndex = Math.min(scale.length - 1, previousScaleIndex + Math.floor(Math.random() * 3));
    } else if (movementPattern < 0.6) {
      // 下降パターン
      scaleIndex = Math.max(0, previousScaleIndex - Math.floor(Math.random() * 3));
    } else {
      // ランダムジャンプ（ただし近い音を選びやすい）
      const jump = Math.floor(Math.random() * 5) - 2; // -2 to +2
      scaleIndex = Math.max(0, Math.min(scale.length - 1, previousScaleIndex + jump));
    }

    // オクターブ選択（中央の2オクターブを中心に）
    const octave = i < count / 2 ?
      Math.floor(Math.random() * 2) : // 前半は低め
      Math.floor(Math.random() * 2) + 1; // 後半は高め

    const pitch = root + scale[scaleIndex]! + (octave * 12);

    // ベロシティ（音量）: 若干のランダム性
    const baseVelocity = 0.32;
    const velocity = baseVelocity + (Math.random() * 0.12 - 0.06); // ±0.06

    notes.push({
      pitch,
      duration: noteDuration,
      startTime: currentTime,
      velocity: Math.max(0.2, Math.min(0.45, velocity)),
    });

    currentTime += noteDuration;
    previousScaleIndex = scaleIndex;
  }

  return {
    name: `Generated ${scaleName}`,
    notes,
    repeat: 1,
  };
}

/**
 * スケールベースのシンプルなメロディーを生成（より音楽的）
 * @param root ルート音
 * @param scaleName スケール名
 * @param chordDuration コード進行の長さ
 */
export function generateMusicalMelody(
  root: number,
  scaleName: keyof typeof SCALES,
  chordDuration: number
): MelodyPattern {
  const scale = SCALES[scaleName];

  // メロディーのフレーズパターンを選択
  const phraseType = Math.floor(Math.random() * 4);

  const notes: Note[] = [];

  switch (phraseType) {
    case 0: {
      // アルペジオ的上昇フレーズ
      const baseOctave = 1;
      for (let i = 0; i < 4; i++) {
        const scaleIndex = i % scale.length;
        const octaveOffset = Math.floor(i / scale.length);
        notes.push({
          pitch: root + scale[scaleIndex]! + ((baseOctave + octaveOffset) * 12),
          duration: chordDuration / 4,
          startTime: (chordDuration / 4) * i,
          velocity: 0.3 + (i * 0.05),
        });
      }
      break;
    }

    case 1: {
      // ステップワイズ（順次進行）
      const startIndex = Math.floor(Math.random() * (scale.length - 3));
      const direction = Math.random() > 0.5 ? 1 : -1;

      for (let i = 0; i < 5; i++) {
        const scaleIndex = Math.max(0, Math.min(scale.length - 1, startIndex + (i * direction)));
        notes.push({
          pitch: root + scale[scaleIndex]! + 24, // 2オクターブ上
          duration: chordDuration / 6,
          startTime: (chordDuration / 6) * i,
          velocity: 0.32,
        });
      }
      break;
    }

    case 2: {
      // ロングトーン + 装飾
      const mainNoteIndex = Math.floor(Math.random() * scale.length);
      notes.push({
        pitch: root + scale[mainNoteIndex]! + 24,
        duration: chordDuration * 0.6,
        startTime: 0,
        velocity: 0.35,
      });

      // 短い装飾音
      const ornamentIndex = (mainNoteIndex + 1) % scale.length;
      notes.push({
        pitch: root + scale[ornamentIndex]! + 24,
        duration: chordDuration * 0.2,
        startTime: chordDuration * 0.7,
        velocity: 0.28,
      });
      break;
    }

    case 3: {
      // リズミカルな反復
      const noteIndex = Math.floor(Math.random() * scale.length);
      const rhythmPattern = [0.3, 0.2, 0.3, 0.2]; // 比率
      let currentTime = 0;

      rhythmPattern.forEach((ratio) => {
        notes.push({
          pitch: root + scale[noteIndex]! + 24,
          duration: chordDuration * ratio * 0.8, // 少し短めに
          startTime: currentTime,
          velocity: 0.3 + (Math.random() * 0.1),
        });
        currentTime += chordDuration * ratio;
      });
      break;
    }
  }

  return {
    name: `Musical ${scaleName} Phrase`,
    notes,
    repeat: 1,
  };
}

/**
 * コード進行に沿ったメロディーを生成
 * 各コードのコードトーン（構成音）を使って、コード進行に沿ったメロディーを作る
 *
 * @param progression コード進行
 * @returns 生成されたメロディーパターン
 */
export function generateChordBasedMelody(progression: ChordProgression): MelodyPattern {
  const notes: Note[] = [];
  let currentTime = 0;

  // 各コードに対してメロディーを生成
  progression.chords.forEach((chord, chordIndex) => {
    const chordNotes = getChordNotes(chord);
    const chordDuration = chord.duration;

    // コードごとのメロディーパターンを選択
    const patternType = Math.floor(Math.random() * 5);

    switch (patternType) {
      case 0: {
        // パターン1: コードトーンの上昇
        const notesPerChord = Math.min(chordNotes.length, 3);
        const noteDuration = chordDuration / notesPerChord;

        for (let i = 0; i < notesPerChord; i++) {
          notes.push({
            pitch: chordNotes[i]! + 12, // 1オクターブ上
            duration: noteDuration * 0.9,
            startTime: currentTime + (noteDuration * i),
            velocity: 0.32 + (i * 0.03),
          });
        }
        break;
      }

      case 1: {
        // パターン2: コードトーンの下降
        const notesPerChord = Math.min(chordNotes.length, 3);
        const noteDuration = chordDuration / notesPerChord;

        for (let i = 0; i < notesPerChord; i++) {
          const noteIndex = chordNotes.length - 1 - i;
          notes.push({
            pitch: chordNotes[noteIndex]! + 12,
            duration: noteDuration * 0.9,
            startTime: currentTime + (noteDuration * i),
            velocity: 0.34 - (i * 0.02),
          });
        }
        break;
      }

      case 2: {
        // パターン3: ロングトーン（コードの最高音）
        const topNote = chordNotes[chordNotes.length - 1]!;
        notes.push({
          pitch: topNote + 12,
          duration: chordDuration * 0.85,
          startTime: currentTime,
          velocity: 0.35,
        });
        break;
      }

      case 3: {
        // パターン4: アルペジオ（上下）
        const pattern = [0, 1, 2, 1]; // 低-中-高-中
        const noteDuration = chordDuration / pattern.length;

        pattern.forEach((index, i) => {
          const noteIndex = Math.min(index, chordNotes.length - 1);
          notes.push({
            pitch: chordNotes[noteIndex]! + 12,
            duration: noteDuration * 0.85,
            startTime: currentTime + (noteDuration * i),
            velocity: 0.3 + (Math.random() * 0.08),
          });
        });
        break;
      }

      case 4: {
        // パターン5: リズミカルな繰り返し（ルート音中心）
        const rootNote = chordNotes[0]!;
        const thirdNote = chordNotes[1] ?? rootNote;
        const rhythmPattern = [
          { note: rootNote, ratio: 0.3 },
          { note: thirdNote, ratio: 0.2 },
          { note: rootNote, ratio: 0.3 },
          { note: thirdNote, ratio: 0.2 },
        ];

        let localTime = 0;
        rhythmPattern.forEach(({ note, ratio }) => {
          notes.push({
            pitch: note + 12,
            duration: chordDuration * ratio * 0.8,
            startTime: currentTime + localTime,
            velocity: 0.31,
          });
          localTime += chordDuration * ratio;
        });
        break;
      }
    }

    currentTime += chordDuration;
  });

  return {
    name: "Chord-Based Melody",
    notes,
    repeat: 1,
  };
}

/**
 * コード進行に沿ったスムーズなメロディーを生成
 * 前のコードから次のコードへ滑らかに移行する
 *
 * @param progression コード進行
 * @returns 生成されたメロディーパターン
 */
export function generateSmoothChordMelody(progression: ChordProgression): MelodyPattern {
  const notes: Note[] = [];
  let currentTime = 0;
  let previousNote = -1; // 前の音程

  progression.chords.forEach((chord, chordIndex) => {
    const chordNotes = getChordNotes(chord);
    const chordDuration = chord.duration;

    // コードの中から、前の音に近い音を選ぶ（スムーズな進行）
    let targetNote: number;

    if (previousNote === -1) {
      // 最初のコード: ランダムに選択
      targetNote = chordNotes[Math.floor(Math.random() * chordNotes.length)]!;
    } else {
      // 前の音に最も近いコードトーンを選択
      let closestNote = chordNotes[0]!;
      let minDistance = Math.abs(previousNote - closestNote);

      chordNotes.forEach((note) => {
        const distance = Math.abs(previousNote - note);
        if (distance < minDistance) {
          minDistance = distance;
          closestNote = note;
        }
      });

      targetNote = closestNote;
    }

    // メロディーを生成（2-3音のフレーズ）
    const phraseLength = Math.floor(Math.random() * 2) + 2; // 2-3音
    const noteDuration = chordDuration / phraseLength;

    for (let i = 0; i < phraseLength; i++) {
      let pitch: number;

      if (i === 0) {
        // 最初の音: 選択したコードトーン
        pitch = targetNote + 12;
      } else {
        // その他の音: コード内で隣接音を選ぶ
        const currentIndex = chordNotes.indexOf(targetNote);
        const variation = Math.random() > 0.5 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(chordNotes.length - 1, currentIndex + variation));
        pitch = chordNotes[newIndex]! + 12;
        targetNote = chordNotes[newIndex]!;
      }

      notes.push({
        pitch,
        duration: noteDuration * 0.9,
        startTime: currentTime + (noteDuration * i),
        velocity: 0.32 + (Math.random() * 0.06),
      });

      previousNote = pitch - 12; // 次のコードのために保存
    }

    currentTime += chordDuration;
  });

  return {
    name: "Smooth Chord Melody",
    notes,
    repeat: 1,
  };
}
