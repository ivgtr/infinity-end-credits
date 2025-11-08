export type EasterEggType =
  | "famous_director"    // 有名監督
  | "funny_role"         // 面白い架空の役職
  | "same_name"          // 全員同じ名前
  | null;

export type Credit = {
  id: number;
  title: string;
  names: string[];
  role: string;
  easterEgg?: EasterEggType;
};

export type Credits = {
  [key: string]: Credit[];
};
