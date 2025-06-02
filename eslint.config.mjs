import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.plugins("sonarjs"),
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:react/recommended"),
  ...compat.config({
    rules: {
      "@typescript-eslint/no-namespace": 'off',
      "no-console": ["warn", { allow: ["error"] }],
      "react/react-in-jsx-scope": 'off',
      'sonarjs/cognitive-complexity': ['error', 5],
      'react/jsx-max-depth': ['warn', { max: 4 }],
      'max-lines-per-function': ['warn', { max: 60, skipBlankLines: true, skipComments: true }],
    }
  })
];

export default eslintConfig;
