import { useMemo } from "react";

export interface ColorTheme {
  primary: string;
  secondary: string;
  name: string;
}

// 複数の色彩テーマを定義（エヴァンゲリオン風 + 映画的なテーマ）
const COLOR_THEMES: ColorTheme[] = [
  {
    name: "Deep Purple Night",
    primary: "#1a0033",
    secondary: "#330066",
  },
  {
    name: "Eva Purple",
    primary: "#2d0a4e",
    secondary: "#8b00ff",
  },
  {
    name: "Crimson Dusk",
    primary: "#330000",
    secondary: "#660033",
  },
  {
    name: "Ocean Depth",
    primary: "#001a33",
    secondary: "#003366",
  },
  {
    name: "Neon Orange",
    primary: "#331a00",
    secondary: "#ff6600",
  },
  {
    name: "Emerald Night",
    primary: "#001a0d",
    secondary: "#004d33",
  },
  {
    name: "Royal Blue",
    primary: "#0a0a33",
    secondary: "#1a1a66",
  },
  {
    name: "Sunset Red",
    primary: "#330d0d",
    secondary: "#cc3333",
  },
];

export const useColorTheme = (workCount: number): ColorTheme => {
  const theme = useMemo(() => {
    // 作品数に応じてテーマを循環的に選択
    const index = workCount % COLOR_THEMES.length;
    return COLOR_THEMES[index];
  }, [workCount]);

  return theme;
};
