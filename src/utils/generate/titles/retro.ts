import { fakerJA } from "@faker-js/faker";

// 3. 年代別スタイル（構造のみ模倣、固有名詞は架空）
export const generateRetroStyleTitle = () => {
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
