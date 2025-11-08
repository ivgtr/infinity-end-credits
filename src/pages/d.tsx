import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ViewingStats } from "@/types/stats";
import {
  loadStats,
  pixelsToKilometers,
  formatDuration,
  getTopRoles,
  generateFunMessages,
} from "@/utils/stats";

export default function Dashboard() {
  const [stats, setStats] = useState<ViewingStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = loadStats();
    setStats(data);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">読み込み中...</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            まだ統計データがありません
          </h1>
          <p className="text-gray-300 mb-8">
            エンドロールを鑑賞すると、ここに統計が表示されます
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            エンドロールを見る
          </Link>
        </div>
      </div>
    );
  }

  const km = pixelsToKilometers(stats.totalScrollDistance);
  const topRoles = getTopRoles(stats.roleCounts, 3);
  const funMessages = generateFunMessages(stats);

  return (
    <>
      <Head>
        <title>鑑賞統計ダッシュボード - 無限エンドロール</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              鑑賞統計ダッシュボード
            </h1>
            <p className="text-gray-300 text-lg">
              あなたのエンドロール鑑賞記録
            </p>
          </div>

          {/* メイン統計カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* 総作品数 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-purple-300 text-sm font-semibold mb-2">
                総作品数
              </div>
              <div className="text-5xl font-bold text-white mb-1">
                {stats.totalWorks.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">作品</div>
            </div>

            {/* 総スタッフ数 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-pink-300 text-sm font-semibold mb-2">
                総スタッフ数
              </div>
              <div className="text-5xl font-bold text-white mb-1">
                {stats.totalStaff.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">人</div>
            </div>

            {/* 総スクロール距離 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-blue-300 text-sm font-semibold mb-2">
                総スクロール距離
              </div>
              <div className="text-5xl font-bold text-white mb-1">
                {km.toFixed(2)}
              </div>
              <div className="text-gray-400 text-sm">km</div>
            </div>

            {/* 鑑賞時間 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-green-300 text-sm font-semibold mb-2">
                鑑賞時間
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {formatDuration(stats.totalViewingTime)}
              </div>
              <div className="text-gray-400 text-sm">累計</div>
            </div>
          </div>

          {/* 役職TOP3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              最も多く見た役職 TOP3
            </h2>
            <div className="space-y-4">
              {topRoles.map((item, index) => (
                <div key={item.role} className="flex items-center">
                  <div
                    className={`text-4xl font-bold mr-4 w-12 text-center ${
                      index === 0
                        ? "text-yellow-400"
                        : index === 1
                        ? "text-gray-300"
                        : "text-orange-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-xl font-semibold">
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
            {topRoles.length === 0 && (
              <p className="text-gray-400 text-center">
                まだデータが不足しています
              </p>
            )}
          </div>

          {/* 面白い表現 */}
          {funMessages.length > 0 && (
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-8 border border-purple-400/30 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                あなたの偉業
              </h2>
              <div className="space-y-4">
                {funMessages.map((message, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white/10 rounded-lg p-4"
                  >
                    <span className="text-3xl mr-4">🎉</span>
                    <p className="text-white text-lg flex-1">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ナビゲーション */}
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold"
            >
              自動スクロールモードへ
            </Link>
            <Link
              href="/manual"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              手動スクロールモードへ
            </Link>
          </div>

          {/* フッター情報 */}
          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>最終更新: {new Date(stats.lastUpdatedAt).toLocaleString("ja-JP")}</p>
            <p className="mt-2">
              データは5秒ごとに自動保存されます
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
