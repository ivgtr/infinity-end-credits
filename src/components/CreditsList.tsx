import { useCredits } from "@/hooks/useCredits";
import { useResize } from "@/hooks/useResize";
import { useEffect, useRef, useState } from "react";

export const CreditsList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useResize(containerRef);
  const { titles, credits } = useCredits();

  const motion = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      let moving = 0;
      const loop = () => {
        if (moving < -height) {
          console.log("end");
          console.log(moving, height);
          return;
        }
        scroll.style.transform = `translateY(${moving}px)`;
        moving -= 2;
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
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-32"
          >
            <h2 className="text-6xl font-bold">{title}</h2>
            <div className="flex flex-col items-center justify-center mt-24 gap-8">
              {credits[title].map((credit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <h2 className="text-2xl font-bold">{credit.role}</h2>
                  <div
                    className="
                 grid grid-cols-2 gap-4 mt-8
                "
                  >
                    {credit.names.map((name, index) => (
                      <p key={index}>{name}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="
        flex flex-col items-center justify-center w-full min-h-screen 
        "
      >
        <h2 className="text-6xl font-bold">Thank you for watching!</h2>
      </div>
    </div>
  );
};
