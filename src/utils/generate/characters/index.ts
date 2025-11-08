import { fakerJA } from "@faker-js/faker";

export const generateCharacterName = () => {
  const prefixes = ["", "", "若き", "伝説の", "謎の", "闇の", "光の"];
  const characterTypes = [
    "主人公", "ヒロイン", "仲間", "ライバル", "師匠", "敵",
    "村人", "戦士", "魔法使い", "商人", "子供", "老人",
    "騎士", "王", "王女", "王子", "執事", "メイド",
    "教師", "生徒", "医者", "科学者", "記者", "刑事"
  ];

  // 70%の確率で普通の名前、30%の確率で役職的な名前
  if (Math.random() < 0.7) {
    return fakerJA.person.fullName();
  } else {
    const prefix = fakerJA.helpers.arrayElement(prefixes);
    const type = fakerJA.helpers.arrayElement(characterTypes);
    return `${prefix}${type}`;
  }
};
