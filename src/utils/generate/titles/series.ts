import { fakerJA } from "@faker-js/faker";

// 7. シリーズもの風
export const generateSeriesTitle = () => {
  const baseNouns = ['運命', '希望', '絆', '奇跡', '伝説', '戦記', '物語'];
  const base = fakerJA.helpers.arrayElement(baseNouns);

  const seriesFormats = [
    `${base} 第1章`,
    `${base} 第二部`,
    `${base} 完結編`,
    `劇場版 ${base}`,
    `${base} EXTRA`,
    `${base} 序`,
    `${base} 破`,
    `${base} Q`,
    `総集編 ${base}`,
    `新劇場版 ${base}`,
    `${base} -Beginning-`,
    `${base} -THE MOVIE-`,
  ];

  return fakerJA.helpers.arrayElement(seriesFormats);
};
