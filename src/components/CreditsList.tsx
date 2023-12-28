import { useCredits } from "@/hooks/useCredits";
import { useResize } from "@/hooks/useResize";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CreditsTitle } from "./CreaditsTitle";
import { CreditsRole } from "./CreditsRole";
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
  // const { height } = useResize(containerRef);
  const [speed, setSpeed] = useState(1);
  const movingRef = useRef<number>(0);
  const requestAnimationFrameRef = useRef<number>(0);

  const motion = () => {
    const scroll = scrollRef.current;
    const container = containerRef.current;
    if (scroll && container) {
      const loop = () => {
        const height = container.clientHeight;
        // 末端から500px手前までスクロールしたら追加
        if (movingRef.current < -height + 500) {
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
    }
  };

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
    setSpeed((prev) => prev + 0.2);
  }, []);

  const handleSpeedDown = useCallback(() => {
    setSpeed((prev) => Math.max(0.1, prev - 0.2));
  }, []);

  const handleAddWork = useCallback(() => {
    addWork();
  }, []);

  return (
    <>
      <div ref={scrollRef} className="flex flex-col items-center justify-center">
        <div ref={containerRef} className="flex flex-col items-center justify-center">
          {titles.map((title, index) => (
            <CreditsItem key={index} title={title} credits={credits} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <h2 className="text-6xl font-bold">Thank you for watching!</h2>
        </div>
      </div>
      <SwipeActionObserver onSwipedUp={handleSpeedUp} onSwipedDown={handleSpeedDown} />
      <MouseActionObserver onWheelUp={handleSpeedUp} onWheelDown={handleSpeedDown} />
    </>
  );
};
