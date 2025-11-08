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

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  useEffect(() => {
    addWork();
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
  }, []);

  return (
    <div className="min-h-screen h-full w-full overflow-hidden">
      {titles.length > 0 && <CreditsList titles={titles} credits={credits} addWork={addWork} speed={speed} />}

      {/* 右下のコントロールUIを縦並びに配置 */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <SpeedControl onSpeedChange={handleSpeedChange} />
        <BackgroundMusicPlayer autoPlay={autoPlayMusic} />
      </div>
    </div>
  );
};
