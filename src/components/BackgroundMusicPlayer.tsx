import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useEffect, useState } from "react";

const VOLUME_STORAGE_KEY = "bgm-volume";
const DEFAULT_VOLUME = 0.15;

interface BackgroundMusicPlayerProps {
  /** 自動再生フラグ */
  autoPlay?: boolean;
}

/**
 * バックグラウンドミュージックプレイヤー
 * 画面右下に配置される音楽コントロール
 */
export function BackgroundMusicPlayer({ autoPlay = false }: BackgroundMusicPlayerProps) {
  const { isPlaying, play, toggle, setVolume } = useBackgroundMusic();
  const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
  const [showUI, setShowUI] = useState(true);
  const [previousVolume, setPreviousVolume] = useState(DEFAULT_VOLUME);

  // 初期化時にローカルストレージから音量を読み込む
  useEffect(() => {
    const savedVolume = localStorage.getItem(VOLUME_STORAGE_KEY);
    if (savedVolume) {
      const vol = parseFloat(savedVolume);
      setVolumeState(vol);
      setVolume(vol);
      // ミュート以外の音量を記憶
      if (vol > 0) {
        setPreviousVolume(vol);
      }
    } else {
      setVolume(DEFAULT_VOLUME);
      setPreviousVolume(DEFAULT_VOLUME);
    }
  }, [setVolume]);

  // 自動再生
  useEffect(() => {
    if (autoPlay && !isPlaying) {
      const startPlayback = async () => {
        await play();

        // play()後にエンジンが初期化されているので、音量を再設定
        const savedVolume = localStorage.getItem(VOLUME_STORAGE_KEY);
        const vol = savedVolume ? parseFloat(savedVolume) : DEFAULT_VOLUME;
        setVolume(vol);
        // ミュート以外の音量を記憶
        if (vol > 0) {
          setPreviousVolume(vol);
        }
      };

      startPlayback();
    }
  }, [autoPlay, isPlaying, play, setVolume]);

  // 音量変更ハンドラー
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeState(newVolume);
    setVolume(newVolume);
    localStorage.setItem(VOLUME_STORAGE_KEY, newVolume.toString());

    // ミュート以外の音量を記憶
    if (newVolume > 0) {
      setPreviousVolume(newVolume);
    }
  };

  // ミュート/ミュート解除
  const handleMuteToggle = () => {
    if (volume > 0) {
      // ミュート: 現在の音量を保存してから0に設定
      setPreviousVolume(volume);
      setVolumeState(0);
      setVolume(0);
      localStorage.setItem(VOLUME_STORAGE_KEY, "0");
    } else {
      // ミュート解除: 以前の音量に戻す
      setVolumeState(previousVolume);
      setVolume(previousVolume);
      localStorage.setItem(VOLUME_STORAGE_KEY, previousVolume.toString());
    }
  };

  // キーボードショートカット
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // 入力フィールドなどでキーを押した場合は無視
      if (e.target !== document.body) return;

      // Mキー: ミュート/ミュート解除
      if (e.code === "KeyM") {
        e.preventDefault();
        handleMuteToggle();
      }

      // Hキー: UI表示/非表示
      if (e.code === "KeyH") {
        e.preventDefault();
        setShowUI(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [volume, previousVolume]);

  // UI非表示時は何も表示しない
  if (!showUI) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col items-end gap-2">
        {/* 音量調整UI */}
        <div className="flex items-center gap-3 px-4 py-3 bg-black/70 rounded-full shadow-lg">
          {/* ミュート/ミュート解除ボタン */}
          <button
            onClick={handleMuteToggle}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label={volume > 0 ? "ミュート" : "ミュート解除"}
          >
            {volume === 0 ? (
              <VolumeOffIcon />
            ) : volume < 0.33 ? (
              <VolumeLowIcon />
            ) : volume < 0.66 ? (
              <VolumeMediumIcon />
            ) : (
              <VolumeHighIcon />
            )}
          </button>

          {/* 音量スライダー */}
          <input
            type="range"
            min="0"
            max="0.5"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            aria-label="音量調整"
          />

          {/* 音量パーセント表示 */}
          <span className="text-white text-xs w-10 text-right">
            {Math.round((volume / 0.5) * 100)}%
          </span>

          {/* UI非表示ボタン */}
          <button
            onClick={() => setShowUI(false)}
            className="text-white/60 hover:text-white transition-colors ml-2"
            aria-label="UIを非表示"
          >
            <EyeOffIcon />
          </button>
        </div>

        {/* ヒントテキスト */}
        <div className="text-xs text-white/60 text-center">
          M: ミュート切替 / H: UI非表示
        </div>
      </div>

      <style jsx>{`
        /* カスタムスライダースタイル */
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slider::-webkit-slider-thumb:hover {
          background: #f3f4f6;
        }

        .slider::-moz-range-thumb:hover {
          background: #f3f4f6;
        }
      `}</style>
    </div>
  );
}

/**
 * 目を閉じたアイコン（UI非表示）
 */
function EyeOffIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    </svg>
  );
}

/**
 * 音量オフアイコン
 */
function VolumeOffIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

/**
 * 音量低アイコン
 */
function VolumeLowIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </svg>
  );
}

/**
 * 音量中アイコン
 */
function VolumeMediumIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
    </svg>
  );
}

/**
 * 音量高アイコン
 */
function VolumeHighIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}
