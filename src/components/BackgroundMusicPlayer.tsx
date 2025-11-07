import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useEffect } from "react";

/**
 * バックグラウンドミュージックプレイヤー
 * 画面右下に配置される音楽コントロール
 */
export function BackgroundMusicPlayer() {
  const { isPlaying, toggle } = useBackgroundMusic();

  // クリックハンドラー
  const handleClick = () => {
    toggle();
  };

  // キーボードショートカット（スペースキーで再生/停止）
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // スペースキーが押された場合
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggle]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-3 bg-black/70 hover:bg-black/90 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        aria-label={isPlaying ? "音楽を停止" : "音楽を再生"}
      >
        {isPlaying ? (
          <>
            <PauseIcon />
            <span className="text-sm">BGM停止</span>
          </>
        ) : (
          <>
            <PlayIcon />
            <span className="text-sm">BGM再生</span>
          </>
        )}
      </button>

      {/* ヒントテキスト */}
      <div className="mt-2 text-xs text-white/60 text-center">
        スペースキーで切替
      </div>
    </div>
  );
}

/**
 * 再生アイコン
 */
function PlayIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/**
 * 一時停止アイコン
 */
function PauseIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}
