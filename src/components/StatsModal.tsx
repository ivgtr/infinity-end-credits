import { useEffect, useState } from "react";
import type { ViewingStats } from "@/types/stats";
import type { EasterEggStats } from "@/hooks/useEasterEggStats";
import {
  pixelsToKilometers,
  formatDuration,
  getTopRoles,
  generateFunMessages,
} from "@/utils/stats";

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: ViewingStats | null;
  easterEggStats?: EasterEggStats;
  onResetEasterEggs?: () => void;
}

// イースターエッグ統計用のヘルパー関数
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

export const StatsModal = ({ isOpen, onClose, stats, easterEggStats, onResetEasterEggs }: StatsModalProps) => {
  const [showEasterEggs, setShowEasterEggs] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (showEasterEggs) {
          setShowEasterEggs(false);
          setShowResetConfirm(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showEasterEggs, onClose]);

  // モーダルが閉じられたときに表示をリセット
  useEffect(() => {
    if (!isOpen) {
      setShowEasterEggs(false);
      setShowResetConfirm(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  if (!stats) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* 背景オーバーレイ */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* モーダルコンテンツ */}
        <div className="relative bg-black/90 rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-8 border border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
            aria-label="閉じる"
          >
            ×
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              まだ統計データがありません
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              エンドクレジットを鑑賞すると、ここに統計が表示されます
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    );
  }

  const km = pixelsToKilometers(stats.totalScrollDistance);
  const topRoles = getTopRoles(stats.roleCounts, 3);
  const funMessages = generateFunMessages(stats);

  const handleReset = () => {
    if (onResetEasterEggs) {
      onResetEasterEggs();
      setShowResetConfirm(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* 背景オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => {
          if (showEasterEggs) {
            setShowEasterEggs(false);
            setShowResetConfirm(false);
          } else {
            onClose();
          }
        }}
      />

      {/* モーダルコンテンツ */}
      <div className="relative bg-black/90 rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-white/10">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-6 pb-4 border-b border-white/10">
          {/* 戻るボタン（イースターエッグ統計表示時のみ） */}
          {showEasterEggs && (
            <button
              onClick={() => {
                setShowEasterEggs(false);
                setShowResetConfirm(false);
              }}
              className="absolute top-4 left-4 text-white/60 hover:text-white transition-colors flex items-center gap-2"
              aria-label="戻る"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
            aria-label="閉じる"
          >
            ×
          </button>

          <h1 className="text-2xl font-bold text-white mb-1">
            {showEasterEggs ? "イースターエッグ統計" : "鑑賞統計"}
          </h1>
          <p className="text-gray-400 text-sm">
            {showEasterEggs ? "発見したイースターエッグの記録" : "あなたのエンドクレジット鑑賞記録"}
          </p>
        </div>

        <div className="p-6 pt-2">
          {!showEasterEggs ? (
            // 通常の鑑賞統計
            <>
          {/* メイン統計カード */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 mt-5">
            {/* 総作品数 */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-gray-400 text-xs mb-2">
                総作品数
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stats.totalWorks.toLocaleString()}
              </div>
              <div className="text-gray-500 text-xs">作品</div>
            </div>

            {/* 延べスタッフ数 */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-gray-400 text-xs mb-2">
                延べスタッフ数
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stats.totalStaff.toLocaleString()}
              </div>
              <div className="text-gray-500 text-xs">人</div>
            </div>

            {/* 総スクロール距離 */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-gray-400 text-xs mb-2">
                スクロール距離
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {km.toFixed(2)}
              </div>
              <div className="text-gray-500 text-xs">km</div>
            </div>

            {/* 鑑賞時間 */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-gray-400 text-xs mb-2">
                鑑賞時間
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {formatDuration(stats.totalViewingTime)}
              </div>
              <div className="text-gray-500 text-xs">累計</div>
            </div>
          </div>

          {/* 役職TOP3 */}
          {topRoles.length > 0 && (
            <div className="bg-white/5 rounded-lg p-5 border border-white/10 mb-5">
              <h2 className="text-lg font-bold text-white mb-4">
                最も多く見た役職 TOP3
              </h2>
              <div className="space-y-2">
                {topRoles.map((item, index) => (
                  <div key={item.role} className="flex items-center">
                    <div className="text-xl font-bold mr-3 w-8 text-center text-gray-400">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white/5 rounded p-3 border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">
                          {item.role}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">
                          {item.count.toLocaleString()}人
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 面白い表現 */}
          {funMessages.length > 0 && (
            <div className="bg-white/5 rounded-lg p-5 border border-white/10 mb-5">
              <h2 className="text-lg font-bold text-white mb-3">
                記録
              </h2>
              <div className="space-y-2">
                {funMessages.map((message, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded p-3 border border-white/5"
                  >
                    <p className="text-gray-300 text-sm">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* フッター情報 */}
          <div className="text-center text-gray-500 text-xs pt-2">
            <p>
              最終更新:{" "}
              {new Date(stats.lastUpdatedAt).toLocaleString("ja-JP")}
            </p>
            <p className="mt-1">データは5秒ごとに自動保存されます</p>
          </div>

          {/* イースターエッグ統計へのボタン */}
          {easterEggStats && (
            <div className="mt-5">
              <button
                onClick={() => setShowEasterEggs(true)}
                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-xl">🥚</span>
                <span className="text-sm">イースターエッグ統計を見る</span>
                {easterEggStats.totalClicks > 0 && (
                  <span className="bg-white/90 text-black text-xs rounded-full px-2 py-0.5 font-bold ml-1">
                    {easterEggStats.totalClicks}
                  </span>
                )}
              </button>
            </div>
          )}
          </>
          ) : (
            // イースターエッグ統計
            easterEggStats && (
              <>
                <div className="mt-5 space-y-5">
                  {/* 合計クリック数 */}
                  <div className="text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-gray-400 text-xs mb-2">合計クリック数</p>
                    <p className="text-5xl font-bold text-white">{easterEggStats.totalClicks}</p>
                  </div>

                  {/* 各タイプ別の統計 */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white mb-3">タイプ別</h3>
                    {Object.entries(easterEggStats.clicksByType).map(([type, count]) => (
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
                    <p className="text-white text-sm">{formatTimestamp(easterEggStats.lastClickTimestamp)}</p>
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
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};
