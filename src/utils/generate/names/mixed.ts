import { fakerJA } from "@faker-js/faker";

// 日本語苗字 + 外国の名前のミックスパターン
export const generateMixedName = () => {
  const japaneseSurnames = [
    "佐藤", "鈴木", "高橋", "田中", "渡辺", "伊藤", "山本", "中村", "小林", "加藤",
    "吉田", "山田", "佐々木", "山口", "松本", "井上", "木村", "林", "清水", "山崎",
    "森", "池田", "橋本", "阿部", "石川", "山下", "中島", "石井", "小川", "前田"
  ];

  const foreignGivenNames = [
    // 中国系
    "シャオミン", "ウェイ", "ミン", "ジン", "ユエ",
    // 韓国系
    "ミンジュン", "ジフン", "ユナ", "スミン", "ソヨン",
    // 欧米系
    "ジョン", "マイケル", "デビッド", "エミリー", "サラ", "アレックス"
  ];

  return `${fakerJA.helpers.arrayElement(japaneseSurnames)} ${fakerJA.helpers.arrayElement(foreignGivenNames)}`;
};
