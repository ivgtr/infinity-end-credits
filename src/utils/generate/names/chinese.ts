import { fakerJA } from "@faker-js/faker";

// 中国人名のカタカナパターン
export const generateChineseName = () => {
  const surnames = [
    "ワン", "リー", "チャン", "リウ", "チェン", "ヤン", "ホアン", "ジャオ", "ウー", "ジョウ",
    "シュー", "スン", "マー", "チュー", "フー", "グオ", "リン", "ヘ", "ガオ", "ジン",
    "シェン", "タン", "パン", "ユー", "ルー", "ツァイ", "ドン", "ウェイ", "リャン", "ダイ"
  ];

  const givenNames = [
    "シャオミン", "ウェイ", "リー", "ジン", "ミン", "ファン", "ナ", "シュエ", "シン", "ヤン",
    "ジュン", "ホン", "レイ", "タオ", "ペン", "イン", "メイ", "リン", "チャオ", "ジエ",
    "ハオ", "ユエ", "シャオ", "フイ", "シュアン", "ラン", "チェン", "ドン", "ジャン", "イー"
  ];

  return `${fakerJA.helpers.arrayElement(surnames)} ${fakerJA.helpers.arrayElement(givenNames)}`;
};
