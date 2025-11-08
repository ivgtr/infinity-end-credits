import type { ViewingStats } from "@/types/stats";
import type { Credits } from "@/types/credits";
import { useEffect, useState, useRef, useCallback } from "react";

const STORAGE_KEY = "infinity-end-credits-stats";
const SAVE_INTERVAL = 5000; // 5秒ごとに保存

const getInitialStats = (): ViewingStats => {
  if (typeof window === "undefined") {
    return createEmptyStats();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
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
  firstStartedAt: Date.now(),
  lastUpdatedAt: Date.now(),
});

export const useViewingStats = (titles: string[], credits: Credits) => {
  const [stats, setStats] = useState<ViewingStats>(getInitialStats);
  const sessionStartTimeRef = useRef<number>(Date.now());
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const processedTitlesRef = useRef<Set<string>>(new Set());

  // 新しい作品が追加されたときに統計を更新
  useEffect(() => {
    if (titles.length === 0) return;

    const newTitles = titles.filter(title => !processedTitlesRef.current.has(title));

    if (newTitles.length === 0) return;

    setStats(prev => {
      let newTotalStaff = prev.totalStaff;
      const newRoleCounts = { ...prev.roleCounts };

      // 新しく追加された作品のスタッフ数と役職をカウント
      newTitles.forEach(title => {
        const workCredits = credits[title];
        if (workCredits) {
          workCredits.forEach(credit => {
            const staffCount = credit.names.length;
            newTotalStaff += staffCount;

            // 役職ごとのカウントを更新
            if (newRoleCounts[credit.role]) {
              newRoleCounts[credit.role] += staffCount;
            } else {
              newRoleCounts[credit.role] = staffCount;
            }
          });
        }

        processedTitlesRef.current.add(title);
      });

      return {
        ...prev,
        totalWorks: prev.totalWorks + newTitles.length,
        totalStaff: newTotalStaff,
        roleCounts: newRoleCounts,
        lastUpdatedAt: Date.now(),
      };
    });
  }, [titles, credits]);

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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
      } catch (error) {
        console.error("Failed to save stats on unmount:", error);
      }
    };
  }, [stats]);

  // 統計をリセットする関数
  const resetStats = useCallback(() => {
    const emptyStats = createEmptyStats();
    setStats(emptyStats);
    processedTitlesRef.current.clear();
    sessionStartTimeRef.current = Date.now();

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(emptyStats));
    } catch (error) {
      console.error("Failed to reset stats in localStorage:", error);
    }
  }, []);

  return {
    stats,
    trackScroll,
    resetStats,
  };
};
