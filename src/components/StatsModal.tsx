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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* 背景オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* モーダルコンテンツ */}
      <div className="relative bg-black/90 rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-white/10">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-6 pb-4 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
            aria-label="閉じる"
          >
            ×
          </button>
          <h1 className="text-2xl font-bold text-white mb-1">
            鑑賞統計
          </h1>
          <p className="text-gray-400 text-sm">あなたのエンドクレジット鑑賞記録</p>
        </div>

        <div className="p-6 pt-2">
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
        </div>
      </div>
    </div>
  );
};
