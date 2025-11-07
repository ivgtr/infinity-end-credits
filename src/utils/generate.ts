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

export const generateTitle = () => {
  const patterns = [
    // 形容詞 + 名詞パターン
    () => `${fakerJA.word.adjective()}${fakerJA.word.noun()}`,
    // 名詞 + の + 名詞パターン
    () => `${fakerJA.word.noun()}の${fakerJA.word.noun()}`,
    // 劇場版パターン
    () => `劇場版 ${fakerJA.word.noun()}`,
    // 人名 + と + 名詞パターン
    () => `${fakerJA.person.lastName()}と${fakerJA.word.noun()}`,
    // シンプルな名詞パターン
    () => fakerJA.word.noun(),
    // カタカナ風パターン
    () => `${fakerJA.word.noun()}${fakerJA.word.noun()}`,
    // 〜の物語パターン
    () => `${fakerJA.word.noun()}の物語`,
    // 時間系パターン
    () => `${fakerJA.date.month()}の${fakerJA.word.noun()}`,
  ];

  const randomPattern = fakerJA.helpers.arrayElement(patterns);
  return randomPattern();
};

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
