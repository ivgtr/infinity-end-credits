import { fakerJA } from "@faker-js/faker";

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
