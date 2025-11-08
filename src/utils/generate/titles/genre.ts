import { fakerJA } from "@faker-js/faker";

// 6. ジャンル特化型
export const generateGenreTitle = () => {
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
