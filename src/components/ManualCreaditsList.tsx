import { useCallback, useEffect, useRef, useState } from "react";
import { CreditsItem } from "./CreditsItem";
import type { Credit } from "@/types/credits";

// メモリリーク防止: useCreditsフックで最大30作品に制限されているため、
// このコンポーネントではDOMノード数も自動的に制限される
// ネイティブスクロールを使用しているため、ブラウザが自動的にオフスクリーン要素を最適化
export const ManualCreditsList = ({
  titles,
  credits,
  addWork,
  onScrollDistanceChange,
  onCreditViewed,
  onWorkCompleted,
}: {
  titles: string[];
  credits: {
    [key: string]: Credit[];
  };
  addWork: () => void;
  onScrollDistanceChange?: (distance: number) => void;
  onCreditViewed: (credit: Credit) => void;
  onWorkCompleted: (workTitle: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollPositionRef = useRef<number>(0);

  return (
    <div
      onScroll={(e) => {
        const container = containerRef.current;
        if (container) {
          const height = container.clientHeight;
          const scrollAmount = e.currentTarget.scrollTop;

          // スクロール距離を追跡
          const scrollDelta = scrollAmount - lastScrollPositionRef.current;
          if (scrollDelta > 0 && onScrollDistanceChange) {
            onScrollDistanceChange(scrollDelta);
          }
          lastScrollPositionRef.current = scrollAmount;

          // 末端から1000px手前までスクロールしたら追加
          if (scrollAmount > height - 1000) {
            addWork();
          }
        }
      }}
      className="min-h-screen h-full w-full fixed overflow-y-scroll"
    >
      <div className="flex flex-col items-center justify-center">
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
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <h2 className="text-6xl font-bold">Thank you for watching!</h2>
        </div>
      </div>
    </div>
  );
};
