import { useCallback, useEffect, useState } from "react";
import { useCredits } from "@/hooks/useCredits";
import { useViewingStats } from "@/hooks/useViewingStats";
import { useEasterEggStats } from "@/hooks/useEasterEggStats";
import { ManualCreditsList } from "./ManualCreaditsList";
import { StatsModal } from "./StatsModal";
import { FilmEffects } from "./FilmEffects";
import { Letterbox } from "./Letterbox";
import type { EasterEggType } from "@/types/credits";

export const ManualCreditsCanvas = () => {
  const { titles, credits, addRandomWork } = useCredits();
  const { stats, trackScroll, trackCreditViewed, trackWorkCompleted } = useViewingStats();
  const { stats: easterEggStats, recordClick, resetStats } = useEasterEggStats();
  const [showStatsModal, setShowStatsModal] = useState(false);

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  const handleEasterEggClick = useCallback((type: EasterEggType, creditId: number) => {
    recordClick(type, creditId);
  }, [recordClick]);

  useEffect(() => {
    addWork();
  }, []);

  return (
    <div className="min-h-screen h-full w-full">
      {/* 背景演出レイヤー */}
      <FilmEffects />
      <Letterbox />

      {titles.length > 0 && (
        <ManualCreditsList
          titles={titles}
          credits={credits}
          addWork={addWork}
          onScrollDistanceChange={trackScroll}
          onCreditViewed={trackCreditViewed}
          onWorkCompleted={trackWorkCompleted}
          onEasterEggClick={handleEasterEggClick}
        />
      )}

      {/* 統計ボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowStatsModal(true)}
          className="px-3 py-2 bg-black/70 rounded-full shadow-lg text-white hover:bg-black/80 transition-colors flex items-center gap-2"
          title="統計"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 3h2v13h-2V8zm4-2h2v15h-2V6zm4 4h2v11h-2V10z" />
          </svg>
          <span className="text-sm">統計</span>
        </button>
      </div>

      {/* 統計モーダル */}
      <StatsModal
        isOpen={showStatsModal}
        onClose={() => setShowStatsModal(false)}
        stats={stats}
        easterEggStats={easterEggStats}
        onResetEasterEggs={resetStats}
      />
    </div>
  );
};
