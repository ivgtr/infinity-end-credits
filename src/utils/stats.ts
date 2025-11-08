import type { ViewingStats } from "@/types/stats";

const STORAGE_KEY = "infinity-end-credits-stats";

// ローカルストレージから統計データを読み込む
export const loadStats = (): ViewingStats | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to load stats from localStorage:", error);
  }

  return null;
};

// スクロール距離をkmに変換
// 仮定: 画面の高さを1920px、1つのクレジット行を約50pxとし、
// 実際の映画館のスクリーンを10m程度と仮定して換算
export const pixelsToKilometers = (pixels: number): number => {
  // 1920px = 10m と仮定
  const metersPerPixel = 10 / 1920;
  const meters = pixels * metersPerPixel;
  return meters / 1000; // kmに変換
};

// 地球の円周（赤道）は約40,075km
const EARTH_CIRCUMFERENCE_KM = 40075;

// 地球何周分かを計算
export const getEarthCircumferences = (km: number): number => {
  return km / EARTH_CIRCUMFERENCE_KM;
};

// 東京-大阪間は約400km
const TOKYO_OSAKA_KM = 400;

// 東京-大阪間の何往復分かを計算
export const getTokyoOsakaRoundTrips = (km: number): number => {
  return km / (TOKYO_OSAKA_KM * 2);
};

// エベレストの高さは約8.849km
const EVEREST_HEIGHT_KM = 8.849;

// エベレスト何個分かを計算
export const getEverestHeights = (km: number): number => {
  return km / EVEREST_HEIGHT_KM;
};

// ミリ秒を読みやすい形式に変換
export const formatDuration = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}日 ${hours % 24}時間 ${minutes % 60}分`;
  } else if (hours > 0) {
    return `${hours}時間 ${minutes % 60}分 ${seconds % 60}秒`;
  } else if (minutes > 0) {
    return `${minutes}分 ${seconds % 60}秒`;
  } else {
    return `${seconds}秒`;
  }
};

// 役職のTOP3を取得
export const getTopRoles = (
  roleCounts: { [role: string]: number },
  limit: number = 3
): Array<{ role: string; count: number }> => {
  return Object.entries(roleCounts)
    .map(([role, count]) => ({ role, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};

// 面白い統計メッセージを生成
export const generateFunMessages = (stats: ViewingStats): string[] => {
  const messages: string[] = [];
  const km = pixelsToKilometers(stats.totalScrollDistance);

  // 地球周回数
  const earthCircumferences = getEarthCircumferences(km);
  if (earthCircumferences >= 1) {
    messages.push(
      `地球${earthCircumferences.toFixed(2)}周分のクレジットを見ました！`
    );
  } else if (earthCircumferences >= 0.001) {
    messages.push(
      `地球を${(earthCircumferences * 100).toFixed(2)}%周回しました！`
    );
  }

  // 東京-大阪往復
  const tokyoOsakaTrips = getTokyoOsakaRoundTrips(km);
  if (tokyoOsakaTrips >= 1) {
    messages.push(
      `東京-大阪間を${tokyoOsakaTrips.toFixed(1)}往復できる距離です！`
    );
  }

  // エベレスト
  const everestHeights = getEverestHeights(km);
  if (everestHeights >= 1) {
    messages.push(
      `エベレスト${everestHeights.toFixed(1)}個分の高さを登りました！`
    );
  }

  // 延べスタッフ数
  if (stats.totalStaff >= 10000) {
    messages.push(
      `延べ${(stats.totalStaff / 10000).toFixed(1)}万人分のスタッフ名を読みました！`
    );
  } else if (stats.totalStaff >= 1000) {
    messages.push(`延べ${stats.totalStaff.toLocaleString()}人分のスタッフ名を読みました！`);
  }

  // 作品数
  if (stats.totalWorks >= 100) {
    messages.push(
      `${stats.totalWorks}作品分のエンドロールを鑑賞！映画館での鑑賞時間に換算すると${Math.floor(stats.totalWorks * 5)}分以上です！`
    );
  }

  // 鑑賞時間
  const hours = stats.totalViewingTime / (1000 * 60 * 60);
  if (hours >= 24) {
    messages.push(
      `${(hours / 24).toFixed(1)}日間もエンドロールを眺め続けました！`
    );
  } else if (hours >= 1) {
    messages.push(`${hours.toFixed(1)}時間もエンドロールを眺め続けました！`);
  }

  return messages;
};
