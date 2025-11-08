import { useCallback, useEffect, useState } from "react";
import { useCredits } from "@/hooks/useCredits";
import { useViewingStats } from "@/hooks/useViewingStats";
import { ManualCreditsList } from "./ManualCreaditsList";
import { StatsModal } from "./StatsModal";

export const ManualCreditsCanvas = () => {
  const { titles, credits, addRandomWork } = useCredits();
  const { stats, trackScroll } = useViewingStats(titles, credits);
  const [showStatsModal, setShowStatsModal] = useState(false);

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

      {/* 統計ダッシュボードへのボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowStatsModal(true)}
          className="px-4 py-3 bg-purple-600/70 rounded-full shadow-lg text-white hover:bg-purple-700/80 transition-colors flex items-center justify-center text-sm font-semibold"
          title="統計ダッシュボード"
        >
          📊 統計
        </button>
      </div>

      {/* 統計モーダル */}
      <StatsModal
        isOpen={showStatsModal}
        onClose={() => setShowStatsModal(false)}
        stats={stats}
      />
    </div>
  );
};
