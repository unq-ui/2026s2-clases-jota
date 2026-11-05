import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Punto y coma obligatorio
      'semi': ['error', 'always'],

      // Estilos y formato
      'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'jsx-quotes': ['warn', 'prefer-double'],
      'eol-last': ['error', 'always'],
      'indent': ['error', 2],
      'comma-dangle': ['warn', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],

      // Variables y constantes
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'prefer-const': 'warn',
      'no-var': 'error',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',

      // Buenas prácticas
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'object-shorthand': 'warn',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])
