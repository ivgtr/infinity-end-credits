import { useEffect, useRef, useState } from "react";

export const FPSMonitor = () => {
  const [fps, setFps] = useState(0);
  const [avgFps, setAvgFps] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsHistoryRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    const measureFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTimeRef.current;

      // 1秒ごとにFPSを更新
      if (elapsed >= 1000) {
        const currentFps = Math.round((frameCountRef.current * 1000) / elapsed);
        setFps(currentFps);

        // FPS履歴を保存（最大60サンプル）
        fpsHistoryRef.current.push(currentFps);
        if (fpsHistoryRef.current.length > 60) {
          fpsHistoryRef.current.shift();
        }

        // 平均FPSを計算
        const avg = Math.round(
          fpsHistoryRef.current.reduce((a, b) => a + b, 0) / fpsHistoryRef.current.length
        );
        setAvgFps(avg);

        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      rafRef.current = requestAnimationFrame(measureFPS);
    };

    rafRef.current = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div className="fixed top-6 left-6 z-[100] bg-black/80 text-white p-4 rounded-lg font-mono text-xs space-y-1">
      <div className="font-bold text-sm mb-2">Performance Monitor</div>
      <div>
        <span className="text-gray-400">FPS:</span>{" "}
        <span className={fps < 30 ? "text-red-400" : fps < 50 ? "text-yellow-400" : "text-green-400"}>
          {fps}
        </span>
      </div>
      <div>
        <span className="text-gray-400">Avg FPS:</span>{" "}
        <span className={avgFps < 30 ? "text-red-400" : avgFps < 50 ? "text-yellow-400" : "text-green-400"}>
          {avgFps}
        </span>
      </div>
      <div>
        <span className="text-gray-400">Width:</span> {windowSize.width}px
      </div>
      <div>
        <span className="text-gray-400">Height:</span> {windowSize.height}px
      </div>
      <div>
        <span className="text-gray-400">Pixels:</span>{" "}
        {(windowSize.width * windowSize.height / 1000000).toFixed(2)}M
      </div>
    </div>
  );
};
