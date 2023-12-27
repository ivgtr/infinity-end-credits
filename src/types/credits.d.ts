export type Credit = {
  id: number;
  title: string;
  names: string[];
  role: string;
};

export type Credits = {
  [key: string]: Credit[];
};
