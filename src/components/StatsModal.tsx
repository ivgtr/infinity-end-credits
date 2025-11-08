import { useEffect } from "react";
import type { ViewingStats } from "@/types/stats";
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
}

export const StatsModal = ({ isOpen, onClose, stats }: StatsModalProps) => {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 border border-white/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl leading-none"
            aria-label="閉じる"
          >
            ×
          </button>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              まだ統計データがありません
            </h2>
            <p className="text-gray-300 mb-6">
              エンドロールを鑑賞すると、ここに統計が表示されます
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold"
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* 背景オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* モーダルコンテンツ */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm z-10 p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl leading-none transition-colors"
            aria-label="閉じる"
          >
            ×
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">
            鑑賞統計ダッシュボード
          </h1>
          <p className="text-gray-300">あなたのエンドロール鑑賞記録</p>
        </div>

        <div className="p-6 pt-2">
          {/* メイン統計カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* 総作品数 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20">
              <div className="text-purple-300 text-sm font-semibold mb-2">
                総作品数
              </div>
              <div className="text-4xl font-bold text-white mb-1">
                {stats.totalWorks.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">作品</div>
            </div>

            {/* 延べスタッフ数 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20">
              <div className="text-pink-300 text-sm font-semibold mb-2">
                延べスタッフ数
              </div>
              <div className="text-4xl font-bold text-white mb-1">
                {stats.totalStaff.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">人</div>
            </div>

            {/* 総スクロール距離 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20">
              <div className="text-blue-300 text-sm font-semibold mb-2">
                総スクロール距離
              </div>
              <div className="text-4xl font-bold text-white mb-1">
                {km.toFixed(2)}
              </div>
              <div className="text-gray-400 text-sm">km</div>
            </div>

            {/* 鑑賞時間 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20">
              <div className="text-green-300 text-sm font-semibold mb-2">
                鑑賞時間
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {formatDuration(stats.totalViewingTime)}
              </div>
              <div className="text-gray-400 text-sm">累計</div>
            </div>
          </div>

          {/* 役職TOP3 */}
          {topRoles.length > 0 && (
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                最も多く見た役職 TOP3
              </h2>
              <div className="space-y-3">
                {topRoles.map((item, index) => (
                  <div key={item.role} className="flex items-center">
                    <div
                      className={`text-3xl font-bold mr-4 w-10 text-center ${
                        index === 0
                          ? "text-yellow-400"
                          : index === 1
                          ? "text-gray-300"
                          : "text-orange-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-lg font-semibold">
                          {item.role}
                        </span>
                        <span className="text-purple-300 text-lg font-bold">
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
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30 mb-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                あなたの偉業
              </h2>
              <div className="space-y-3">
                {funMessages.map((message, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white/10 rounded-lg p-4"
                  >
                    <span className="text-2xl mr-3">🎉</span>
                    <p className="text-white text-base flex-1">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* フッター情報 */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              最終更新:{" "}
              {new Date(stats.lastUpdatedAt).toLocaleString("ja-JP")}
            </p>
            <p className="mt-1">データは5秒ごとに自動保存されます</p>
          </div>
        </div>
      </div>
    </div>
  );
};
