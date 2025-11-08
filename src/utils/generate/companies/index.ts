import { fakerJA } from "@faker-js/faker";

// カタカナ単語パーツ（実際の制作会社名から抽出したパターン）
const studioNameParts = {
  prefixes: [
    "サン", "ホワイト", "ブルー", "レッド", "グリーン", "シルバー", "ゴールド",
    "ダーク", "ライト", "クリア", "ブライト", "ディープ", "ハイ", "ロー",
    "ニュー", "オールド", "ビッグ", "スモール", "グレート", "ファイン",
    "トゥルー", "スーパー", "ウルトラ", "メガ", "ギガ", "エクストラ"
  ],
  nouns: [
    // 動物
    "フォックス", "ウルフ", "ベア", "ライオン", "タイガー", "ドラゴン", "フェニックス",
    "イーグル", "ファルコン", "ホーク", "レイヴン", "スワン", "ドルフィン",
    // 自然・天候
    "スター", "ムーン", "スカイ", "オーシャン", "マウンテン", "リバー",
    "ウィンド", "ファイア", "ウォーター", "アース", "サンダー", "クラウド",
    "ストーン", "フラワー", "ツリー", "シー", "レイク", "フォレスト", "デザート",
    "レイン", "スノー", "サンライズ", "サンセット", "ミスト", "ストーム",
    // 形・図形
    "サークル", "トライアングル", "スクエア", "クロス", "クローバー", "ダイヤモンド",
    // 抽象概念
    "ドリーム", "ビジョン", "スピリット", "ソウル", "ハート", "マインド",
    "ホープ", "フェイス", "フリーダム", "ハーモニー", "エコー", "シャドウ"
  ],
  simple: [
    "ボンズ", "シャフト", "トリガー", "ガイナ", "サテライト", "ゴンゾ",
    "マッパ", "リンクス", "ネクサス", "パレット", "キューブ", "プリズム",
    "エッジ", "コア", "ノヴァ", "オービット", "パルス", "アトラス",
    "フェーズ", "ヴォルテックス", "アペックス", "ゼニス", "オメガ", "アルファ",
    "ピーク", "サミット", "ホライゾン", "エクリプス", "オーロラ", "ルミナス"
  ]
};

// 地名パーツ
const locationParts = [
  "東京", "京都", "大阪", "名古屋", "横浜", "神戸", "福岡", "札幌",
  "仙台", "広島", "鎌倉", "渋谷", "新宿", "池袋", "秋葉原", "吉祥寺",
  "埼玉", "千葉", "神奈川", "兵庫", "愛知", "北海道", "沖縄",
  "中野", "杉並", "世田谷", "品川", "目黒", "港区", "銀座",
  "六本木", "恵比寿", "代官山", "自由が丘", "下北沢", "三軒茶屋"
];

// アルファベットパーツ
const alphabetParts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabetNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "24", "99"];

// より多様な接尾語
const studioSuffixes = [
  "スタジオ", "ワークス", "アニメーション", "ピクチャーズ", "フィルムズ",
  "アニメ", "プロダクション", "クリエイト", "ラボ", "ファクトリー"
];

const productionSuffixes = [
  "プロダクション", "エンタテインメント", "ピクチャーズ", "映画", "スタジオ",
  "メディア", "コンテンツ", "クリエイト", "ワークス", "ラボ", "グループ"
];

const committeeSuffixes = [
  "製作委員会", "プロジェクト", "パートナーズ", "フィルムパートナーズ",
  "製作プロジェクト", "アニメーション製作委員会", "パートナーシップ"
];

const generalPrefixes = [
  "株式会社", "有限会社", "", "", "", "" // 空文字を多めにして接頭語なしの確率を上げる
];

const generalSuffixes = [
  "", "", "", "グループ", "ホールディングス", "コーポレーション",
  "カンパニー", "インターナショナル", "ジャパン"
];

// スタジオ名生成（多様なパターン）
const generateStudioName = (): string => {
  const patterns = [
    // パターン1: カタカナ単語のみ（20%）
    () => fakerJA.helpers.arrayElement(studioNameParts.simple),

    // パターン2: 2つのカタカナ単語を組み合わせ（15%）
    () => {
      const prefix = fakerJA.helpers.arrayElement(studioNameParts.prefixes);
      const noun = fakerJA.helpers.arrayElement(studioNameParts.nouns);
      return `${prefix}${noun}`;
    },

    // パターン3: 地名 + アニメーション/スタジオ（12%）
    () => {
      const location = fakerJA.helpers.arrayElement(locationParts);
      const suffix = fakerJA.helpers.arrayElement(["アニメーション", "スタジオ", "アニメ"]);
      return `${location}${suffix}`;
    },

    // パターン4: アルファベット + 数字 + Pictures/STAFF（12%）
    () => {
      const letter = fakerJA.helpers.arrayElement(alphabetParts);
      const hasNumber = Math.random() > 0.5;
      const number = hasNumber ? `-${fakerJA.helpers.arrayElement(alphabetNumbers)}` : "";
      const suffix = fakerJA.helpers.arrayElement(["Pictures", "STAFF", "STUDIO", "WORKS"]);
      return `${letter}${number} ${suffix}`;
    },

    // パターン5: プロダクション + アルファベット（8%）
    () => {
      const letters = fakerJA.helpers.arrayElement(alphabetParts) +
                     (Math.random() > 0.5 ? `.${fakerJA.helpers.arrayElement(alphabetParts)}` : "");
      return `Production ${letters}`;
    },

    // パターン6: カタカナ名 + スタジオ/ワークス（12%）
    () => {
      const name = fakerJA.helpers.arrayElement([
        ...studioNameParts.simple,
        ...studioNameParts.prefixes
      ]);
      const suffix = fakerJA.helpers.arrayElement(["スタジオ", "ワークス", "STUDIO", "WORKS"]);
      return `${name}${suffix}`;
    },

    // パターン7: 名詞 + 数字 + スタジオ/ワークス（8%）
    () => {
      const noun = fakerJA.helpers.arrayElement(studioNameParts.nouns);
      const number = fakerJA.helpers.arrayElement(alphabetNumbers);
      const suffix = fakerJA.helpers.arrayElement(["スタジオ", "ワークス", ""]);
      return suffix ? `${noun}${number}${suffix}` : `${noun}${number}`;
    },

    // パターン8: 3-4文字のランダムカタカナ（8%）
    () => {
      // 先頭に使える文字（ンやヲを除外）
      const firstSyllables = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ",
                             "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ",
                             "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ"];
      // 2文字目以降に使える文字
      const syllables = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ",
                        "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ",
                        "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ン"];
      const length = Math.random() > 0.5 ? 3 : 4;
      let name = fakerJA.helpers.arrayElement(firstSyllables);
      for (let i = 1; i < length; i++) {
        name += fakerJA.helpers.arrayElement(syllables);
      }
      return name;
    },

    // パターン9: Faker生成名 + スタジオ関連接尾語（5%）
    () => {
      const baseName = fakerJA.company.name().replace(/株式会社|有限会社|合同会社|合名会社|合資会社/g, "").trim();
      // 長すぎる名前は最初の数文字だけ取る
      const shortName = baseName.length > 6 ? baseName.substring(0, 6) : baseName;
      const suffix = fakerJA.helpers.arrayElement(studioSuffixes);
      return `${shortName}${suffix}`;
    },
  ];

  const generator = fakerJA.helpers.arrayElement(patterns);
  return generator();
};

// プロダクション名生成
const generateProductionName = (): string => {
  const baseName = fakerJA.company.name().replace(/株式会社|有限会社|合同会社|合名会社|合資会社/g, "").trim();
  const suffix = fakerJA.helpers.arrayElement(productionSuffixes);

  // 50%の確率で接尾語を付けない（シンプルな名前）
  if (Math.random() > 0.5) {
    return baseName;
  }

  return `${baseName}${suffix}`;
};

// 委員会名生成
const generateCommitteeName = (): string => {
  const baseName = fakerJA.company.name().replace(/株式会社|有限会社|合同会社|合名会社|合資会社/g, "").trim();
  const suffix = fakerJA.helpers.arrayElement(committeeSuffixes);
  return `${baseName}${suffix}`;
};

// 一般企業名生成
const generateGeneralName = (): string => {
  const baseName = fakerJA.company.name().replace(/株式会社|有限会社|合同会社|合名会社|合資会社/g, "").trim();
  const prefix = fakerJA.helpers.arrayElement(generalPrefixes);
  const suffix = fakerJA.helpers.arrayElement(generalSuffixes);

  // prefix と suffix の両方が空の場合は suffix を付ける
  if (!prefix && !suffix) {
    return baseName;
  }

  return `${prefix}${baseName}${suffix}`.trim();
};

export const generateCompanyName = (type?: "studio" | "production" | "committee" | "general") => {
  const companyType = type || fakerJA.helpers.arrayElement(["studio", "production", "committee", "general"] as const);

  switch (companyType) {
    case "studio":
      return generateStudioName();
    case "production":
      return generateProductionName();
    case "committee":
      return generateCommitteeName();
    case "general":
      return generateGeneralName();
    default:
      return generateGeneralName();
  }
};
