import { useCallback, useEffect, useRef, useState } from "react";
import type { MusicSection } from "@/types/music";
import { MusicEngine } from "@/utils/music/engine";
import { MusicComposer } from "@/utils/music/composer";

/**
 * バックグラウンドミュージックを管理するカスタムフック
 */
export function useBackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const engineRef = useRef<MusicEngine | null>(null);
  const composerRef = useRef<MusicComposer | null>(null);
  const schedulerIdRef = useRef<number | null>(null);
  const currentSectionIndexRef = useRef(0);
  const sectionsRef = useRef<MusicSection[]>([]);
  const nextScheduleTimeRef = useRef(0);
  const previousStyleTypeRef = useRef<string | null>(null);

  const CROSSFADE_DURATION = 1.5; // クロスフェード時間（秒）

  /**
   * 初期化
   */
  const initialize = useCallback(async () => {
    if (isInitialized) {
      return;
    }

    try {
      // エンジンを初期化
      const engine = new MusicEngine();
      await engine.initialize();
      engineRef.current = engine;

      // コンポーザーを初期化
      composerRef.current = new MusicComposer();

      // 初期セクションを生成
      sectionsRef.current = composerRef.current.generateSections(3);
      currentSectionIndexRef.current = 0;

      setIsInitialized(true);
    } catch (error) {
      console.error("Failed to initialize background music:", error);
    }
  }, [isInitialized]);

  /**
   * 再生を開始
   */
  const play = useCallback(async () => {
    if (!isInitialized) {
      await initialize();
    }

    if (!engineRef.current || isPlaying) {
      return;
    }

    engineRef.current.start();
    setIsPlaying(true);

    // スケジューラーを開始
    nextScheduleTimeRef.current = engineRef.current.getCurrentTime();
    scheduleNextSection();
  }, [isInitialized, isPlaying, initialize]);

  /**
   * 次のセクションをスケジュール
   */
  const scheduleNextSection = useCallback(() => {
    if (!engineRef.current || !composerRef.current) {
      return;
    }

    const engine = engineRef.current;
    const now = engine.getCurrentTime();

    // 先読み時間（秒）
    const scheduleAheadTime = 2.0;

    // スケジュール可能な時間まで、セクションを追加
    while (nextScheduleTimeRef.current < now + scheduleAheadTime) {
      // 現在のセクションを取得
      if (currentSectionIndexRef.current >= sectionsRef.current.length) {
        // 新しいセクションを生成
        const newSection = composerRef.current.generateSection();
        sectionsRef.current.push(newSection);
      }

      const section = sectionsRef.current[currentSectionIndexRef.current];
      if (!section) {
        break;
      }

      const sectionStartTime = nextScheduleTimeRef.current;
      const soundParams = section.style.soundParams;

      // スタイル切り替えの検知とクロスフェード
      const currentStyleType = section.style.type;
      const previousStyleType = previousStyleTypeRef.current;

      if (previousStyleType && previousStyleType !== currentStyleType) {
        // スタイルが切り替わった場合：フェードアウト → フェードイン
        // fadeOut: 新セクション開始前にフェードアウトを完了させる
        const fadeOutStart = Math.max(now, sectionStartTime - CROSSFADE_DURATION);
        const fadeOutDuration = sectionStartTime - fadeOutStart;

        if (fadeOutDuration > 0) {
          engine.fadeOut(fadeOutDuration, fadeOutStart);
        }

        // fadeIn: 新セクション開始時からフェードイン
        engine.fadeIn(CROSSFADE_DURATION, sectionStartTime);

        console.log(
          `🎵 スタイル切り替え: ${previousStyleType} → ${currentStyleType} (${CROSSFADE_DURATION}秒クロスフェード)`
        );
      } else if (!previousStyleType) {
        // 最初のセクション：フェードインで開始
        engine.fadeIn(CROSSFADE_DURATION, sectionStartTime);
      }

      // 現在のスタイルを記憶
      previousStyleTypeRef.current = currentStyleType;

      // コード進行を再生
      let chordStartTime = sectionStartTime;
      section.progression.chords.forEach((chord) => {
        engine.playChord(chord, soundParams, chordStartTime);
        chordStartTime += chord.duration;
      });

      // メロディーを再生（存在する場合）
      if (section.melody) {
        const repeat = section.melody.repeat ?? 1;
        for (let r = 0; r < repeat; r++) {
          section.melody.notes.forEach((note) => {
            engine.playMelodyNote(
              {
                ...note,
                startTime: sectionStartTime + note.startTime + (section.duration * r) / repeat,
              },
              soundParams,
              0
            );
          });
        }
      }

      // ベースラインを再生（存在する場合）
      if (section.bass) {
        let bassTime = sectionStartTime;
        section.progression.chords.forEach((chord) => {
          engine.playBassline(chord, section.bass!, soundParams, bassTime);
          bassTime += chord.duration;
        });
      }

      // アルペジオを再生（存在する場合）
      if (section.arpeggio) {
        let arpeggioTime = sectionStartTime;
        section.progression.chords.forEach((chord) => {
          engine.playArpeggio(chord, section.arpeggio!, soundParams, arpeggioTime);
          arpeggioTime += chord.duration;
        });
      }

      // ドラムを再生（存在する場合）
      if (section.drums) {
        engine.playDrums(section.drums, section.duration, sectionStartTime);
      }

      // 次のセクションへ
      nextScheduleTimeRef.current += section.duration;
      currentSectionIndexRef.current++;
    }

    // 定期的にスケジューリングを続ける
    if (engine.getIsPlaying()) {
      schedulerIdRef.current = window.setTimeout(
        () => scheduleNextSection(),
        100
      );
    }
  }, []);

  /**
   * 再生を停止
   */
  const stop = useCallback(() => {
    if (schedulerIdRef.current !== null) {
      clearTimeout(schedulerIdRef.current);
      schedulerIdRef.current = null;
    }

    if (engineRef.current) {
      engineRef.current.stop();
    }

    setIsPlaying(false);

    // 状態をリセット
    currentSectionIndexRef.current = 0;
    sectionsRef.current = [];
    nextScheduleTimeRef.current = 0;

    // 新しいセクションを生成
    if (composerRef.current) {
      sectionsRef.current = composerRef.current.generateSections(3);
    }
  }, []);

  /**
   * トグル
   */
  const toggle = useCallback(async () => {
    if (isPlaying) {
      stop();
    } else {
      await play();
    }
  }, [isPlaying, play, stop]);

  /**
   * ボリューム設定
   */
  const setVolume = useCallback((volume: number) => {
    if (engineRef.current) {
      engineRef.current.setVolume(volume);
    }
  }, []);

  /**
   * クリーンアップ
   */
  useEffect(() => {
    return () => {
      if (schedulerIdRef.current !== null) {
        clearTimeout(schedulerIdRef.current);
      }

      if (engineRef.current) {
        engineRef.current.destroy();
      }
    };
  }, []);

  return {
    isPlaying,
    isInitialized,
    play,
    stop,
    toggle,
    setVolume,
  };
}
