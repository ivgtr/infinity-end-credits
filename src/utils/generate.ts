import { fakerJA } from "@faker-js/faker";

// 中国人名のカタカナパターン
const generateChineseName = () => {
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

// 韓国人名のカタカナパターン
const generateKoreanName = () => {
  const surnames = [
    "キム", "イ", "パク", "チェ", "チョン", "カン", "チョ", "ユン", "チャン", "イム",
    "ハン", "オ", "ソ", "シン", "クォン", "ファン", "アン", "ソン", "ペ", "ホン",
    "リュ", "コ", "ムン", "ヤン", "ソン", "ナム", "シム", "ノ", "チュ", "ハ"
  ];

  const givenNames = [
    "ミンジュン", "ソヒョン", "ジフン", "ユナ", "ヒョンウ", "スミン", "ドンヒョン", "ジウォン", "ミンホ", "ソヨン",
    "ジェウン", "ハヨン", "スンホ", "イェジ", "ジュンソ", "ジヨン", "ヒョジン", "テヒョン", "ダヒョン", "ソンミン",
    "ウンジ", "ミンジ", "ジュンヒョク", "セヨン", "ヒョンジ", "サンウ", "ヘジン", "ジョンウ", "ナヨン", "ギュミン"
  ];

  return `${fakerJA.helpers.arrayElement(surnames)} ${fakerJA.helpers.arrayElement(givenNames)}`;
};

// 欧米人名のカタカナパターン
const generateWesternName = () => {
  const firstNames = [
    "ジョン", "マイケル", "デビッド", "ジェームズ", "ロバート", "ウィリアム", "リチャード", "トーマス", "チャールズ", "クリストファー",
    "ダニエル", "マシュー", "アンソニー", "マーク", "ポール", "スティーブン", "アンドリュー", "ケネス", "ジョージ", "エドワード",
    "メアリー", "パトリシア", "ジェニファー", "リンダ", "バーバラ", "エリザベス", "スーザン", "ジェシカ", "サラ", "カレン",
    "ナンシー", "マーガレット", "リサ", "ベティ", "ドロシー", "サンドラ", "アシュリー", "キンバリー", "ドナ", "エミリー",
    "アレックス", "サム", "ジョーダン", "テイラー", "モーガン", "ケイシー", "ジェイミー", "ライリー", "エイブリー", "ペイトン"
  ];

  const lastNames = [
    "スミス", "ジョンソン", "ウィリアムズ", "ブラウン", "ジョーンズ", "ガルシア", "ミラー", "デイビス", "ロドリゲス", "マルティネス",
    "ウィルソン", "アンダーソン", "テイラー", "トーマス", "ムーア", "ジャクソン", "マーティン", "リー", "トンプソン", "ホワイト",
    "ハリス", "クラーク", "ルイス", "ロビンソン", "ウォーカー", "ヤング", "アレン", "キング", "ライト", "スコット",
    "ヒル", "グリーン", "アダムス", "ベイカー", "ネルソン", "カーター", "ミッチェル", "ロバーツ", "ターナー", "フィリップス"
  ];

  return `${fakerJA.helpers.arrayElement(firstNames)} ${fakerJA.helpers.arrayElement(lastNames)}`;
};

// 日本語苗字 + 外国の名前のミックスパターン
const generateMixedName = () => {
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

// スタッフ名を生成（確率的に日本人名または外国人名を選択）
const generateStaffName = (options?: { allowForeign?: boolean }) => {
  // デフォルトでは外国人名を許可
  const allowForeign = options?.allowForeign !== false;

  if (!allowForeign) {
    // 外国人名不可の場合は日本人名のみ
    return fakerJA.person.fullName();
  }

  const rand = Math.random();

  // 確率設定：
  // 85% - 日本人名
  // 6% - 中国人名
  // 4% - 韓国人名
  // 3% - 欧米人名
  // 2% - 日本語苗字 + 外国の名前

  if (rand < 0.85) {
    return fakerJA.person.fullName();
  } else if (rand < 0.91) {
    // 6% 中国人名
    return generateChineseName();
  } else if (rand < 0.95) {
    // 4% 韓国人名
    return generateKoreanName();
  } else if (rand < 0.98) {
    // 3% 欧米人名
    return generateWesternName();
  } else {
    // 2% ミックス名
    return generateMixedName();
  }
};

export const generateNames = (count: number, options?: { allowForeign?: boolean }) => {
  const names: string[] = [];
  for (let i = 0; i < count; i++) {
    names.push(generateStaffName(options));
  }
  return names;
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

// 1. パロディタイトル（構造のみをパロディ、固有名詞は架空）
const generateParodyTitle = () => {
  // 「君の○○は。」パターン
  const kimiNoPattern = () => {
    const nouns = ['猫', '犬', '隣人', '上司', '先生', '友達', '兄弟', '恋人'];
    return `君の${fakerJA.helpers.arrayElement(nouns)}は。`;
  };

  // 「天気の○○」パターン
  const tenkiNoPattern = () => {
    const nouns = ['子犬', '娘', 'おじさん', '少年', '姫', '王子'];
    return `天気の${fakerJA.helpers.arrayElement(nouns)}`;
  };

  // 「千と○○の××」パターン
  const senToPattern = () => {
    const names = ['百', '万', '億', '零', '無限'];
    const actions = ['神隠れんぼ', '鬼ごっこ', 'かくれんぼ', '追いかけっこ'];
    return `千と${fakerJA.helpers.arrayElement(names)}の${fakerJA.helpers.arrayElement(actions)}`;
  };

  // 「となりの○○」パターン
  const tonariNoPattern = () => {
    const characters = ['トトロール', '山田さん', '佐藤くん', 'タロウ', 'ハナコ'];
    return `となりの${fakerJA.helpers.arrayElement(characters)}`;
  };

  // 「○○の上/下の××」パターン
  const gakePattern = () => {
    const locations = ['崖', '山', '橋', '塔', '雲'];
    const directions = ['上', '下'];
    const names = ['ポチョ', 'ニャンコ', 'タマ', 'コロ', 'シロ'];
    return `${fakerJA.helpers.arrayElement(locations)}の${fakerJA.helpers.arrayElement(directions)}の${fakerJA.helpers.arrayElement(names)}`;
  };

  // 「○○の××」パターン（職業＋場所）
  const shokunouPattern = () => {
    const jobs = ['魔女', '魔法使い', '勇者', '騎士', '忍者'];
    const places = ['宅急便屋', '配達屋', '診療所', '工房', '道場'];
    return `${fakerJA.helpers.arrayElement(jobs)}の${fakerJA.helpers.arrayElement(places)}`;
  };

  // 「××を/のすませば」パターン
  const subasebaPattern = () => {
    const objects = ['耳', '目', '心', '声', '手'];
    return `${fakerJA.helpers.arrayElement(objects)}をすませば〜`;
  };

  // 「○○の恩返し××」パターン
  const ongaeshiPattern = () => {
    const animals = ['猫', '犬', '鳥', '亀', 'うさぎ'];
    const actions = ['ができない', 'がしたい', 'をする', '大作戦'];
    return `${fakerJA.helpers.arrayElement(animals)}の恩返し${fakerJA.helpers.arrayElement(actions)}`;
  };

  // 「××の動く○○」パターン
  const ugokuPattern = () => {
    const owners = ['王様', '魔女', '博士', '魔法使い', '錬金術師', '発明家'];
    const objects = ['家具', '城', '要塞', '工房', '研究所', '塔'];
    return `${fakerJA.helpers.arrayElement(owners)}の動く${fakerJA.helpers.arrayElement(objects)}`;
  };

  // 「新世紀○○」パターン
  const shinsekiPattern = () => {
    const words = ['レボリューション', 'ジェネレーション', 'クリエイション', 'デスティネーション'];
    return `新世紀${fakerJA.helpers.arrayElement(words)}`;
  };

  // 「シン・○○」パターン
  const shinPattern = () => {
    const words = ['レジェンド', 'ヒーロー', 'ファンタジー', 'アドベンチャー'];
    return `シン・${fakerJA.helpers.arrayElement(words)}`;
  };

  // 「○○の刃/××」パターン
  const yaibaPattern = () => {
    const prefixes = ['鬼滅', '魔滅', '邪滅', '闇滅'];
    const suffixes = ['の刃物', 'の剣', 'の槍', 'の盾'];
    return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(suffixes)}`;
  };

  const patterns = [
    kimiNoPattern,
    tenkiNoPattern,
    senToPattern,
    tonariNoPattern,
    gakePattern,
    shokunouPattern,
    subasebaPattern,
    ongaeshiPattern,
    ugokuPattern,
    shinsekiPattern,
    shinPattern,
    yaibaPattern,
  ];

  const pattern = fakerJA.helpers.arrayElement(patterns);
  return pattern();
};

// 2. 超長いラノベ風タイトル（構造のみ、固有作品を連想させない）
const generateLightNovelTitle = () => {
  const templates = [
    // 異世界転生系（一般的な構造）
    () => {
      const roles = ['エンドクレジットスタッフ', '背景画', '効果音', 'モブキャラ', '村人A', '通行人B', '看板娘'];
      const endings = ['だった件について', 'になった話', 'として生きる', 'の日々'];
      return `異世界に転生したら${fakerJA.helpers.arrayElement(roles)}${fakerJA.helpers.arrayElement(endings)}`;
    },
    () => {
      const creatures = ['ドラゴン', 'スライム', 'ゴブリン', 'フェアリー', 'エルフ'];
      const jobs = ['王様', '勇者', '魔王', '商人', '鍛冶屋'];
      return `転生したら${fakerJA.helpers.arrayElement(creatures)}の${fakerJA.helpers.arrayElement(jobs)}だった`;
    },
    () => {
      const places = ['異世界', '魔界', '天界', '精霊界'];
      const activities = ['冒険', '生活', '商売', 'ものづくり', '料理'];
      return `${fakerJA.helpers.arrayElement(places)}で${fakerJA.helpers.arrayElement(activities)}して最強になりました`;
    },

    // ○○がこんなに〜系（一般的な構造）
    () => {
      const subjects = ['仲間', '部下', '友達', '家族', 'パーティー'];
      const attributes = ['多い', '強い', '優秀', '個性的', '面白い'];
      return `こんなに${fakerJA.helpers.arrayElement(subjects)}が${fakerJA.helpers.arrayElement(attributes)}わけがない`;
    },
    () => {
      const relations = ['相棒', '仲間', 'ライバル', 'パートナー'];
      const conditions = ['いれば無敵', 'がいれば最強', 'と一緒なら怖くない'];
      return `${fakerJA.helpers.arrayElement(relations)}さえ${fakerJA.helpers.arrayElement(conditions)}`;
    },

    // やれやれ系（一般的な構造）
    () => {
      const troubles = ['トラブル', 'ピンチ', '問題', '事件', '騒動'];
      const reactions = ['ですか', 'かよ', 'なのか', 'とは'];
      return `やれやれ、また${fakerJA.helpers.arrayElement(troubles)}${fakerJA.helpers.arrayElement(reactions)}`;
    },

    // 〜したら〜だった系（一般的な構造）
    () => {
      const actions = ['頑張ったら', '努力したら', '修行したら', '挑戦したら'];
      const results = ['チート能力', '最強スキル', '伝説の力', '神の加護', '無敵の技'];
      return `${fakerJA.helpers.arrayElement(actions)}${fakerJA.helpers.arrayElement(results)}を手に入れた`;
    },

    // ようこそ〜系（一般的な構造）
    () => {
      const types = ['実力主義', '弱肉強食', '平和主義', '自由主義'];
      const places = ['学園', '世界', '国', '組織', 'ギルド'];
      return `ようこそ${fakerJA.helpers.arrayElement(types)}の${fakerJA.helpers.arrayElement(places)}へ`;
    },

    // この〜に××を！系（一般的な構造）
    () => {
      const adjectives = ['素晴らしい', '過酷な', '厳しい', '優しい', '不思議な'];
      const places = ['世界', '異世界', '学園', '街', '冒険'];
      const wishes = ['祝福', '幸運', '平和', '勝利', '栄光'];
      return `この${fakerJA.helpers.arrayElement(adjectives)}${fakerJA.helpers.arrayElement(places)}に${fakerJA.helpers.arrayElement(wishes)}を！`;
    },
  ];

  const template = fakerJA.helpers.arrayElement(templates);
  return template();
};

// 3. 年代別スタイル（構造のみ模倣、固有名詞は架空）
const generateRetroStyleTitle = () => {
  const eras = [
    // 70-80年代スタイル
    () => {
      const prefixes = ['宇宙戦艦', '銀河', '超時空', '無敵', '勇者', '魔神'];
      const names = ['タイタン', 'オリオン', 'アトラス', 'ゼウス', 'アポロン', 'ネプチューン'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(names)}`;
    },
    () => {
      const words = ['999', '777', '555', '伝説', '帝国', '要塞', '戦記'];
      return `銀河${fakerJA.helpers.arrayElement(words)}`;
    },

    // 90年代スタイル
    () => {
      const words = ['新世紀', '少女革命', '魔法騎士', '美少女戦士'];
      const nouns = ['レボリューション', 'デスティニー', 'オデッセイ', 'クロニクル'];
      return `${fakerJA.helpers.arrayElement(words)}${fakerJA.helpers.arrayElement(nouns)}`;
    },
    () => {
      const types = ['戦士', '武闘伝', '新世紀'];
      const letters = ['G', 'Z', 'X', 'V'];
      const names = ['ファイター', 'ウォリアー', 'ナイト', 'ヒーロー'];
      return `機動${fakerJA.helpers.arrayElement(types)}${fakerJA.helpers.arrayElement(letters)}${fakerJA.helpers.arrayElement(names)}`;
    },

    // 2000年代スタイル
    () => {
      const familyNames = ['桜井', '高橋', '田中', '佐藤', '鈴木', '山本'];
      const givenNames = ['ハルカ', 'ミク', 'ユウ', 'アヤ', 'レイ', 'カナ', 'リン'];
      const suffixes = ['の憂鬱', 'の消失', 'の溜息', 'の陰謀', 'の秘密', 'の決意'];
      return `${fakerJA.helpers.arrayElement(familyNames)}${fakerJA.helpers.arrayElement(givenNames)}${fakerJA.helpers.arrayElement(suffixes)}`;
    },
    () => {
      const prefixes = ['ゆる', 'ほの', 'ふわ', 'きら', 'ぴか'];
      const suffixes = ['おん！', 'すた！', 'まり☆', 'ゆり♪', 'ぴか★'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(suffixes)}`;
    },

    // 2010年代スタイル
    () => {
      const subjects = ['会長', '先輩', '後輩', '委員長', '部長', '生徒会長'];
      const actions = ['告らせたい', '恋したい', '好きになりたい', '振り向かせたい'];
      return `${fakerJA.helpers.arrayElement(subjects)}は${fakerJA.helpers.arrayElement(actions)}〜天才たちの恋愛頭脳戦〜`;
    },
    () => {
      const prefixes = ['鬼滅', '魔滅', '邪滅', '闇滅', '妖滅'];
      const suffixes = ['の刃', 'の剣', '廻戦', '奇譚'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(suffixes)}`;
    },
  ];

  const era = fakerJA.helpers.arrayElement(eras);
  return era();
};

// 4. バージョン番号付き
const generateVersionedTitle = () => {
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

// 5. 記号・英語混じり（構造のみ模倣、固有名詞は架空）
const generateSymbolicTitle = () => {
  const templates = [
    // Re:パターン
    () => `Re:${fakerJA.helpers.arrayElement(['ゼロ', 'ワン', 'ライフ', 'スタート', 'ビギン'])}から始める${fakerJA.helpers.arrayElement(['異世界生活', '制作生活', '監督業', '新生活', '冒険'])}`,

    // .記号//パターン
    () => `.${fakerJA.helpers.arrayElement(['link', 'code', 'net', 'cyber'])}//${fakerJA.helpers.arrayElement(['Sign', 'Roots', 'Link', 'Quantum', 'Matrix'])}`,

    // 英単語;記号パターン
    () => `${fakerJA.helpers.arrayElement(['DREAMS', 'STARS', 'HEARTS', 'MINDS'])};${fakerJA.helpers.arrayElement(['GATE', 'DOOR', 'WINDOW', 'PORTAL'])}`,

    // ○○ -THE ANIMATION-パターン
    () => `${fakerJA.helpers.arrayElement(['ソードアート', 'ガンアクション', 'マジックバトル', 'サイバーワールド'])} -THE ANIMATION-`,

    // 英単語/サブタイトルパターン
    () => `${fakerJA.helpers.arrayElement(['Destiny', 'Legend', 'Chronicle', 'Odyssey'])}/${fakerJA.helpers.arrayElement(['stay night', 'new dawn', 'last hope', 'first light'])}`,

    // 英単語 Beats!パターン
    () => `${fakerJA.helpers.arrayElement(['Angel', 'Devil', 'God', 'Chaos', 'Dragon', 'Phoenix'])} Beats!`,

    // 英名 -カタカナ-パターン
    () => {
      const names = ['Charlotte', 'Victoria', 'Elizabeth', 'Sophia'];
      const katakana = ['シャーロット', 'ヴィクトリア', 'エリザベス', 'ソフィア'];
      const index = fakerJA.number.int({ min: 0, max: names.length - 1 });
      return `${names[index]} -${katakana[index]}-`;
    },
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
      const nouns = ['エンドクレジット', 'スタジオ', '制作現場', '編集室', 'スクリーン'];
      return `${fakerJA.helpers.arrayElement(prefixes)}${fakerJA.helpers.arrayElement(nouns)}`;
    },

    // 恋愛系
    () => {
      const words = ['初恋', '運命の', '永遠の', '切ない', '甘い'];
      const nouns = ['シナリオ', 'エンドクレジット', 'ラブストーリー', '物語', 'メモリー'];
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
