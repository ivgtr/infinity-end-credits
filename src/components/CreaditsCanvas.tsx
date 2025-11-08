import { useCallback, useEffect, useState } from "react";
import { CreditsList } from "./CreditsList";
import { useCredits } from "@/hooks/useCredits";
import { useViewingStats } from "@/hooks/useViewingStats";
import { SpeedControl } from "./SpeedControl";
import { BackgroundMusicPlayer } from "./BackgroundMusicPlayer";
import { StatsModal } from "./StatsModal";

interface CreditsCanvasProps {
  autoPlayMusic?: boolean;
}

export const CreditsCanvas = ({ autoPlayMusic = false }: CreditsCanvasProps) => {
  const { titles, credits, addRandomWork } = useCredits();
  const { stats, trackScroll } = useViewingStats(titles, credits);
  const [speed, setSpeed] = useState(1);
  const [showUI, setShowUI] = useState(true);
  const [showStatsModal, setShowStatsModal] = useState(false);

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
      {titles.length > 0 && (
        <CreditsList
          titles={titles}
          credits={credits}
          addWork={addWork}
          speed={speed}
          onScrollDistanceChange={trackScroll}
        />
      )}

      {/* 右下のコントロールUIを縦並びに配置（音楽は常に再生） */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className={`flex flex-col items-end gap-2 controls-ui relative transition-opacity ${
            showUI ? "" : "opacity-0 hover:opacity-10 pointer-events-none"
          }`}
        >
          {/* UI非表示時の透明クリック可能エリア */}
          {!showUI && (
            <button
              onClick={() => setShowUI(true)}
              className="absolute inset-0 pointer-events-auto rounded-lg cursor-pointer"
              aria-label="UIを表示"
              title="クリックでUIを表示"
            />
          )}

          <button
            onClick={() => setShowUI(false)}
            className="px-3 py-2 bg-black/70 rounded-full shadow-lg text-white hover:bg-black/80 transition-colors flex items-center justify-center"
            aria-label="UIを非表示"
            title="UIを非表示"
          >
            👁
          </button>
          <SpeedControl onSpeedChange={handleSpeedChange} />
          <BackgroundMusicPlayer autoPlay={autoPlayMusic} />
          <button
            onClick={() => setShowStatsModal(true)}
            className="px-3 py-2 bg-black/70 rounded-full shadow-lg text-white hover:bg-black/80 transition-colors flex items-center justify-center text-sm"
            title="統計"
          >
            統計
          </button>
          <div className="text-xs text-white/60 text-center">
            Space/長押し: 倍速切替 / M: ミュート / H: UI非表示
          </div>
        </div>
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
