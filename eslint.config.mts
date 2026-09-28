import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";
import { scss } from "@humanwhocodes/scsstree";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.scss"],
    plugins: { css },
    language: "css/css",
    languageOptions: {
      customSyntax: scss,
    },
    rules: {
      "css/no-empty-blocks": "error",
    },
  },
  eslintConfigPrettier,
  globalIgnores([
    "package-lock.json",
    "dist/",
    ".angular/",
    ".git/",
    "node_modules/",
    "public/",
    "tsconfig.*",
  ]),
]);
