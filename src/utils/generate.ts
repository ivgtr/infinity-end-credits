import { fakerJA } from "@faker-js/faker";

export const generateNames = (count: number) => {
  return fakerJA.helpers
    .multiple(
      () => ({
        name: fakerJA.person.fullName(),
      }),
      {
        count,
      }
    )
    .map((person) => person.name);
};

export const generateId = () => {
  return Math.floor(Math.random() * 100000);
};

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

export const generateTitle = () => {
  // 日本語の単語リスト
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

// イースターエッグ用：面白い架空の役職
export const funnyRoles = [
  "コーヒー調達係",
  "猫世話係",
  "深夜テンション管理",
  "お菓子補充担当",
  "BGM口ずさみ係",
  "スタジオ掃除監督",
  "締切延長交渉人",
  "ラーメン出前担当",
  "徹夜見守り隊長",
  "モチベーション維持係",
  "椅子修理専門",
  "机下の物探し係",
  "カップ麺評論家",
  "エナジードリンク補給係",
  "仮眠スペース管理",
  "PCフリーズ対応",
  "Wi-Fi再起動担当",
  "雑談タイムキーパー",
  "ストレッチ推奨係",
  "観葉植物世話係",
  "換気リマインダー",
  "誕生日ケーキ手配",
  "残業軽減アドバイザー",
  "モニター明度調整",
  "マウスパッド選定",
];

// イースターエッグ用：実在の有名監督・クリエイター
export const famousDirectors = [
  "庵野秀明",
  "新海誠",
  "宮崎駿",
  "押井守",
  "今敏",
  "細田守",
  "湯浅政明",
  "渡辺信一郎",
  "片渕須直",
  "原恵一",
  "高畑勲",
  "大友克洋",
  "山田尚子",
  "石田祐康",
  "沖浦啓之",
  "吉浦康裕",
  "新房昭之",
  "水島精二",
  "谷口悟朗",
  "幾原邦彦",
];

export const generateCompanyName = (type?: "studio" | "production" | "committee" | "general") => {
  const prefixes = {
    studio: ["スタジオ", "アニメーション", ""],
    production: ["", ""],
    committee: ["", ""],
    general: ["株式会社", "有限会社", ""],
  };

  const suffixes = {
    studio: ["", "スタジオ", "アニメーション", "フィルム"],
    production: ["プロダクション", "エンタテインメント", "ピクチャーズ", "映画", ""],
    committee: ["製作委員会", "プロジェクト", "パートナーズ"],
    general: ["", "グループ", "ホールディングス"],
  };

  const companyType = type || fakerJA.helpers.arrayElement(["studio", "production", "committee", "general"] as const);

  const baseName = fakerJA.company.name().replace(/株式会社|有限会社|合同会社/g, "").trim();
  const prefix = fakerJA.helpers.arrayElement(prefixes[companyType]);
  const suffix = fakerJA.helpers.arrayElement(suffixes[companyType]);

  return `${prefix}${baseName}${suffix}`.trim();
};
