import { useEffect, useState } from "react";
import type { EasterEggStats as EasterEggStatsType } from "@/hooks/useEasterEggStats";

interface EasterEggStatsProps {
  stats: EasterEggStatsType;
  onReset: () => void;
}

const formatTimestamp = (timestamp: number | null): string => {
  if (!timestamp) return "まだありません";

  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "たった今";
  if (diffMins < 60) return `${diffMins}分前`;
  if (diffHours < 24) return `${diffHours}時間前`;
  if (diffDays < 7) return `${diffDays}日前`;

  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getEasterEggLabel = (type: string): string => {
  switch (type) {
    case "famous_director":
      return "有名監督";
    case "funny_role":
      return "面白い役職";
    case "same_name":
      return "全員同じ名前";
    default:
      return type;
  }
};

const getEasterEggEmoji = (type: string): string => {
  switch (type) {
    case "famous_director":
      return "✨";
    case "funny_role":
      return "🎭";
    case "same_name":
      return "👥";
    default:
      return "🎯";
  }
};

export const EasterEggStats = ({ stats, onReset }: EasterEggStatsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setShowResetConfirm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleReset = () => {
    onReset();
    setShowResetConfirm(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* 固定ボタン */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-black/70 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors"
        aria-label="イースターエッグ統計を表示"
      >
        <span className="text-2xl">🥚</span>
        {stats.totalClicks > 0 && (
          <span className="absolute -top-1 -right-1 bg-white/90 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {stats.totalClicks > 99 ? "99+" : stats.totalClicks}
          </span>
        )}
      </button>

      {/* モーダル */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 背景オーバーレイ */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* モーダルコンテンツ */}
          <div className="relative bg-black/90 border border-white/10 rounded-lg shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* ヘッダー */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-white/10 p-6 pb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
                aria-label="閉じる"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold text-white mb-1">イースターエッグ統計</h2>
              <p className="text-gray-400 text-sm">発見したイースターエッグの記録</p>
            </div>

            {/* コンテンツ */}
            <div className="p-6 pt-2">
              <div className="mt-5 space-y-5">
              {/* 合計クリック数 */}
              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-gray-400 text-xs mb-2">合計クリック数</p>
                <p className="text-5xl font-bold text-white">{stats.totalClicks}</p>
              </div>

              {/* 各タイプ別の統計 */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-3">タイプ別</h3>
                {Object.entries(stats.clicksByType).map(([type, count]) => (
                  <div
                    key={type}
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getEasterEggEmoji(type)}</span>
                      <span className="text-white text-sm">{getEasterEggLabel(type)}</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{count}</span>
                  </div>
                ))}
              </div>

              {/* 最後のクリック */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-gray-400 text-xs mb-1">最後のクリック</p>
                <p className="text-white text-sm">{formatTimestamp(stats.lastClickTimestamp)}</p>
              </div>

              {/* リセットボタン */}
              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
                >
                  統計をリセット
                </button>
              ) : (
                <div className="space-y-2">
                  <p className="text-red-400 text-center text-sm">
                    本当にリセットしますか？この操作は元に戻せません。
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
                    >
                      キャンセル
                    </button>
                    <button
                      onClick={handleReset}
                      className="py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
                    >
                      リセット
                    </button>
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
