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

// 1. パロディタイトル（実在作品のパロディ）
const generateParodyTitle = () => {
  const parodies = [
    // 新海誠作品パロディ
    "君の猫は。",
    "君の犬は。",
    "君の隣人は。",
    "天気の子犬",
    "天気の娘",
    "天気のおじさん",
    "言の葉の園",
    "秒速5メートルくらい",

    // ジブリ作品パロディ
    "千と千尋の神隠れんぼ",
    "千と千尋の鬼ごっこ",
    "となりのトトロール",
    "もののけ姫君",
    "崖の上のポチョ",
    "崖の下のポニョ",
    "魔女の宅急便屋",
    "耳をすませば〜",
    "猫の恩返しができない",
    "ハウルの動く家具",

    // エヴァパロディ
    "新世紀エヴァンゲリコン",
    "シン・エヴァンゲリオン劇場版：│",
    "ヱヴァンゲリヲン新劇場版：Q&A",

    // その他人気作品
    "鬼滅の刃物",
    "呪術廻戦記",
    "進撃の巨人族",
    "ワンピース・オブ・ケーキ",
    "SLAM DUNK!!",
    "ドラゴンボール型",
    "名探偵コナン君",
    "僕のヒーローアカデミー賞",
  ];

  return fakerJA.helpers.arrayElement(parodies);
};

// 2. 超長いラノベ風タイトル
const generateLightNovelTitle = () => {
  const templates = [
    // 異世界転生系
    () => `異世界に転生したら${fakerJA.helpers.arrayElement(['エンドロールスタッフ', '背景画', '効果音', 'モブキャラ', '村人A'])}だった件について`,
    () => `転生したらスライム${fakerJA.helpers.arrayElement(['スタッフ', '監督', '演出家', 'プロデューサー'])}だった`,
    () => `異世界${fakerJA.helpers.arrayElement(['アニメーション', '映画', 'ドラマ', '舞台'])}制作で無双する`,

    // ○○がこんなに〜系
    () => `俺の${fakerJA.helpers.arrayElement(['作画監督', '総監督', '脚本家', 'プロデューサー', '声優'])}がこんなに${fakerJA.helpers.arrayElement(['多い', '可愛い', 'イケメン', '優秀な', '個性的な'])}わけがない`,
    () => `妹さえいれば${fakerJA.helpers.arrayElement(['エンドロール', 'クレジット', '制作陣', 'スタッフロール'])}。`,

    // やれやれ系主人公
    () => `やれやれ、また${fakerJA.helpers.arrayElement(['締め切り', '修正依頼', 'リテイク', '作画崩壊', '予算削減'])}ですか`,

    // 〜したら〜だった系
    () => `${fakerJA.helpers.arrayElement(['スタジオ', '制作会社', 'アニメ業界', '映画業界'])}で働いたら${fakerJA.helpers.arrayElement(['チート能力', '最強スキル', '無双', '神作画', '伝説'])}を手に入れた`,

    // 複雑長文系
    () => `ようこそ実力至上主義の${fakerJA.helpers.arrayElement(['アニメスタジオ', '映画制作現場', 'CG制作室'])}へ`,
    () => `この${fakerJA.helpers.arrayElement(['素晴らしい', 'すばらしい', 'クソッタレな', '過酷な'])}${fakerJA.helpers.arrayElement(['制作環境', 'スタジオ', '業界', '現場'])}に祝福を！`,
  ];

  const template = fakerJA.helpers.arrayElement(templates);
  return template();
};

// 3. 年代別スタイル
const generateRetroStyleTitle = () => {
  const eras = [
    // 70-80年代
    () => {
      const prefixes = ['宇宙戦艦', '銀河', '超時空', '無敵', '勇者', '魔神'];
      const names = ['ヤマト', 'ガンダム', 'マクロス', 'ライディーン', 'ダイモス', 'ボルテス'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(names)}`;
    },
    () => {
      const words = ['999', '777', '伝説', '帝国', '要塞', '戦記'];
      return `銀河${fakerJA.helpers.arrayElement(words)}`;
    },

    // 90年代
    () => {
      const words = ['新世紀', '少女革命', '魔法騎士'];
      const nouns = ['エヴァンゲリオン', 'ウテナ', 'レイアース', 'セーラームーン', 'カードキャプター'];
      return `${fakerJA.helpers.arrayElement(words)}${fakerJA.helpers.arrayElement(nouns)}`;
    },
    () => `機動${fakerJA.helpers.arrayElement(['戦士', '武闘伝', '新世紀'])}G${fakerJA.helpers.arrayElement(['ガンダム', 'ファイター', 'ウイング'])}`,

    // 2000年代
    () => {
      const names = ['ハルヒ', 'みくる', 'ユキ', 'ツルヤ'];
      const suffixes = ['の憂鬱', 'の消失', 'の溜息', 'の陰謀'];
      return `涼宮${fakerJA.helpers.arrayElement(names)}${fakerJA.helpers.arrayElement(suffixes)}`;
    },
    () => `${fakerJA.helpers.arrayElement(['けいおん！', 'らき☆すた', 'ひだまりスケッチ', 'みなみけ'])}`,

    // 2010年代
    () => {
      const subjects = ['会長', '先輩', '後輩', '委員長', '部長'];
      return `${fakerJA.helpers.arrayElement(subjects)}は告らせたい〜天才たちの恋愛頭脳戦〜`;
    },
    () => {
      const prefixes = ['鬼滅', '呪術', '約束'];
      const suffixes = ['の刃', '廻戦', 'のネバーランド'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(suffixes)}`;
    },
  ];

  const era = fakerJA.helpers.arrayElement(eras);
  return era();
};

// 4. バージョン番号付き
const generateVersionedTitle = () => {
  const baseWords = ['エヴァンゲリオン', '攻殻機動隊', 'ガンダム', 'マクロス', 'シン・仮面ライダー'];
  const base = fakerJA.helpers.arrayElement(baseWords);

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

// 5. 記号・英語混じり
const generateSymbolicTitle = () => {
  const templates = [
    () => `Re:${fakerJA.helpers.arrayElement(['ゼロ', 'ワン', 'ライフ'])}から始める${fakerJA.helpers.arrayElement(['異世界生活', '制作生活', '監督業'])}`,
    () => `.hack//${fakerJA.helpers.arrayElement(['Sign', 'Roots', 'G.U.', 'Quantum'])}`,
    () => `STEINS;${fakerJA.helpers.arrayElement(['GATE', 'GATE 0', 'ELITE'])}`,
    () => `${fakerJA.helpers.arrayElement(['ソードアート', 'ガンゲイル', 'アクセル・ワールド'])} -THE ANIMATION-`,
    () => `Fate/${fakerJA.helpers.arrayElement(['stay night', 'Zero', 'Apocrypha', 'Grand Order'])}`,
    () => `${fakerJA.helpers.arrayElement(['Angel', 'Devil', 'God', 'Chaos'])} Beats!`,
    () => `Charlotte -シャーロット-`,
  ];

  const template = fakerJA.helpers.arrayElement(templates);
  return template();
};

// 6. ジャンル特化型
const generateGenreTitle = () => {
  const genres = [
    // SF系
    () => {
      const words = ['量子', '時空', '次元', '超光速', '反物質', '特異点'];
      const nouns = ['の扉', 'を超えて', 'の旅人', 'の彼方', 'エンジン', 'コントローラー'];
      return `${fakerJA.helpers.arrayElement(words)}${fakerJA.helpers.arrayElement(nouns)}`;
    },

    // ホラー系
    () => {
      const prefixes = ['呪われた', '闇に潜む', '悪夢の', '恐怖の', '死を呼ぶ'];
      const nouns = ['エンドロール', 'スタジオ', '制作現場', '編集室', 'スクリーン'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(nouns)}`;
    },

    // 恋愛系
    () => {
      const words = ['初恋', '運命の', '永遠の', '切ない', '甘い'];
      const nouns = ['シナリオ', 'エンドロール', 'ラブストーリー', '物語', 'メモリー'];
      return `${fakerJA.helpers.arrayElement(words)}${fakerJA.helpers.arrayElement(nouns)}`;
    },
    () => `君と僕の${fakerJA.helpers.arrayElement(['距離', '時間', '約束', '秘密', '物語'])}`,

    // バトル系
    () => {
      const words = ['絶対無敵', '最強の', '伝説の', '究極の', '破壊神'];
      const nouns = ['バトル', 'ファイター', 'ウォリアー', '戦士', '勇者'];
      return `${fakerJA.helpers.arrayElement(words)}${fakerJA.helpers.arrayElement(nouns)}`;
    },

    // 日常系
    () => {
      const words = ['のんびり', 'ゆるふわ', 'まったり', 'ほのぼの'];
      const nouns = ['日和', 'ライフ', 'デイズ', '時間', 'タイム'];
      return `${fakerJA.helpers.arrayElement(words)}${fakerJA.helpers.arrayElement(nouns)}`;
    },
  ];

  const genre = fakerJA.helpers.arrayElement(genres);
  return genre();
};

// 7. シリーズもの風
const generateSeriesTitle = () => {
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

// 従来の基本的なタイトル生成（元のロジック）
const generateBasicTitle = () => {
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
