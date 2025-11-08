import { fakerJA } from "@faker-js/faker";
import { generateParodyTitle } from "./parody";
import { generateLightNovelTitle } from "./lightNovel";
import { generateRetroStyleTitle } from "./retro";
import { generateVersionedTitle } from "./versioned";
import { generateSymbolicTitle } from "./symbolic";
import { generateGenreTitle } from "./genre";
import { generateSeriesTitle } from "./series";
import { generateBasicTitle } from "./basic";

export const generateTitle = () => {
  // 全てのタイトル生成関数を配列に
  const generators = [
    generateParodyTitle,
    generateLightNovelTitle,
    generateRetroStyleTitle,
    generateVersionedTitle,
    generateSymbolicTitle,
    generateGenreTitle,
    generateSeriesTitle,
    generateBasicTitle, // 従来型も残す
  ];

  // ランダムに生成関数を選択
  const generator = fakerJA.helpers.arrayElement(generators);
  return generator();
};

// 個別のタイトル生成関数もエクスポート
export {
  generateParodyTitle,
  generateLightNovelTitle,
  generateRetroStyleTitle,
  generateVersionedTitle,
  generateSymbolicTitle,
  generateGenreTitle,
  generateSeriesTitle,
  generateBasicTitle,
};
