import { fakerJA } from "@faker-js/faker";

// 1. パロディタイトル（構造のみをパロディ、固有名詞は架空）
export const generateParodyTitle = () => {
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
