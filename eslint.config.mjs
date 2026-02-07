import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "react/display-name": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/purity": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/set-state-in-effect": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
