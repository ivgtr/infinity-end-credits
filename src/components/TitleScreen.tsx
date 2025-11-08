import React, { useEffect, useState } from "react";

type TitleScreenProps = {
  title: string;
  onComplete: () => void;
  duration?: number; // タイトル表示時間（ミリ秒）
};

export const TitleScreen: React.FC<TitleScreenProps> = ({
  title,
  onComplete,
  duration = 3000, // デフォルト3秒
}) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 表示時間経過後にフェードアウト開始
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration - 800); // フェードアウトアニメーション800ms前に開始

    // フェードアウト完了後にコールバック実行
    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-[800ms] ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center px-8">
        {/* タイトル */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-wider animate-fadeIn">
          {title}
        </h1>

        {/* 装飾ライン */}
        <div
          className="flex items-center justify-center gap-4 animate-fadeIn"
          style={{ animationDelay: '300ms' }}
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-white"></div>
          <div className="text-white text-sm md:text-base tracking-widest">
            PRESENTS
          </div>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </div>
    </div>
  );
};
