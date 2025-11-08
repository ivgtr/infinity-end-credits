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
    const handleKeyDown = (e: KeyboardEvent) => {
      // 入力フィールドなどでキーを押した場合は無視
      if (e.target !== document.body) return;

      // スペースキー: 2倍速にする
      if (e.code === "Space" && !isDoublespeed) {
        e.preventDefault();
        setIsDoublespeed(true);
        onSpeedChange(2);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // 入力フィールドなどでキーを押した場合は無視
      if (e.target !== document.body) return;

      // スペースキー: 元の速度に戻す
      if (e.code === "Space" && isDoublespeed) {
        e.preventDefault();
        setIsDoublespeed(false);
        onSpeedChange(speed);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [speed, isDoublespeed, onSpeedChange]);

  // 画面長押しで倍速/等速切り替え（PC/SP両対応）
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      // UIコントロール部分のクリックは無視
      const target = e.target as HTMLElement;
      if (target.closest('.controls-ui')) {
        return;
      }

      isLongPressingRef.current = false;
      longPressTimerRef.current = window.setTimeout(() => {
        // 長押し検出：2倍速にする
        isLongPressingRef.current = true;
        setIsDoublespeed(true);
        onSpeedChange(2);
      }, 500); // 500msの長押しで倍速
    };

    const handleMouseUp = () => {
      if (longPressTimerRef.current !== null) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }

      // 長押しが完了していた場合、離した時に元の速度に戻す
      if (isLongPressingRef.current) {
        isLongPressingRef.current = false;
        setIsDoublespeed(false);
        onSpeedChange(speed);
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
  }, [speed, onSpeedChange]);

  // 速度変更ハンドラー
  const handleSpeedSelect = (newSpeed: number) => {
    setSpeed(newSpeed);
    onSpeedChange(newSpeed);
    localStorage.setItem(SPEED_STORAGE_KEY, newSpeed.toString());
    setIsMenuOpen(false);
    // 倍速状態をリセット
    setIsDoublespeed(false);
  };

  const currentDisplaySpeed = isDoublespeed ? 2 : speed;

  return (
    <div className="speed-control-ui" ref={menuRef}>
      <div className="flex flex-col items-end gap-2">
        {/* 速度選択メニュー */}
        {isMenuOpen && (
          <div className="mb-1 bg-black/90 rounded-lg shadow-xl overflow-hidden min-w-[120px]">
            {SPEED_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => handleSpeedSelect(option)}
                className={`w-full px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors flex items-center justify-between ${
                  option === speed && !isDoublespeed ? "bg-white/10" : ""
                }`}
              >
                <span>{option === 1 ? "標準" : `${option}`}</span>
                {option === speed && !isDoublespeed && (
                  <span className="text-sm">✓</span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* 速度表示UI */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-black/70 rounded-full shadow-lg text-white hover:bg-black/80 transition-colors"
          aria-label="速度選択"
        >
          <SpeedIcon />
          <span className="text-sm font-medium">
            {currentDisplaySpeed === 1 ? "標準" : `${currentDisplaySpeed}x`}
            {isDoublespeed && <span className="ml-1">⚡</span>}
          </span>
        </button>
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
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
    </svg>
  );
}
