import { useCallback, useEffect, useRef, useState } from "react";
import { CreditsItem } from "./CreditsItem";
import { SwipeActionObserver } from "./SwipeActionObserver";
import { MouseActionObserver } from "./MouseActionObserver";

export const CreditsList = ({
  titles,
  credits,
  addWork,
}: {
  titles: string[];
  credits: {
    [key: string]: {
      role: string;
      names: string[];
    }[];
  };
  addWork: () => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(1);
  const movingRef = useRef<number>(0);
  const requestAnimationFrameRef = useRef<number>(0);
  const prevTitlesLengthRef = useRef<number>(0);

  // メモリリーク防止: titlesが減った場合（古いアイテムが削除された場合）にスクロール位置を調整
  useEffect(() => {
    if (titles.length < prevTitlesLengthRef.current && titles.length > 0) {
      // アイテムが削除された場合、スクロール位置をリセットして継続
      // 急激なジャンプを避けるため、現在位置を保持しつつ正規化
      const container = containerRef.current;
      if (container && movingRef.current < -5000) {
        // スクロール位置が深すぎる場合のみリセット
        movingRef.current = -2000;
      }
    }
    prevTitlesLengthRef.current = titles.length;
  }, [titles.length]);

  useEffect(() => {
    const scroll = scrollRef.current;
    const container = containerRef.current;
    if (scroll && container) {
      const loop = () => {
        const height = container.clientHeight;
        // 末端から1000px手前までスクロールしたら追加
        if (movingRef.current < -height + 1000) {
          addWork();
          requestAnimationFrameRef.current = requestAnimationFrame(loop);
          return;
        }
        // もし末端までスクロールしたら終了
        if (movingRef.current < -height) {
          return;
        }
        scroll.style.transform = `translateY(${movingRef.current}px)`;
        movingRef.current -= speed;
        requestAnimationFrameRef.current = requestAnimationFrame(loop);
      };
      requestAnimationFrameRef.current = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(requestAnimationFrameRef.current);
      };
    }
  }, [speed, titles]);

  const handleSpeedUp = useCallback(() => {
    setSpeed((prev) => prev + 0.3);
  }, []);

  const handleSpeedDown = useCallback(() => {
    setSpeed((prev) => Math.max(0.1, prev - 0.3));
  }, []);

  return (
    <>
      <div ref={scrollRef} className="flex flex-col items-center justify-center">
        <div ref={containerRef} className="flex flex-col items-center justify-center">
          {titles.map((title, index) => (
            <CreditsItem key={index} title={title} credits={credits} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full min-h-screen h-full">
          <h2 className="text-6xl font-bold">Thank you for watching!</h2>
        </div>
      </div>
      <SwipeActionObserver onSwipedUp={handleSpeedUp} onSwipedDown={handleSpeedDown} />
      <MouseActionObserver onWheelUp={handleSpeedUp} onWheelDown={handleSpeedDown} />
    </>
  );
};
