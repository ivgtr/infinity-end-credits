import { useCallback, useEffect } from "react";
import { useCredits } from "@/hooks/useCredits";
import { ManualCreditsList } from "./ManualCreaditsList";

export const ManualCreditsCanvas = () => {
  const { titles, credits, addRandomWork } = useCredits();

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  useEffect(() => {
    addWork();
  }, []);

  return (
    <div className="min-h-screen h-full w-full">
      {titles.length > 0 && <ManualCreditsList titles={titles} credits={credits} addWork={addWork} />}
    </div>
  );
};
