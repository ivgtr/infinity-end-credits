import type { ViewingStats } from "@/types/stats";
import type { Credit } from "@/types/credits";
import { useEffect, useState, useRef, useCallback } from "react";

const STORAGE_KEY = "infinity-end-credits-stats";
const SAVE_INTERVAL = 5000; // 5秒ごとに保存

// ローカルストレージ用の型（SetをArrayに変換）
type StoredViewingStats = Omit<ViewingStats, "countedCreditIds" | "countedWorkTitles"> & {
  countedCreditIds: number[];
  countedWorkTitles: string[];
};

const getInitialStats = (): ViewingStats => {
  if (typeof window === "undefined") {
    return createEmptyStats();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: StoredViewingStats = JSON.parse(stored);
      // 配列をSetに変換
      return {
        ...parsed,
        countedCreditIds: new Set(parsed.countedCreditIds || []),
        countedWorkTitles: new Set(parsed.countedWorkTitles || []),
      };
    }
  } catch (error) {
    console.error("Failed to load stats from localStorage:", error);
  }

  return createEmptyStats();
};

const createEmptyStats = (): ViewingStats => ({
  totalWorks: 0,
  totalStaff: 0,
  totalScrollDistance: 0,
  totalViewingTime: 0,
  roleCounts: {},
  countedCreditIds: new Set(),
  countedWorkTitles: new Set(),
  firstStartedAt: Date.now(),
  lastUpdatedAt: Date.now(),
});

// 統計をローカルストレージに保存可能な形式に変換
const convertStatsForStorage = (stats: ViewingStats): StoredViewingStats => ({
  ...stats,
  countedCreditIds: Array.from(stats.countedCreditIds),
  countedWorkTitles: Array.from(stats.countedWorkTitles),
});

export const useViewingStats = () => {
  const [stats, setStats] = useState<ViewingStats>(getInitialStats);
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 鑑賞時間を1秒ごとに更新
  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalViewingTime: prev.totalViewingTime + 1000,
        lastUpdatedAt: Date.now(),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // クレジットが画面に表示されたときに呼び出す
  const trackCreditViewed = useCallback((credit: Credit) => {
    setStats(prev => {
      // 既にカウント済みの場合はスキップ
      if (prev.countedCreditIds.has(credit.id)) {
        return prev;
      }

      const staffCount = credit.names.length;
      const newCountedCreditIds = new Set(prev.countedCreditIds);
      newCountedCreditIds.add(credit.id);

      const newRoleCounts = { ...prev.roleCounts };
      if (newRoleCounts[credit.role]) {
        newRoleCounts[credit.role] += staffCount;
      } else {
        newRoleCounts[credit.role] = staffCount;
      }

      return {
        ...prev,
        totalStaff: prev.totalStaff + staffCount,
        roleCounts: newRoleCounts,
        countedCreditIds: newCountedCreditIds,
        lastUpdatedAt: Date.now(),
      };
    });
  }, []);

  // 作品の全クレジットを表示し終わったときに呼び出す
  const trackWorkCompleted = useCallback((workTitle: string) => {
    setStats(prev => {
      // 既にカウント済みの場合はスキップ
      if (prev.countedWorkTitles.has(workTitle)) {
        return prev;
      }

      const newCountedWorkTitles = new Set(prev.countedWorkTitles);
      newCountedWorkTitles.add(workTitle);

      return {
        ...prev,
        totalWorks: prev.totalWorks + 1,
        countedWorkTitles: newCountedWorkTitles,
        lastUpdatedAt: Date.now(),
      };
    });
  }, []);

  // スクロール距離を追跡する関数
  const trackScroll = useCallback((distance: number) => {
    setStats(prev => ({
      ...prev,
      totalScrollDistance: prev.totalScrollDistance + distance,
      lastUpdatedAt: Date.now(),
    }));
  }, []);

  // ローカルストレージに定期的に保存
  useEffect(() => {
    if (saveTimerRef.current) {
      clearInterval(saveTimerRef.current);
    }

    saveTimerRef.current = setInterval(() => {
      try {
        const storageData = convertStatsForStorage(stats);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
      } catch (error) {
        console.error("Failed to save stats to localStorage:", error);
      }
    }, SAVE_INTERVAL);

    return () => {
      if (saveTimerRef.current) {
        clearInterval(saveTimerRef.current);
      }
    };
  }, [stats]);

  // コンポーネントアンマウント時に最終保存
  useEffect(() => {
    return () => {
      try {
        const storageData = convertStatsForStorage(stats);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
      } catch (error) {
        console.error("Failed to save stats on unmount:", error);
      }
    };
  }, [stats]);

  // 統計をリセットする関数
  const resetStats = useCallback(() => {
    const emptyStats = createEmptyStats();
    setStats(emptyStats);

    try {
      const storageData = convertStatsForStorage(emptyStats);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
    } catch (error) {
      console.error("Failed to reset stats in localStorage:", error);
    }
  }, []);

  return {
    stats,
    trackScroll,
    trackCreditViewed,
    trackWorkCompleted,
    resetStats,
  };
};
