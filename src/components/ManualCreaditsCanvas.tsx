import { useCallback, useEffect } from "react";
import { useCredits } from "@/hooks/useCredits";
import { useViewingStats } from "@/hooks/useViewingStats";
import { ManualCreditsList } from "./ManualCreaditsList";

export const ManualCreditsCanvas = () => {
  const { titles, credits, addRandomWork } = useCredits();
  const { trackScroll } = useViewingStats(titles, credits);

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  useEffect(() => {
    addWork();
  }, []);

  return (
    <div className="min-h-screen h-full w-full">
      {titles.length > 0 && (
        <ManualCreditsList
          titles={titles}
          credits={credits}
          addWork={addWork}
          onScrollDistanceChange={trackScroll}
        />
      )}

      {/* 統計ダッシュボードへのリンク */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/d"
          className="px-4 py-3 bg-purple-600/70 rounded-full shadow-lg text-white hover:bg-purple-700/80 transition-colors flex items-center justify-center text-sm font-semibold"
          title="統計ダッシュボード"
        >
          📊 統計
        </a>
      </div>
    </div>
  );
};
