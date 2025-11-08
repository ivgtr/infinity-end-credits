import { fakerJA } from "@faker-js/faker";

// 従来の基本的なタイトル生成（元のロジック）
export const generateBasicTitle = () => {
  const adjectives = [
    "青い", "赤い", "白い", "黒い", "美しい", "小さな", "大きな",
    "遠い", "近い", "新しい", "古い", "優しい", "悲しい", "楽しい",
    "不思議な", "永遠の", "失われた", "輝く", "静かな", "騒がしい"
  ];

  const nouns = [
    "空", "海", "風", "星", "月", "太陽", "夜", "朝", "夢", "希望",
    "約束", "絆", "記憶", "物語", "伝説", "世界", "時間", "運命",
    "魔法", "光", "影", "闇", "心", "声", "涙", "笑顔", "旅",
    "翼", "扉", "鍵", "宝石", "王国", "城", "森", "街", "島"
  ];

  const seasonTime = [
    "春", "夏", "秋", "冬", "朝", "昼", "夕暮れ", "夜明け",
    "真夜中", "黄昏", "明日", "今日", "昨日", "未来", "過去"
  ];

  const characters = [
    "王子", "姫", "少年", "少女", "勇者", "魔女", "天使", "悪魔",
    "騎士", "魔法使い", "戦士", "冒険者", "賢者", "女王", "王"
  ];

  const verbs = [
    "消える", "輝く", "走る", "飛ぶ", "歌う", "踊る", "眠る",
    "目覚める", "泣く", "笑う", "叫ぶ", "囁く", "祈る", "戦う"
  ];

  const patterns = [
    // 形容詞 + 名詞パターン
    () => `${fakerJA.helpers.arrayElement(adjectives)}${fakerJA.helpers.arrayElement(nouns)}`,

    // 名詞 + の + 名詞パターン
    () => `${fakerJA.helpers.arrayElement(nouns)}の${fakerJA.helpers.arrayElement(nouns)}`,

    // 劇場版パターン
    () => `劇場版 ${fakerJA.helpers.arrayElement(nouns)}`,

    // 人名 + と + 名詞パターン
    () => `${fakerJA.person.firstName()}と${fakerJA.helpers.arrayElement(nouns)}`,

    // キャラクター + の + 名詞パターン
    () => `${fakerJA.helpers.arrayElement(characters)}の${fakerJA.helpers.arrayElement(nouns)}`,

    // シンプルな名詞パターン
    () => fakerJA.helpers.arrayElement(nouns),

    // 季節・時間 + の + 名詞パターン
    () => `${fakerJA.helpers.arrayElement(seasonTime)}の${fakerJA.helpers.arrayElement(nouns)}`,

    // 〜の物語パターン
    () => `${fakerJA.helpers.arrayElement(nouns)}の物語`,

    // 動詞 + 名詞パターン
    () => `${fakerJA.helpers.arrayElement(verbs)}${fakerJA.helpers.arrayElement(nouns)}`,

    // 二つの名詞を結合
    () => `${fakerJA.helpers.arrayElement(nouns)}${fakerJA.helpers.arrayElement(nouns)}`,

    // 〜よ、〜！パターン（感嘆形）
    () => `${fakerJA.helpers.arrayElement(nouns)}よ、${fakerJA.helpers.arrayElement(verbs)}！`,

    // 地名 + の + 名詞パターン
    () => `${fakerJA.location.city()}の${fakerJA.helpers.arrayElement(nouns)}`,
  ];

  const randomPattern = fakerJA.helpers.arrayElement(patterns);
  return randomPattern();
};
