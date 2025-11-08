import { useEffect, useRef } from "react";

export const FilmEffects = () => {
  const grainCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = grainCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas サイズを設定
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // フィルムグレインアニメーション
    const animateGrain = () => {
      if (!ctx || !canvas) return;

      // ノイズを生成
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 50; // ノイズの強度
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 25;    // A (透明度を低めに)
      }

      ctx.putImageData(imageData, 0, 0);

      animationFrameRef.current = requestAnimationFrame(animateGrain);
    };

    animateGrain();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <>
      {/* フィルムグレイン */}
      <canvas
        ref={grainCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 10, mixBlendMode: "overlay", opacity: 0.15 }}
      />

      {/* ビネット効果 */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 11,
          background: "radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      />

      {/* フィルムの傷・ホコリ効果（ランダムに表示） */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 12,
          background: `
            repeating-linear-gradient(
              ${Math.random() * 360}deg,
              transparent,
              transparent ${Math.random() * 100 + 50}px,
              rgba(255, 255, 255, 0.02) ${Math.random() * 100 + 50}px,
              rgba(255, 255, 255, 0.02) ${Math.random() * 100 + 52}px
            )
          `,
          opacity: 0.3,
        }}
      />

      {/* スキャンライン（走査線）効果 */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 13,
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            )
          `,
          opacity: 0.4,
        }}
      />
    </>
  );
};
