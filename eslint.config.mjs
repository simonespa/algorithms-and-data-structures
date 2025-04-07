import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import jestPlugin from 'eslint-plugin-jest';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: [
      ".git",
      ".github",
      ".coverage",
      ".jest",
      ".vscode",
      "node_modules"
    ],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser
    }
  },
  {
    plugins: {
      tsPlugin,
      jestPlugin
    },
    rules: {
      "eqeqeq": "error"
    }
  }
];
