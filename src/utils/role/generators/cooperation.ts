import type { Staffs } from "@/types/staff";
import type { Role } from "@/types/role";
import { generateCompanyName, generateNames } from "@/utils/generate";

// 協力会社とそのスタッフ詳細セクション
export const generateCooperationSection = (): Staffs => {
  const staffs: Staffs = [];

  // 原画協力（90%の確率）
  if (Math.random() < 0.9) {
    const studioCount = Math.floor(Math.random() * 5) + 4; // 4-8スタジオ
    const cooperationMembers: string[] = [];
    for (let i = 0; i < studioCount; i++) {
      const studioName = generateCompanyName("studio");
      cooperationMembers.push(studioName);
      // 各スタジオのスタッフ
      const staffCount = Math.floor(Math.random() * 15) + 8; // 8-22人
      const studioStaff = generateNames(staffCount);
      studioStaff.forEach(name => cooperationMembers.push(`　${name}`));
    }
    staffs.push({
      role: "原画協力" as Role,
      members: cooperationMembers,
    });
  }

  // 動画協力（90%の確率）
  if (Math.random() < 0.9) {
    const studioCount = Math.floor(Math.random() * 6) + 4; // 4-9スタジオ
    const cooperationMembers: string[] = [];
    for (let i = 0; i < studioCount; i++) {
      const studioName = generateCompanyName("studio");
      cooperationMembers.push(studioName);
      // 各スタジオのスタッフ
      const staffCount = Math.floor(Math.random() * 20) + 10; // 10-29人
      const studioStaff = generateNames(staffCount);
      studioStaff.forEach(name => cooperationMembers.push(`　${name}`));
    }
    staffs.push({
      role: "動画協力" as Role,
      members: cooperationMembers,
    });
  }

  // 仕上げ協力（85%の確率）
  if (Math.random() < 0.85) {
    const studioCount = Math.floor(Math.random() * 5) + 3; // 3-7スタジオ
    const cooperationMembers: string[] = [];
    for (let i = 0; i < studioCount; i++) {
      const studioName = generateCompanyName("studio");
      cooperationMembers.push(studioName);
      // 各スタジオのスタッフ
      const staffCount = Math.floor(Math.random() * 18) + 8; // 8-25人
      const studioStaff = generateNames(staffCount);
      studioStaff.forEach(name => cooperationMembers.push(`　${name}`));
    }
    staffs.push({
      role: "仕上げ協力",
      members: cooperationMembers,
    });
  }

  // 背景協力（80%の確率）
  if (Math.random() < 0.8) {
    const studioCount = Math.floor(Math.random() * 4) + 3; // 3-6スタジオ
    const cooperationMembers: string[] = [];
    for (let i = 0; i < studioCount; i++) {
      const studioName = generateCompanyName("studio");
      cooperationMembers.push(studioName);
      // 各スタジオのスタッフ
      const staffCount = Math.floor(Math.random() * 12) + 6; // 6-17人
      const studioStaff = generateNames(staffCount);
      studioStaff.forEach(name => cooperationMembers.push(`　${name}`));
    }
    staffs.push({
      role: "背景協力" as Role,
      members: cooperationMembers,
    });
  }

  // 撮影協力（75%の確率）
  if (Math.random() < 0.75) {
    const studioCount = Math.floor(Math.random() * 4) + 2; // 2-5スタジオ
    const cooperationMembers: string[] = [];
    for (let i = 0; i < studioCount; i++) {
      const studioName = generateCompanyName("studio");
      cooperationMembers.push(studioName);
      // 各スタジオのスタッフ
      const staffCount = Math.floor(Math.random() * 10) + 5; // 5-14人
      const studioStaff = generateNames(staffCount);
      studioStaff.forEach(name => cooperationMembers.push(`　${name}`));
    }
    staffs.push({
      role: "撮影協力" as Role,
      members: cooperationMembers,
    });
  }

  // CGI協力（60%の確率）
  if (Math.random() < 0.6) {
    const studioCount = Math.floor(Math.random() * 3) + 2; // 2-4スタジオ
    const cooperationMembers: string[] = [];
    for (let i = 0; i < studioCount; i++) {
      const studioName = generateCompanyName("studio");
      cooperationMembers.push(studioName);
      // 各スタジオのスタッフ
      const staffCount = Math.floor(Math.random() * 12) + 6; // 6-17人
      const studioStaff = generateNames(staffCount);
      studioStaff.forEach(name => cooperationMembers.push(`　${name}`));
    }
    staffs.push({
      role: "CGI協力" as Role,
      members: cooperationMembers,
    });
  }

  return staffs;
};
