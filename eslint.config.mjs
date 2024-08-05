import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
  {
    env: {
      browser: true, // Adjust based on your project
      node: true, // Adjust based on your project
      es2021: true
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module' // For modern JavaScript modules
    },
    rules: {
      // Add or modify rules as needed
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'warn',
      'linebreak-style': ['error', 'unix'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }] // For React projects
    }
  }
];