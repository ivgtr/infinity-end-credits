import type { Staffs } from "@/types/staff";
import type { Role } from "@/types/role";
import { generateCompanyName, generateNames } from "@/utils/generate";
import { EVANGELIONRole } from "../definitions/evangelionRole";

// 企業・組織セクション
export const generateCompaniesSection = (): Staffs => {
  const staffs: Staffs = [];
  const roles = EVANGELIONRole;

  // 製作委員会（90%の確率）
  if (Math.random() < 0.9) {
    const committeeCount = Math.floor(Math.random() * 10) + 8; // 8-17社
    const companies = [];
    for (let i = 0; i < committeeCount; i++) {
      companies.push(generateCompanyName("committee"));
    }
    staffs.push({
      role: "製作",
      members: companies,
    });
  }

  // 制作協力（80%の確率）
  if (Math.random() < 0.8) {
    const cooperationCount = Math.floor(Math.random() * 8) + 5; // 5-12社
    const companies = [];
    for (let i = 0; i < cooperationCount; i++) {
      companies.push(generateCompanyName("studio"));
    }
    staffs.push({
      role: "制作協力",
      members: companies,
    });
  }

  // 各種協力企業（確率を上げてより多く含める）
  const cooperationTypes = [
    { role: "機材協力", probability: 0.7, min: 3, max: 8 },
    { role: "音響協力", probability: 0.6, min: 2, max: 6 },
    { role: "取材・考証協力", probability: 0.5, min: 3, max: 7 },
    { role: "ロケーション協力", probability: 0.4, min: 2, max: 5 },
    { role: "協力", probability: 0.7, min: 5, max: 12 },
  ];

  cooperationTypes.forEach(({ role, probability, min, max }) => {
    if (Math.random() < probability && role in roles) {
      const count = Math.floor(Math.random() * (max - min + 1)) + min;
      const companies = [];
      for (let i = 0; i < count; i++) {
        companies.push(generateCompanyName("general"));
      }
      staffs.push({
        role: role as Role,
        members: companies,
      });
    }
  });

  // Special Thanks（50%の確率で多めに）
  if (Math.random() < 0.5) {
    const thanksCount = Math.floor(Math.random() * 30) + 20; // 20-49人
    const people = generateNames(thanksCount);
    staffs.push({
      role: "協力",
      members: people,
    });
  }

  return staffs;
};
