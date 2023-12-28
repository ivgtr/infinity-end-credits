import type { Credit, Credits } from "@/types/credits";
import { use, useEffect, useState } from "react";
import { generateRoleStaff } from "@/utils/role";
import type { Staffs } from "@/types/staff";
import { generateId, generateTitle } from "@/utils/generate";

type Work = {
  title: string;
  staffs: Staffs;
};

export const useCredits = () => {
  const [titles, setTitles] = useState<string[]>([]);
  const [credits, setCredits] = useState<Credits>({});

  // 作品を登録する
  const register = (work: Work) => {
    const { title, staffs } = work;

    // 作品タイトルを登録する
    setTitles((prev) => [...prev, title]);

    // 作品のクレジットを登録する
    const newCredit: Credit[] = [];

    for (const staff of staffs) {
      const { role, members } = staff;
      const id = generateId();

      const credit: Credit = {
        id,
        title,
        names: members,
        role,
      };

      newCredit.push(credit);
    }

    setCredits((prev) => ({ ...prev, [title]: newCredit }));
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
