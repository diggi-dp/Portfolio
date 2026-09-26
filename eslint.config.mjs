import nextWebVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".cache/**",
      ".kilo/**",
      "package-lock.json",
      "public/**",
      "node_modules/**",
      "next-env.d.ts",
      "next.config.mjs",
      "yarn.lock",
    ],
  },
  ...nextWebVitals,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "react-hooks/purity": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/use-memo": "off",
      "react-hooks/static-components": "off",
      "react-hooks/immutability": "off",
    },
  },
];

export default eslintConfig;
