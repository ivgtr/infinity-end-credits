import { useCredits } from "@/hooks/useCredits";
import { useResize } from "@/hooks/useResize";
import { useEffect, useMemo, useRef, useState } from "react";
import { CreditsTitle } from "./CreaditsTitle";
import { CreditsRole } from "./CreditsRole";
import { CreditsItem } from "./CreditsItem";

export const CreditsList = ({
  credits,
  addWork,
}: {
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
  const { height } = useResize(containerRef);

  const titles = useMemo(() => {
    return Object.keys(credits);
  }, [credits]);

  const motion = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      let moving = 0;
      const loop = () => {
        // もし末端までスクロールしたら終了
        if (moving < -height) {
          return;
        }
        scroll.style.transform = `translateY(${moving}px)`;
        moving -= 1;
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
  };

  useEffect(() => {
    motion();
  }, [height]);

  return (
    <div ref={scrollRef} className="flex flex-col items-center justify-center">
      <div ref={containerRef}>
        {titles.map((title, index) => (
          <CreditsItem key={index} title={title} credits={credits} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-6xl font-bold">Thank you for watching!</h2>
      </div>
    </div>
  );
};
