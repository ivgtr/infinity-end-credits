import { useEffect, useRef } from "react";
import { CreditsItem } from "./CreditsItem";
import type { Credit } from "@/types/credits";

// スクロール速度の基準値（px/sec）
// speed=1の時に60px/secでスクロールする
const BASE_SCROLL_SPEED_PX_PER_SEC = 60;

export const CreditsList = ({
  titles,
  credits,
  addWork,
  speed,
  onScrollDistanceChange,
  onCreditViewed,
  onWorkCompleted,
}: {
  titles: string[];
  credits: {
    [key: string]: Credit[];
  };
  addWork: () => void;
  speed: number; // スクロール速度の倍率（1 = 標準速度60px/sec, 2 = 倍速120px/sec）
  onScrollDistanceChange?: (distance: number) => void;
  onCreditViewed: (credit: Credit) => void;
  onWorkCompleted: (workTitle: string) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const movingRef = useRef<number>(0);
  const requestAnimationFrameRef = useRef<number>(0);
  const prevTitlesLengthRef = useRef<number>(0);
  const addWorkRef = useRef(addWork);
  const lastScrollPositionRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(performance.now());

  // addWorkの参照を常に最新に保つ
  useEffect(() => {
    addWorkRef.current = addWork;
  }, [addWork]);

  // メモリリーク防止: titlesが減った場合（古いアイテムが削除された場合）にスクロール位置を調整
  useEffect(() => {
    if (titles.length < prevTitlesLengthRef.current && titles.length > 0) {
      // アイテムが削除された場合、削除されたアイテム分だけスクロール位置を前進させる
      // これにより、視覚的なジャンプなしでメモリを解放できる
      const deletedCount = prevTitlesLengthRef.current - titles.length;
      // 1作品あたりの平均高さを2000pxと仮定して調整
      const estimatedHeight = deletedCount * 2000;
      movingRef.current += estimatedHeight;
      // 注: この調整により、ユーザーには何も変化が見えず、スクロールは滑らかに継続
    }
    prevTitlesLengthRef.current = titles.length;
  }, [titles.length]);

  useEffect(() => {
    const scroll = scrollRef.current;
    const container = containerRef.current;
    if (scroll && container) {
      // 時間ベースアニメーション用の初期化
      lastFrameTimeRef.current = performance.now();

      const loop = (currentTime: number) => {
        const height = container.clientHeight;
        // 末端から1000px手前までスクロールしたら追加
        if (movingRef.current < -height + 1000) {
          addWorkRef.current();
          requestAnimationFrameRef.current = requestAnimationFrame(loop);
          return;
        }
        // もし末端までスクロールしたら終了
        if (movingRef.current < -height) {
          return;
        }
        scroll.style.transform = `translateY(${movingRef.current}px)`;

        // スクロール距離を追跡（絶対値で計算）
        const currentPosition = Math.abs(movingRef.current);
        const scrollDelta = currentPosition - lastScrollPositionRef.current;
        if (scrollDelta > 0 && onScrollDistanceChange) {
          onScrollDistanceChange(scrollDelta);
        }
        lastScrollPositionRef.current = currentPosition;

        // 時間ベースのアニメーション: deltaTimeを計算してフレームレートに依存しないようにする
        const deltaTime = currentTime - lastFrameTimeRef.current;
        lastFrameTimeRef.current = currentTime;

        // 速度をpx/secで計算（speed倍率 × 基準速度60px/sec）
        // deltaTimeはミリ秒なので1000で割って秒に変換
        const speedInPxPerSec = speed * BASE_SCROLL_SPEED_PX_PER_SEC;
        const pixelsToMove = speedInPxPerSec * (deltaTime / 1000);
        movingRef.current -= pixelsToMove;

        requestAnimationFrameRef.current = requestAnimationFrame(loop);
      };
      requestAnimationFrameRef.current = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(requestAnimationFrameRef.current);
      };
    }
  }, [speed, onScrollDistanceChange]);

  return (
    <div ref={scrollRef} className="flex flex-col items-center justify-center" style={{ willChange: 'transform' }}>
      <div ref={containerRef} className="flex flex-col items-center justify-center">
        {titles.map((title) => (
          <CreditsItem
            key={title}
            title={title}
            credits={credits}
            onCreditViewed={onCreditViewed}
            onWorkCompleted={onWorkCompleted}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center w-full min-h-screen h-full">
        <h2
          className="text-6xl font-bold"
          style={{
            textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)"
          }}
        >
          Thank you for watching!
        </h2>
      </div>
    </div>
  );
};
