import { generateJapaneseName } from "./japanese";
import { generateChineseName } from "./chinese";
import { generateKoreanName } from "./korean";
import { generateWesternName } from "./western";
import { generateMixedName } from "./mixed";

// スタッフ名を生成（確率的に日本人名または外国人名を選択）
const generateStaffName = (options?: { allowForeign?: boolean }) => {
  // デフォルトでは外国人名を許可
  const allowForeign = options?.allowForeign !== false;

  if (!allowForeign) {
    // 外国人名不可の場合は日本人名のみ
    return generateJapaneseName();
  }

  const rand = Math.random();

  // 確率設定：
  // 85% - 日本人名
  // 6% - 中国人名
  // 4% - 韓国人名
  // 3% - 欧米人名
  // 2% - 日本語苗字 + 外国の名前

  if (rand < 0.85) {
    return generateJapaneseName();
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

// 個別の名前生成関数もエクスポート
export {
  generateJapaneseName,
  generateChineseName,
  generateKoreanName,
  generateWesternName,
  generateMixedName,
};
