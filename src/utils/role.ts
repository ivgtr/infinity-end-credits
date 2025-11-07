import type { Roles } from "@/types/role";
import type { Staffs } from "@/types/staff";

import { getKeys } from "./object";
import { generateNames, generateCompanyName } from "./generate";

const EVANGELIONRole: Roles = {
  "企画・原作・脚本": {
    required: true,
    max: 1,
    index: 0,
  },
  画コンテ: {
    required: false,
    max: 30,
    index: 0,
  },
  "画コンテ案・イメージボード": {
    required: false,
    max: 30,
    index: 0,
  },
  総作画監督: {
    required: false,
    max: 1,
    index: 0,
  },
  作画監督: {
    required: false,
    max: 30,
    index: 0,
  },
  メカ作画監督: {
    required: false,
    max: 30,
    index: 0,
  },
  メカ作画監督補佐: {
    required: false,
    max: 30,
    index: 0,
  },
  アヴァン総作画監督: {
    required: false,
    max: 30,
    index: 0,
  },
  副監督: {
    required: false,
    max: 30,
    index: 0,
  },
  "主・メカニックデザイン": {
    required: false,
    max: 30,
    index: 0,
  },
  コンセプトアートディレクター: {
    required: false,
    max: 30,
    index: 0,
  },
  キャラクターデザイン原案: {
    required: false,
    max: 30,
    index: 0,
  },
  キャラクターデザイン: {
    required: false,
    max: 30,
    index: 0,
  },
  メカニックデザイン: {
    required: false,
    max: 30,
    index: 0,
  },
  美術設定: {
    required: false,
    max: 30,
    index: 0,
  },
  原画: {
    required: false,
    max: 30,
    index: 0,
  },
  第二原画: {
    required: false,
    max: 30,
    index: 0,
  },
  デジタル作画修正: {
    required: false,
    max: 30,
    index: 0,
  },
  動画検査: {
    required: false,
    max: 30,
    index: 0,
  },
  動画: {
    required: false,
    max: 30,
    index: 0,
  },
  色彩設計: {
    required: false,
    max: 30,
    index: 0,
  },
  色指定検査: {
    required: false,
    max: 30,
    index: 0,
  },
  仕上げ検査補佐: {
    required: false,
    max: 30,
    index: 0,
  },
  仕上げ管理: {
    required: false,
    max: 30,
    index: 0,
  },
  仕上げ: {
    required: false,
    max: 30,
    index: 0,
  },
  仕上げ協力: {
    required: false,
    max: 30,
    index: 0,
  },
  "特殊効果/ブラシワーク": {
    required: false,
    max: 30,
    index: 0,
  },
  美術監督: {
    required: false,
    max: 30,
    index: 0,
  },
  美術: {
    required: false,
    max: 30,
    index: 0,
  },
  背景: {
    required: false,
    max: 30,
    index: 0,
  },
  美術2Dワークス: {
    required: false,
    max: 30,
    index: 0,
  },
  美術制作管理: {
    required: false,
    max: 30,
    index: 0,
  },
  美術制作コーディネーター: {
    required: false,
    max: 30,
    index: 0,
  },
  美術制作協力: {
    required: false,
    max: 30,
    index: 0,
  },
  "CGI/VFX": {
    required: false,
    max: 30,
    index: 0,
  },
  CGIアートディレクター: {
    required: false,
    max: 30,
    index: 0,
  },
  "2DCGIディレクター": {
    required: false,
    max: 30,
    index: 0,
  },
  "2DCGI・モーショングラフィックスデザイナー": {
    required: false,
    max: 30,
    index: 0,
  },
  モーショングラフィックスデザイナー: {
    required: false,
    max: 30,
    index: 0,
  },
  ビジュアルデベロップメント: {
    required: false,
    max: 30,
    index: 0,
  },
  CGI監督: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIアニメーションディレクター: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIモデリングディレクター: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIテクニカルディレクター: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIルックデヴディレクター: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIリードアニメーター: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIアニメーター: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIリードモデラー: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIモデラー: {
    required: false,
    max: 30,
    index: 0,
  },
  リードテクニカルアーティスト: {
    required: false,
    max: 30,
    index: 0,
  },
  テクニカルアーティスト: {
    required: false,
    max: 30,
    index: 0,
  },
  レンダリングアーティスト: {
    required: false,
    max: 30,
    index: 0,
  },
  CGIディベロップメント: {
    required: false,
    max: 30,
    index: 0,
  },
  プロダクションマネージャー: {
    required: false,
    max: 30,
    index: 0,
  },
  撮影監督: {
    required: false,
    max: 30,
    index: 0,
  },
  副撮影監督: {
    required: false,
    max: 30,
    index: 0,
  },
  撮影監督補佐: {
    required: false,
    max: 30,
    index: 0,
  },
  撮影: {
    required: false,
    max: 30,
    index: 0,
  },
  特技監督: {
    required: false,
    max: 30,
    index: 0,
  },
  特殊技術撮影: {
    required: false,
    max: 30,
    index: 0,
  },
  撮影管理: {
    required: false,
    max: 30,
    index: 0,
  },
  特技開発: {
    required: false,
    max: 30,
    index: 0,
  },
  コンポジットテクニカルアーティスト: {
    required: false,
    max: 30,
    index: 0,
  },
  セル画アナログ撮影: {
    required: false,
    max: 30,
    index: 0,
  },
  ラインテスト: {
    required: false,
    max: 30,
    index: 0,
  },
  名誉特技監督: {
    required: false,
    max: 30,
    index: 0,
  },
  編集: {
    required: false,
    max: 30,
    index: 0,
  },
  編集助手: {
    required: false,
    max: 30,
    index: 0,
  },
  声ノ出演: {
    required: false,
    max: 30,
    index: 0,
  },
  音楽: {
    required: false,
    max: 30,
    index: 0,
  },
  音響制作: {
    required: false,
    max: 30,
    index: 0,
  },
  音響効果: {
    required: false,
    max: 30,
    index: 0,
  },
  録音: {
    required: false,
    max: 30,
    index: 0,
  },
  台詞演出: {
    required: false,
    max: 30,
    index: 0,
  },
  台詞演出助手: {
    required: false,
    max: 30,
    index: 0,
  },
  音響効果助手: {
    required: false,
    max: 30,
    index: 0,
  },
  "音響制作・担当": {
    required: false,
    max: 30,
    index: 0,
  },
  台詞録音スタジオ: {
    required: false,
    max: 30,
    index: 0,
  },
  ダビングステージ: {
    required: false,
    max: 30,
    index: 0,
  },
  スタジオエンジニア: {
    required: false,
    max: 30,
    index: 0,
  },
  テクニカルサポート: {
    required: false,
    max: 30,
    index: 0,
  },
  制作: {
    required: false,
    max: 30,
    index: 0,
  },
  制作統括プロデューサー: {
    required: false,
    max: 30,
    index: 0,
  },
  アニメーションプロデューサー: {
    required: false,
    max: 30,
    index: 0,
  },
  設定制作: {
    required: false,
    max: 30,
    index: 0,
  },
  制作進行: {
    required: false,
    max: 30,
    index: 0,
  },
  リテイク管理: {
    required: false,
    max: 30,
    index: 0,
  },
  プリヴィズ制作: {
    required: false,
    max: 30,
    index: 0,
  },
  制作進行補佐: {
    required: false,
    max: 30,
    index: 0,
  },
  スタジオマネジメント: {
    required: false,
    max: 30,
    index: 0,
  },
  コーポレートマネジメント: {
    required: false,
    max: 30,
    index: 0,
  },
  システムマネジメント: {
    required: false,
    max: 30,
    index: 0,
  },
  社長室マネジメント: {
    required: false,
    max: 30,
    index: 0,
  },
  車両協力: {
    required: false,
    max: 30,
    index: 0,
  },
  制作協力: {
    required: false,
    max: 30,
    index: 0,
  },
  機材協力: {
    required: false,
    max: 30,
    index: 0,
  },
  画面協力: {
    required: false,
    max: 30,
    index: 0,
  },
  音響協力: {
    required: false,
    max: 30,
    index: 0,
  },
  アーカイブ協力: {
    required: false,
    max: 30,
    index: 0,
  },
  "取材・考証協力": {
    required: false,
    max: 30,
    index: 0,
  },
  ロケーション協力: {
    required: false,
    max: 30,
    index: 0,
  },
  協力: {
    required: false,
    max: 30,
    index: 0,
  },
  製作: {
    required: false,
    max: 30,
    index: 0,
  },
  "エグゼクティブ・プロデューサー": {
    required: false,
    max: 1,
    index: 0,
  },
  監督: {
    required: true,
    max: 30,
    index: 0,
  },
  総監督: {
    required: true,
    max: 1,
    index: 100,
  },
};

// ランダムな順番でrolesをマージする
const mergeRoles = (...objects: Roles[]) => {
  const shuffledObjects = objects.sort(() => Math.random() - 0.5);

  const mergedObject: Roles = Object.assign({}, ...shuffledObjects);

  return mergedObject;
};

// 役職をカテゴリー別に分類
const roleCategories = {
  // 必須の基本役職（80%の確率で全て含む）
  core: ["企画・原作・脚本", "監督", "総監督"],
  // アニメーション関連（90%の確率で含む）
  animation: [
    "総作画監督",
    "作画監督",
    "キャラクターデザイン",
    "原画",
    "第二原画",
    "動画検査",
    "動画",
  ],
  // 色彩・美術関連（80%の確率で含む）
  artAndColor: [
    "色彩設計",
    "色指定検査",
    "仕上げ検査補佐",
    "仕上げ",
    "美術監督",
    "美術設定",
    "背景",
  ],
  // CGI関連（50%の確率で含む）
  cgi: [
    "CGI監督",
    "CGIアニメーター",
    "CGIモデラー",
    "2DCGI・モーショングラフィックスデザイナー",
  ],
  // 撮影関連（70%の確率で含む）
  photography: ["撮影監督", "撮影", "撮影管理", "編集", "編集助手"],
  // 音響・音楽関連（85%の確率で含む）
  sound: [
    "音楽",
    "音響制作",
    "音響効果",
    "録音",
    "台詞演出",
    "声ノ出演",
  ],
  // 制作関連（90%の確率で含む）
  production: [
    "制作",
    "制作統括プロデューサー",
    "アニメーションプロデューサー",
    "制作進行",
    "エグゼクティブ・プロデューサー",
  ],
  // 特殊技術（30%の確率で含む）
  specialTech: [
    "画コンテ",
    "メカニックデザイン",
    "メカ作画監督",
    "特殊効果/ブラシワーク",
    "特技監督",
  ],
};

export const generateRoleStaff = () => {
  const staffs: Staffs = [];
  const roles = EVANGELIONRole;

  // 役職ごとの適切な人数範囲を定義
  const staffCountRanges: { [key: string]: { min: number; max: number } } = {
    // コアスタッフ（少数）
    "監督": { min: 1, max: 1 },
    "総監督": { min: 1, max: 1 },
    "企画・原作・脚本": { min: 1, max: 3 },
    "エグゼクティブ・プロデューサー": { min: 1, max: 3 },

    // デザイン・監督系（少数〜中規模）
    "キャラクターデザイン": { min: 1, max: 3 },
    "キャラクターデザイン原案": { min: 1, max: 2 },
    "メカニックデザイン": { min: 2, max: 8 },
    "主・メカニックデザイン": { min: 1, max: 3 },
    "美術設定": { min: 2, max: 6 },
    "総作画監督": { min: 1, max: 3 },
    "作画監督": { min: 3, max: 12 },
    "メカ作画監督": { min: 2, max: 8 },
    "画コンテ": { min: 2, max: 8 },

    // 大規模スタッフ（アニメーション）
    "原画": { min: 20, max: 50 },
    "第二原画": { min: 15, max: 35 },
    "動画": { min: 25, max: 60 },
    "動画検査": { min: 5, max: 15 },

    // 色彩・仕上げ系（中〜大規模）
    "色彩設計": { min: 1, max: 3 },
    "色指定検査": { min: 3, max: 8 },
    "仕上げ": { min: 20, max: 45 },
    "仕上げ検査補佐": { min: 3, max: 10 },
    "仕上げ管理": { min: 2, max: 6 },
    "仕上げ協力": { min: 5, max: 15 },

    // 美術系（中規模）
    "美術監督": { min: 1, max: 3 },
    "美術": { min: 8, max: 20 },
    "背景": { min: 15, max: 35 },
    "美術2Dワークス": { min: 5, max: 15 },
    "美術制作管理": { min: 2, max: 6 },

    // CGI系（中〜大規模）
    "CGI監督": { min: 1, max: 3 },
    "CGIアニメーター": { min: 10, max: 25 },
    "CGIモデラー": { min: 8, max: 20 },
    "CGIアートディレクター": { min: 1, max: 3 },
    "2DCGI・モーショングラフィックスデザイナー": { min: 5, max: 15 },
    "レンダリングアーティスト": { min: 5, max: 12 },
    "テクニカルアーティスト": { min: 3, max: 10 },

    // 撮影系（中規模）
    "撮影監督": { min: 1, max: 3 },
    "撮影": { min: 10, max: 25 },
    "撮影管理": { min: 2, max: 6 },
    "特技監督": { min: 1, max: 3 },
    "編集": { min: 2, max: 5 },
    "編集助手": { min: 3, max: 8 },

    // 音響・音楽系
    "声ノ出演": { min: 12, max: 30 },
    "音楽": { min: 1, max: 3 },
    "音響制作": { min: 2, max: 5 },
    "音響効果": { min: 3, max: 8 },
    "録音": { min: 2, max: 6 },
    "台詞演出": { min: 1, max: 3 },

    // 制作系（中規模）
    "制作": { min: 3, max: 8 },
    "制作統括プロデューサー": { min: 1, max: 3 },
    "アニメーションプロデューサー": { min: 2, max: 6 },
    "制作進行": { min: 8, max: 20 },
    "制作進行補佐": { min: 5, max: 12 },
  };

  // 役職を追加する関数
  const addRole = (roleKey: keyof typeof EVANGELIONRole, customMin?: number, customMax?: number) => {
    const role = roles[roleKey];
    if (!role) return;

    const range = staffCountRanges[roleKey] || { min: 1, max: 5 };
    const min = customMin !== undefined ? customMin : range.min;
    const max = customMax !== undefined ? customMax : range.max;

    const memberCount = Math.floor(Math.random() * (max - min + 1)) + min;
    const members = generateNames(memberCount);

    staffs.push({
      role: roleKey,
      members,
    });
  };

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
        addRole(roleKey as keyof typeof EVANGELIONRole);
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
        addRole(roleKey as keyof typeof EVANGELIONRole);
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
        addRole(roleKey as keyof typeof EVANGELIONRole);
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
        addRole(roleKey as keyof typeof EVANGELIONRole);
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
        addRole(roleKey as keyof typeof EVANGELIONRole);
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
        addRole(roleKey as keyof typeof EVANGELIONRole);
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
        addRole(roleKey as keyof typeof EVANGELIONRole);
      }
    });
  }

  // 企業・組織セクションを追加（80%の確率で多めに）
  if (Math.random() < 0.8) {
    // 製作委員会（80%の確率）
    if (Math.random() < 0.8) {
      const committeeCount = Math.floor(Math.random() * 8) + 5; // 5-12社
      const companies = [];
      for (let i = 0; i < committeeCount; i++) {
        companies.push(generateCompanyName("committee"));
      }
      staffs.push({
        role: "製作",
        members: companies,
      });
    }

    // 制作協力（70%の確率）
    if (Math.random() < 0.7) {
      const cooperationCount = Math.floor(Math.random() * 6) + 3; // 3-8社
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
      { role: "機材協力", probability: 0.6, min: 2, max: 6 },
      { role: "音響協力", probability: 0.5, min: 1, max: 4 },
      { role: "取材・考証協力", probability: 0.4, min: 2, max: 5 },
      { role: "ロケーション協力", probability: 0.3, min: 1, max: 4 },
      { role: "協力", probability: 0.6, min: 3, max: 8 },
    ];

    cooperationTypes.forEach(({ role, probability, min, max }) => {
      if (Math.random() < probability && role in roles) {
        const count = Math.floor(Math.random() * (max - min + 1)) + min;
        const companies = [];
        for (let i = 0; i < count; i++) {
          companies.push(generateCompanyName("general"));
        }
        staffs.push({
          role: role as keyof typeof EVANGELIONRole,
          members: companies,
        });
      }
    });
  }

  // Special Thanks（40%の確率で多めに）
  if (Math.random() < 0.4) {
    const thanksCount = Math.floor(Math.random() * 20) + 15; // 15-34人
    const people = generateNames(thanksCount);
    staffs.push({
      role: "協力",
      members: people,
    });
  }

  // index順でソート
  const sortedStaffs = staffs.sort((a, b) => {
    const aIndex = roles[a.role].index;
    const bIndex = roles[b.role].index;
    return aIndex - bIndex;
  });

  return sortedStaffs;
};
