import { useState, useEffect, useCallback } from "react";
import type { EasterEggType } from "@/types/credits";

export type EasterEggClick = {
  type: EasterEggType;
  timestamp: number;
  creditId: number;
};

export type EasterEggStats = {
  totalClicks: number;
  clicksByType: {
    famous_director: number;
    funny_role: number;
    same_name: number;
  };
  recentClicks: EasterEggClick[];
  lastClickTimestamp: number | null;
};

const STORAGE_KEY = "infinity-end-credits-easter-eggs";
const MAX_RECENT_CLICKS = 50; // 最近のクリック履歴を最大50件保存

// LocalStorageからデータを読み込む
const loadFromStorage = (): EasterEggClick[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const data = JSON.parse(stored);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load easter egg stats:", error);
    return [];
  }
};

// LocalStorageにデータを保存
const saveToStorage = (clicks: EasterEggClick[]) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clicks));
  } catch (error) {
    console.error("Failed to save easter egg stats:", error);
  }
};

// 統計データを計算
const calculateStats = (clicks: EasterEggClick[]): EasterEggStats => {
  const clicksByType = {
    famous_director: 0,
    funny_role: 0,
    same_name: 0,
  };

  clicks.forEach((click) => {
    if (click.type && click.type !== null) {
      clicksByType[click.type as keyof typeof clicksByType]++;
    }
  });

  return {
    totalClicks: clicks.length,
    clicksByType,
    recentClicks: clicks.slice(-MAX_RECENT_CLICKS),
    lastClickTimestamp: clicks.length > 0 ? clicks[clicks.length - 1].timestamp : null,
  };
};

export const useEasterEggStats = () => {
  const [clicks, setClicks] = useState<EasterEggClick[]>([]);
  const [stats, setStats] = useState<EasterEggStats>({
    totalClicks: 0,
    clicksByType: {
      famous_director: 0,
      funny_role: 0,
      same_name: 0,
    },
    recentClicks: [],
    lastClickTimestamp: null,
  });

  // 初期化時にLocalStorageから読み込む
  useEffect(() => {
    const loaded = loadFromStorage();
    setClicks(loaded);
    setStats(calculateStats(loaded));
  }, []);

  // クリックを記録
  const recordClick = useCallback((type: EasterEggType, creditId: number) => {
    if (!type) return;

    const newClick: EasterEggClick = {
      type,
      timestamp: Date.now(),
      creditId,
    };

    setClicks((prev) => {
      const updated = [...prev, newClick];
      saveToStorage(updated);
      setStats(calculateStats(updated));
      return updated;
    });
  }, []);

  // 統計をリセット
  const resetStats = useCallback(() => {
    setClicks([]);
    setStats({
      totalClicks: 0,
      clicksByType: {
        famous_director: 0,
        funny_role: 0,
        same_name: 0,
      },
      recentClicks: [],
      lastClickTimestamp: null,
    });
    saveToStorage([]);
  }, []);

  return {
    stats,
    recordClick,
    resetStats,
  };
};
