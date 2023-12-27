import type { Credit, Credits } from "@/types/credits";
import { use, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

type Work = {
  title: string;
  roles: {
    [key: string]: {
      index: number;
      ppl: number;
    };
  };
};

export const useCredits = () => {
  const [titles, setTitles] = useState<string[]>([]);
  const [credits, setCredits] = useState<Credits>({});

  // 作品を登録する
  const register = (work: Work) => {
    const { title, roles } = work;

    // 作品タイトルを登録する
    setTitles((prev) => [...prev, title]);

    // 作品のクレジットを登録する
    const newCredit: Credit[] = [];
    for (const [role, { index, ppl }] of Object.entries(roles)) {
      const names: string[] = [];
      faker.helpers
        .multiple(
          () => ({
            name: faker.person.fullName(),
          }),
          {
            count: ppl,
          }
        )
        .forEach((person) => {
          names.push(person.name);
        });

      newCredit.push({
        id: index,
        title,
        names,
        role,
      });
    }
    setCredits((prev) => ({ ...prev, [title]: newCredit }));
  };

  useEffect(() => {
    const template: Work = {
      title: "sample title",
      roles: {
        director: {
          index: 0,
          ppl: 6,
        },
        cast: {
          index: 1,
          ppl: 3,
        },
        staff: {
          index: 2,
          ppl: 30,
        },
      },
    };

    register(template);
  }, []);

  return { titles, credits };
};
