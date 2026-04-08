// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    // Replacement for globalIgnores
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  // Storybook Plugin
  {
    files: ["**/*.stories.ts", "**/*.stories.tsx"],
    ...storybook.configs["flat/recommended"],
  },
  // Disable ReactJS Rules for Storybook Configuration Files
  {
    files: [".storybook/**/*.ts", ".storybook/**/*.tsx"],
    rules: {
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
