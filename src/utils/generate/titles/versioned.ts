import { fakerJA } from "@faker-js/faker";

// 4. バージョン番号付き
export const generateVersionedTitle = () => {
  // より一般的な架空のタイトルベース
  const adjectives = ['新世紀', '超時空', '銀河', '宇宙', '未来', '伝説', '魔法', '聖なる', '終末', '無限'];
  const nouns = ['戦記', '物語', 'クロニクル', 'サーガ', '伝説', 'ファンタジー', 'アドベンチャー', 'オデッセイ'];

  const base = `${fakerJA.helpers.arrayElement(adjectives)}${fakerJA.helpers.arrayElement(nouns)}`;

  const versions = [
    `${base} 3.0+1.0`,
    `${base} 2.0+1.01`,
    `${base} 1.11`,
    `${base} 2nd SEASON`,
    `${base} 3rd SEASON`,
    `${base} FINAL SEASON`,
    `${base} -終章-`,
    `${base} THE FINAL`,
    `${base} 完結編`,
    `${base} 第1章`,
    `${base} 第二部`,
    `${base} Re:`,
  ];

  return fakerJA.helpers.arrayElement(versions);
};
