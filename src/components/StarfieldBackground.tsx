import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  speed: number;
}

interface StarfieldBackgroundProps {
  speed?: number;
  colorTheme?: {
    primary: string;
    secondary: string;
  };
}

export const StarfieldBackground = ({
  speed = 1,
  colorTheme = { primary: "#1a0033", secondary: "#330066" }
}: StarfieldBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);
  const speedRef = useRef<number>(speed);
  const colorThemeRef = useRef(colorTheme);

  // speedとcolorThemeの最新値をrefに保存（再レンダリングを防ぐ）
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    colorThemeRef.current = colorTheme;
  }, [colorTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
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

    // 星を初期化
    const initStars = () => {
      const stars: Star[] = [];
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 3, // 深度（0-3）
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.5 + 0.2,
        });
      }

      starsRef.current = stars;
    };

    initStars();

    // アニメーションループ
    const animate = () => {
      if (!ctx || !canvas) return;

      // グラデーション背景を描画（最新のcolorThemeを使用）
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, colorThemeRef.current.primary);
      gradient.addColorStop(0.5, "#000000");
      gradient.addColorStop(1, colorThemeRef.current.secondary);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 星を描画（最新のspeedを使用）
      starsRef.current.forEach((star) => {
        // 星の位置を更新（上に移動）
        star.y -= star.speed * speedRef.current;

        // 画面外に出たら下に戻す
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        // 深度に応じた視差効果
        const parallaxFactor = 1 + star.z * 0.3;
        const displayX = star.x;
        const displayY = star.y;

        // 星を描画
        ctx.beginPath();
        ctx.arc(displayX, displayY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // たまに明滅効果
        if (Math.random() > 0.99) {
          star.opacity = Math.random() * 0.5 + 0.3;
        }
      });

      // ランダムに流れ星を描画（低確率）
      if (Math.random() > 0.98) {
        drawShootingStar(ctx, canvas);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []); // 依存配列を空にして初回のみ実行

  // 流れ星を描画
  const drawShootingStar = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const startX = Math.random() * canvas.width;
    const startY = Math.random() * canvas.height * 0.3;
    const length = Math.random() * 80 + 40;
    const angle = Math.PI / 4 + Math.random() * 0.5;

    const gradient = ctx.createLinearGradient(
      startX,
      startY,
      startX + Math.cos(angle) * length,
      startY + Math.sin(angle) * length
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + Math.cos(angle) * length, startY + Math.sin(angle) * length);
    ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};
