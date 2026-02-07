import type { Credit, Credits } from "@/types/credits";
import { useState } from "react";
import { generateRoleStaff } from "@/utils/role";
import type { Staffs } from "@/types/staff";
import { generateId, generateTitle } from "@/utils/generate";

type Work = {
  title: string;
  staffs: Staffs;
};

// メモリリーク防止：保持する最大作品数
// 30作品程度なら十分軽量で、削除頻度も低く抑えられる
const MAX_WORKS = 30;

export const useCredits = () => {
  const [titles, setTitles] = useState<string[]>([]);
  const [credits, setCredits] = useState<Credits>({});

  // 作品を登録する
  const register = (work: Work) => {
    const { title, staffs } = work;

    // 作品タイトルを登録する
    setTitles((prev) => {
      const newTitles = [...prev, title];
      // 最大数を超えたら古いものを削除
      if (newTitles.length > MAX_WORKS) {
        return newTitles.slice(newTitles.length - MAX_WORKS);
      }
      return newTitles;
    });

    // 作品のクレジットを登録する
    const newCredit: Credit[] = [];

    for (const staff of staffs) {
      const { role, members, easterEgg } = staff;
      const id = generateId();

      const credit: Credit = {
        id,
        title,
        names: members,
        role,
        ...(easterEgg && { easterEgg }),
      };

      newCredit.push(credit);
    }

    setCredits((prev) => {
      const newCredits = { ...prev, [title]: newCredit };

      // 最大数を超えたら、titlesに存在しないキーを削除
      const allTitles = Object.keys(newCredits);
      if (allTitles.length > MAX_WORKS) {
        const titlesSet = new Set([...Object.keys(prev), title].slice(-MAX_WORKS));
        const cleaned: Credits = {};
        for (const key of Object.keys(newCredits)) {
          if (titlesSet.has(key)) {
            cleaned[key] = newCredits[key];
          }
        }
        return cleaned;
      }

      return newCredits;
    });
  };

  const addRandomWork = () => {
    const title = generateTitle();
    const template: Work = {
      title,
      staffs: generateRoleStaff(),
    };

    register(template);
  };

  return { titles, credits, addRandomWork };
};
