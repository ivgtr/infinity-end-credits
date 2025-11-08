import { useCallback, useEffect, useState } from "react";
import { useCredits } from "@/hooks/useCredits";
import { useViewingStats } from "@/hooks/useViewingStats";
import { ManualCreditsList } from "./ManualCreaditsList";
import { StatsModal } from "./StatsModal";
import { TitleScreen } from "./TitleScreen";

export const ManualCreditsCanvas = () => {
  const { titles, credits, addRandomWork } = useCredits();
  const { stats, trackScroll, trackCreditViewed, trackWorkCompleted } = useViewingStats();
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showTitleScreen, setShowTitleScreen] = useState(true);
  const [firstTitle, setFirstTitle] = useState<string>("");

  const addWork = useCallback(() => {
    addRandomWork();
  }, []);

  // 最初のタイトルを生成してタイトル画面を表示
  useEffect(() => {
    addWork();
  }, []);

  // タイトルが生成されたら記録
  useEffect(() => {
    if (titles.length > 0 && !firstTitle) {
      setFirstTitle(titles[0]);
    }
  }, [titles, firstTitle]);

  return (
    <div className="min-h-screen h-full w-full">
      {/* タイトル画面 */}
      {showTitleScreen && firstTitle && (
        <TitleScreen
          title={firstTitle}
          onComplete={() => setShowTitleScreen(false)}
          duration={3000}
        />
      )}

      {/* クレジットリスト（タイトル画面表示中も常にレンダリングするが、非表示） */}
      {titles.length > 0 && (
        <div className={showTitleScreen ? "invisible" : "visible"}>
          <ManualCreditsList
            titles={titles}
            credits={credits}
            addWork={addWork}
            onScrollDistanceChange={trackScroll}
            onCreditViewed={trackCreditViewed}
            onWorkCompleted={trackWorkCompleted}
          />
        </div>
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
      />
    </div>
  );
};
