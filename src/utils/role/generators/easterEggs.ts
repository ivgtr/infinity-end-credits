import type { Staffs } from "@/types/staff";
import type { Role } from "@/types/role";
import type { EasterEggType } from "@/types/credits";
import { fakerJA } from "@faker-js/faker";
import { generateNames, funnyRoles, famousDirectors } from "@/utils/generate";

// イースターエッグ（0.1%の確率）
export const generateEasterEggsSection = (): Staffs => {
  const staffs: Staffs = [];

  if (Math.random() < 0.001) {
    // イースターエッグの種類をランダムに選択
    const easterEggTypes: EasterEggType[] = ["famous_director", "funny_role", "same_name"];
    const selectedEasterEgg = fakerJA.helpers.arrayElement(easterEggTypes);

    if (selectedEasterEgg === "famous_director") {
      // 有名監督の名前を通常の役職に配置
      const directorCount = Math.floor(Math.random() * 3) + 1; // 1-3人
      const selectedDirectors = fakerJA.helpers.arrayElements(famousDirectors, directorCount);
      const normalRoles = ["監督", "総監督", "企画・原作・脚本", "総作画監督"];
      const selectedRole = fakerJA.helpers.arrayElement(normalRoles);

      staffs.push({
        role: selectedRole as Role,
        members: selectedDirectors,
        easterEgg: "famous_director",
      });
    } else if (selectedEasterEgg === "funny_role") {
      // 面白い架空の役職を追加
      const funnyRoleCount = Math.floor(Math.random() * 3) + 1; // 1-3つの役職
      for (let i = 0; i < funnyRoleCount; i++) {
        const role = fakerJA.helpers.arrayElement(funnyRoles);
        const memberCount = Math.floor(Math.random() * 5) + 1; // 1-5人
        const members = generateNames(memberCount);

        staffs.push({
          role: role as Role,
          members,
          easterEgg: "funny_role",
        });
      }
    } else if (selectedEasterEgg === "same_name") {
      // 全員が同じ名前のクレジット
      const sameName = generateNames(1)[0]; // ランダムな1人の名前
      const count = Math.floor(Math.random() * 20) + 10; // 10-29人
      const sameNameMembers = Array(count).fill(sameName);
      const normalRoles = ["原画", "動画", "仕上げ", "背景", "CGIアニメーター"];
      const selectedRole = fakerJA.helpers.arrayElement(normalRoles);

      staffs.push({
        role: selectedRole as Role,
        members: sameNameMembers,
        easterEgg: "same_name",
      });
    }
  }

  return staffs;
};
