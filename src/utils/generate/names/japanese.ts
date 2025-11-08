import { fakerJA } from "@faker-js/faker";

// 日本人名を生成
export const generateJapaneseName = () => {
  return fakerJA.person.fullName();
};
