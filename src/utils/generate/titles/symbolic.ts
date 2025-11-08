import { fakerJA } from "@faker-js/faker";

// 5. 記号・英語混じり（構造のみ模倣、固有名詞は架空）
export const generateSymbolicTitle = () => {
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
