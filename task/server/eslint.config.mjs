import eslintNestJs from '@darraghor/eslint-plugin-nestjs-typed';
import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintNestJs.configs.flatRecommended,
  {
    languageOptions: {
      parser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        NodeJS: true,
        process: true,
        jest: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      'nestjs-typed': eslintNestJs,
    },
    settings: {
      'nestjs-typed/filterFromPaths': ['src/**/*.ts'],
    },
    rules: {
      // Nest Swagger rules
      '@darraghor/nestjs-typed/api-property-matches-property-optionality': 'off',
      '@darraghor/nestjs-typed/controllers-should-supply-api-tags': 'off',
      '@darraghor/nestjs-typed/api-method-should-specify-api-response': 'off',
      '@darraghor/nestjs-typed/api-method-should-specify-api-operation': 'off',
      '@darraghor/nestjs-typed/api-enum-property-best-practices': 'off',
      '@darraghor/nestjs-typed/api-property-returning-array-should-set-array': 'off',

      // Preventing bugs
      '@darraghor/nestjs-typed/all-properties-are-whitelisted': 'off',
      '@darraghor/nestjs-typed/all-properties-have-explicit-defined': 'off',
      '@darraghor/nestjs-typed/should-specify-forbid-unknown-values': 'off',

      // We had to disable the rule because it was crashing the ESLint process instead of
      // reporting a standard validation error.
      '@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator': 'off',

      '@typescript-eslint/no-explicit-any': 'off',
      complexity: ['error', { max: 10 }],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'max-lines-per-function': ['error', { max: 100 }],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '@nestjs/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': 'error',
    },

    ignores: ['dist/**', 'node_modules/**'],
  },
);
