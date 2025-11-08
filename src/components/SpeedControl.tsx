import { useEffect, useState, useRef } from "react";

const SPEED_OPTIONS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
const SPEED_STORAGE_KEY = "scroll-speed";
const DEFAULT_SPEED = 1;

interface SpeedControlProps {
  /** 速度変更時のコールバック */
  onSpeedChange: (speed: number) => void;
}

/**
 * スクロール速度コントロール
 * 画面右下に配置される速度変更UI
 */
export function SpeedControl({ onSpeedChange }: SpeedControlProps) {
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDoublespeed, setIsDoublespeed] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const isLongPressingRef = useRef(false);

  // 初期化時にローカルストレージから速度を読み込む
  useEffect(() => {
    const savedSpeed = localStorage.getItem(SPEED_STORAGE_KEY);
    if (savedSpeed) {
      const spd = parseFloat(savedSpeed);
      setSpeed(spd);
      onSpeedChange(spd);
    } else {
      onSpeedChange(DEFAULT_SPEED);
    }
  }, [onSpeedChange]);

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  // スペースバーで倍速/等速切り替え
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // 入力フィールドなどでキーを押した場合は無視
      if (e.target !== document.body) return;

      // スペースキー: 倍速/等速切り替え
      if (e.code === "Space") {
        e.preventDefault();
        handleDoublespeedToggle();
      }

      // Hキー: UI表示/非表示
      if (e.code === "KeyH") {
        e.preventDefault();
        setShowUI(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [speed, isDoublespeed]);

  // 画面長押しで倍速/等速切り替え（PC/SP両対応）
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      // UIコントロール部分のクリックは無視
      const target = e.target as HTMLElement;
      if (target.closest('.speed-control-ui')) {
        return;
      }

      isLongPressingRef.current = false;
      longPressTimerRef.current = window.setTimeout(() => {
        isLongPressingRef.current = true;
        handleDoublespeedToggle();
      }, 500); // 500msの長押しで倍速切り替え
    };

    const handleMouseUp = () => {
      if (longPressTimerRef.current !== null) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }

      // 長押しが完了していた場合、離した時に元に戻す
      if (isLongPressingRef.current) {
        isLongPressingRef.current = false;
        handleDoublespeedToggle();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchend", handleMouseUp);

      if (longPressTimerRef.current !== null) {
        clearTimeout(longPressTimerRef.current);
      }
    };
  }, [speed, isDoublespeed]);

  // 速度変更ハンドラー
  const handleSpeedSelect = (newSpeed: number) => {
    setSpeed(newSpeed);
    onSpeedChange(newSpeed);
    localStorage.setItem(SPEED_STORAGE_KEY, newSpeed.toString());
    setIsMenuOpen(false);
    // 倍速状態をリセット
    setIsDoublespeed(false);
  };

  // 倍速/等速切り替え
  const handleDoublespeedToggle = () => {
    if (isDoublespeed) {
      // 等速に戻す
      setIsDoublespeed(false);
      onSpeedChange(speed);
    } else {
      // 倍速にする
      setIsDoublespeed(true);
      onSpeedChange(speed * 2);
    }
  };

  // UI非表示時は何も表示しない
  if (!showUI) {
    return null;
  }

  const currentDisplaySpeed = isDoublespeed ? speed * 2 : speed;

  return (
    <div className="speed-control-ui" ref={menuRef}>
      <div className="flex flex-col items-end gap-2">
        {/* 速度選択メニュー */}
        {isMenuOpen && (
          <div className="mb-2 bg-black/90 rounded-lg shadow-xl overflow-hidden">
            <div className="py-2">
              {SPEED_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSpeedSelect(option)}
                  className={`w-full px-6 py-2 text-left text-white hover:bg-white/20 transition-colors ${
                    option === speed && !isDoublespeed ? "bg-white/10" : ""
                  }`}
                >
                  {option === 1 ? "通常" : `${option}x`}
                  {option === speed && !isDoublespeed && (
                    <span className="ml-2 text-sm">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 速度表示UI */}
        <div className="flex items-center gap-3 px-4 py-3 bg-black/70 rounded-full shadow-lg">
          {/* 速度アイコン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="速度選択"
          >
            <SpeedIcon />
          </button>

          {/* 速度表示 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors min-w-[60px] text-center font-medium"
          >
            {currentDisplaySpeed === 1 ? "通常" : `${currentDisplaySpeed}x`}
            {isDoublespeed && <span className="ml-1 text-xs">⚡</span>}
          </button>

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
          Space/長押し: 倍速切替 / H: UI非表示
        </div>
      </div>
    </div>
  );
}

/**
 * 速度アイコン
 */
function SpeedIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
    </svg>
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
