import type { Staffs } from "@/types/staff";
import type { Role } from "@/types/role";
import { generateNames } from "@/utils/generate";
import { EVANGELIONRole } from "../definitions/evangelionRole";
import { roleCategories } from "../definitions/categories";
import { staffCountRanges } from "../config/staffCounts";
import { japaneseOnlyRoles } from "../config/restrictions";
import { generateCastSection } from "./cast";
import { generateCooperationSection } from "./cooperation";
import { generateCompaniesSection } from "./companies";
import { generateEasterEggsSection } from "./easterEggs";

export const generateRoleStaff = () => {
  const staffs: Staffs = [];
  const roles = EVANGELIONRole;

  // 役職を追加する関数
  const addRole = (roleKey: Role, customMin?: number, customMax?: number) => {
    const role = roles[roleKey];
    if (!role) return;

    const range = staffCountRanges[roleKey] || { min: 1, max: 5 };
    const min = customMin !== undefined ? customMin : range.min;
    const max = customMax !== undefined ? customMax : range.max;

    const memberCount = Math.floor(Math.random() * (max - min + 1)) + min;

    // 特定の役職には日本人名のみを使用
    const allowForeign = !japaneseOnlyRoles.includes(roleKey);
    const members = generateNames(memberCount, { allowForeign });

    staffs.push({
      role: roleKey,
      members,
    });
  };

  // ===== キャスト/声優セクション（必須・大規模） =====
  staffs.push(...generateCastSection());

  // 総監督（20%の確率）
  if (Math.random() < 0.2) {
    addRole("総監督");
  }

  // 監督（必須）
  addRole("監督");

  // 企画・原作・脚本（必須）
  addRole("企画・原作・脚本");

  // コアアニメーション（ほぼ必須 - 95%の確率）
  if (Math.random() < 0.95) {
    const animationRoles = roleCategories.animation;
    // より多くの役職を選択（全体の60-100%）
    const minCount = Math.ceil(animationRoles.length * 0.6);
    const selectedCount = Math.floor(Math.random() * (animationRoles.length - minCount + 1)) + minCount;
    const selectedRoles = animationRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, selectedCount);

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // 色彩・美術（ほぼ必須 - 95%の確率）
  if (Math.random() < 0.95) {
    const artRoles = roleCategories.artAndColor;
    // より多くの役職を選択（全体の60-100%）
    const minCount = Math.ceil(artRoles.length * 0.6);
    const selectedCount = Math.floor(Math.random() * (artRoles.length - minCount + 1)) + minCount;
    const selectedRoles = artRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, selectedCount);

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // CGI（70%の確率、含む場合は多めに）
  if (Math.random() < 0.7) {
    const cgiRoles = roleCategories.cgi;
    // より多くのCGIスタッフを含める
    const minCount = Math.ceil(cgiRoles.length * 0.5);
    const selectedCount = Math.floor(Math.random() * (cgiRoles.length - minCount + 1)) + minCount;
    const selectedRoles = cgiRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, selectedCount);

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // 撮影関連（ほぼ必須 - 90%の確率）
  if (Math.random() < 0.9) {
    const photoRoles = roleCategories.photography;
    // すべての撮影関連役職を含める
    const selectedCount = Math.floor(Math.random() * 2) + photoRoles.length - 1;
    const selectedRoles = photoRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(selectedCount, photoRoles.length));

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // 音響・音楽（ほぼ必須 - 95%の確率）
  if (Math.random() < 0.95) {
    const soundRoles = roleCategories.sound;
    // すべての音響関連役職を含める
    const selectedCount = Math.floor(Math.random() * 2) + soundRoles.length - 1;
    const selectedRoles = soundRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(selectedCount, soundRoles.length));

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // 制作関連（ほぼ必須 - 95%の確率）
  if (Math.random() < 0.95) {
    const prodRoles = roleCategories.production;
    // すべての制作関連役職を含める
    const selectedCount = Math.floor(Math.random() * 2) + prodRoles.length - 1;
    const selectedRoles = prodRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(selectedCount, prodRoles.length));

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // 特殊技術（50%の確率）
  if (Math.random() < 0.5) {
    const specialRoles = roleCategories.specialTech;
    const selectedCount = Math.floor(Math.random() * specialRoles.length) + 2;
    const selectedRoles = specialRoles
      .sort(() => Math.random() - 0.5)
      .slice(0, selectedCount);

    selectedRoles.forEach((roleKey) => {
      if (roleKey in roles) {
        addRole(roleKey as Role);
      }
    });
  }

  // ===== 協力会社とそのスタッフ詳細セクション =====
  staffs.push(...generateCooperationSection());

  // ===== 企業・組織セクション =====
  staffs.push(...generateCompaniesSection());

  // ===== イースターエッグ（0.1%の確率） =====
  staffs.push(...generateEasterEggsSection());

  // index順でソート（未定義の役職にはデフォルト値を使用）
  const sortedStaffs = staffs.sort((a, b) => {
    const aIndex = roles[a.role]?.index ?? 999;
    const bIndex = roles[b.role]?.index ?? 999;
    return aIndex - bIndex;
  });

  return sortedStaffs;
};
