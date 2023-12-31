import { useCallback, useEffect } from "react";
import { CreditsList } from "./CreditsList";
import { useCredits } from "@/hooks/useCredits";

export const CreditsCanvas = () => {
  const { titles, credits, addRandomWork } = useCredits();

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  useEffect(() => {
    addWork();
  }, []);

  return (
    <div className="min-h-screen h-full w-full overflow-hidden">
      {titles.length > 0 && <CreditsList titles={titles} credits={credits} addWork={addWork} />}
    </div>
  );
};
