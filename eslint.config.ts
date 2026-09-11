// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
    globalIgnores(['dist']),
    i18next.configs['flat/recommended'],
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            storybook.configs['flat/recommended'],
        ],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {},
        ignores: [
            "node_modules/",
            "dist/",
            "build/",
            "*.json",
            "*.lock",
            "*.config.js",
            "*.config.ts",
            "*.md",
            "*.yml",
            "*.yaml",
        ]
    },
    // storybook
    {
        files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
        rules: {
            'i18next/no-literal-string': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'import/no-anonymous-default-export': 'off',
        },
    },
    // Отключить перевод в тестах
    {
        files: ['**/*.test.{ts,tsx}',],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    },
])
