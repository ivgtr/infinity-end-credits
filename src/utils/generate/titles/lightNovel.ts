import { fakerJA } from "@faker-js/faker";

// 2. 超長いラノベ風タイトル（構造のみ、固有作品を連想させない）
export const generateLightNovelTitle = () => {
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
