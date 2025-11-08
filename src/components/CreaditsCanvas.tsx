import { useCallback, useEffect, useState } from "react";
import { CreditsList } from "./CreditsList";
import { useCredits } from "@/hooks/useCredits";
import { SpeedControl } from "./SpeedControl";

export const CreditsCanvas = () => {
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
      <SpeedControl onSpeedChange={handleSpeedChange} />
    </div>
  );
};
