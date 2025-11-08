export type ViewingStats = {
  // 総作品数
  totalWorks: number;
  // 総スタッフ数（生成された架空の人数）
  totalStaff: number;
  // 総スクロール距離（ピクセル単位で保存、表示時にkmに変換）
  totalScrollDistance: number;
  // 鑑賞時間（ミリ秒単位）
  totalViewingTime: number;
  // 役職ごとのスタッフカウント
  roleCounts: {
    [role: string]: number;
  };
  // 最初の鑑賞開始時刻
  firstStartedAt: number;
  // 最後の更新時刻
  lastUpdatedAt: number;
};
