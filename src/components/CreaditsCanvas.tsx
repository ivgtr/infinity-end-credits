import { useCallback, useEffect, useState } from "react";
import { CreditsList } from "./CreditsList";
import { useCredits } from "@/hooks/useCredits";
import { SpeedControl } from "./SpeedControl";
import { BackgroundMusicPlayer } from "./BackgroundMusicPlayer";

interface CreditsCanvasProps {
  autoPlayMusic?: boolean;
}

export const CreditsCanvas = ({ autoPlayMusic = false }: CreditsCanvasProps) => {
  const { titles, credits, addRandomWork } = useCredits();
  const [speed, setSpeed] = useState(1);
  const [showUI, setShowUI] = useState(true);

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  useEffect(() => {
    addWork();
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
  }, []);

  // Hキーでの UI表示/非表示切り替え
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // 入力フィールドなどでキーを押した場合は無視
      if (e.target !== document.body) return;

      // Hキー: UI表示/非表示
      if (e.code === "KeyH") {
        e.preventDefault();
        setShowUI(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen h-full w-full overflow-hidden">
      {titles.length > 0 && <CreditsList titles={titles} credits={credits} addWork={addWork} speed={speed} />}

      {/* 右下のコントロールUIを縦並びに配置 */}
      {showUI && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          <SpeedControl onSpeedChange={handleSpeedChange} />
          <BackgroundMusicPlayer autoPlay={autoPlayMusic} />

          {/* ヒントテキスト */}
          <div className="text-xs text-white/60 text-center">
            Space/長押し: 倍速切替 / M: ミュート / H: UI非表示
          </div>
        </div>
      )}
    </div>
  );
};
