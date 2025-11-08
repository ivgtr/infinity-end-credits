export type ViewingStats = {
  // 総作品数（全てのクレジットを表示し終わった作品数）
  totalWorks: number;
  // 延べスタッフ数（画面に表示されたスタッフの累積人数）
  totalStaff: number;
  // 総スクロール距離（ピクセル単位で保存、表示時にkmに変換）
  totalScrollDistance: number;
  // 鑑賞時間（ミリ秒単位）
  totalViewingTime: number;
  // 役職ごとのスタッフカウント
  roleCounts: {
    [role: string]: number;
  };
  // カウント済みのクレジットID（重複カウントを防ぐ）
  countedCreditIds: Set<number>;
  // カウント済みの作品タイトル（作品数の重複カウントを防ぐ）
  countedWorkTitles: Set<string>;
  // 最初の鑑賞開始時刻
  firstStartedAt: number;
  // 最後の更新時刻
  lastUpdatedAt: number;
};
