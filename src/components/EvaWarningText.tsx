import { useEffect, useState } from "react";

interface WarningMessage {
  id: number;
  text: string;
  position: "top" | "bottom";
  side: "left" | "right";
}

const WARNING_TEXTS = [
  "WARNING",
  "CAUTION",
  "DANGER",
  "ALERT",
  "CRITICAL",
  "注意",
  "警告",
  "危険",
];

export const EvaWarningText = () => {
  const [messages, setMessages] = useState<WarningMessage[]>([]);

  useEffect(() => {
    // ランダムな間隔で警告テキストを追加
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30%の確率で警告を表示
        const newMessage: WarningMessage = {
          id: Date.now(),
          text: WARNING_TEXTS[Math.floor(Math.random() * WARNING_TEXTS.length)],
          position: Math.random() > 0.5 ? "top" : "bottom",
          side: Math.random() > 0.5 ? "left" : "right",
        };

        setMessages((prev) => [...prev, newMessage]);

        // 5秒後に削除
        setTimeout(() => {
          setMessages((prev) => prev.filter((m) => m.id !== newMessage.id));
        }, 5000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 13 }}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`
            absolute text-red-600 font-bold tracking-wider
            ${message.position === "top" ? "top-20" : "bottom-20"}
            ${message.side === "left" ? "left-4" : "right-4"}
            animate-pulse
          `}
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
            textShadow: "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.5)",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            animation: "warningFade 5s ease-in-out",
          }}
        >
          {message.text}
        </div>
      ))}

      {/* アニメーション定義 */}
      <style jsx>{`
        @keyframes warningFade {
          0% {
            opacity: 0;
            transform: translateX(${Math.random() > 0.5 ? "-20px" : "20px"});
          }
          10% {
            opacity: 1;
            transform: translateX(0);
          }
          90% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(${Math.random() > 0.5 ? "20px" : "-20px"});
          }
        }
      `}</style>
    </div>
  );
};
