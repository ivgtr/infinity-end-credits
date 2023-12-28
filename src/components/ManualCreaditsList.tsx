import { useCallback, useEffect, useRef, useState } from "react";
import { CreditsItem } from "./CreditsItem";

export const ManualCreditsList = ({
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onScroll={(e) => {
        const container = containerRef.current;
        if (container) {
          const height = container.clientHeight;
          const scrollAmount = e.currentTarget.scrollTop;
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
          {titles.map((title, index) => (
            <CreditsItem key={index} title={title} credits={credits} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <h2 className="text-6xl font-bold">Thank you for watching!</h2>
        </div>
      </div>
    </div>
  );
};
