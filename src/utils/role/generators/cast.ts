import type { Staffs } from "@/types/staff";
import { generateCharacterName, generateNames } from "@/utils/generate";

// キャスト/声優セクション（必須・大規模）
export const generateCastSection = (): Staffs => {
  const castCount = Math.floor(Math.random() * 30) + 30; // 30-59人
  const castMembers: string[] = [];

  for (let i = 0; i < castCount; i++) {
    const characterName = generateCharacterName();
    // 声優は日本人名のみ
    const actorName = generateNames(1, { allowForeign: false })[0];
    castMembers.push(`${characterName}：${actorName}`);
  }

  return [{
    role: "声ノ出演",
    members: castMembers,
  }];
};
