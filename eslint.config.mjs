import vue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

const style = {
    'plugins': {
        '@stylistic': stylistic,
        '@stylistic/js': stylistic,
        '@stylistic/ts': stylistic,
    },
    'rules': {
        // Formatting
        '@stylistic/array-bracket-newline': [ 'error', { 'multiline': true, 'minItems': 4 } ],
        '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
        '@stylistic/array-element-newline': [ 'error', { 'multiline': true, 'minItems': 4 } ],
        '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
        '@stylistic/arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
        '@stylistic/block-spacing': [ 'error', 'always' ],
        '@stylistic/brace-style': [ 'error', '1tbs' ],
        '@stylistic/comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        '@stylistic/comma-style': [ 'error', 'last' ],
        '@stylistic/dot-location': [ 'error', 'property' ],
        '@stylistic/eol-last': [ 'error', 'always' ],
        '@stylistic/function-call-spacing': [ 'error', 'never' ],
        '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
        '@stylistic/indent': [ 'error', 4 ],
        '@stylistic/key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
        '@stylistic/keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
        '@stylistic/lines-between-class-members': [ 'error', 'always' ],
        '@stylistic/new-parens': [ 'error', 'always' ],
        '@stylistic/no-extra-parens': [ 'error', 'all' ],
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-floating-decimal': 'error',
        '@stylistic/no-mixed-operators': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/object-curly-newline': [ 'error', { 'multiline': true, 'minProperties': 3 } ],
        '@stylistic/object-curly-spacing': [ 'error', 'always' ],
        '@stylistic/one-var-declaration-per-line': 'error',
        '@stylistic/quote-props': [ 'error', 'always' ],
        '@stylistic/quotes': [ 'error', 'single' ],
        '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
        '@stylistic/semi': [ 'error', 'always' ],
        '@stylistic/semi-spacing': [ 'error', { 'before': false, 'after': true } ],
        '@stylistic/semi-style': [ 'error', 'last' ],
        '@stylistic/space-before-blocks': [ 'error', 'always' ],
        '@stylistic/space-before-function-paren': [ 'error', 'always' ],
        '@stylistic/space-in-parens': [ 'error', 'always' ],
        '@stylistic/space-infix-ops': [ 'error', { 'int32Hint': false } ],
        '@stylistic/space-unary-ops': 'error',
        '@stylistic/spaced-comment': [ 'error', 'always' ],
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/template-curly-spacing': [ 'error', 'always' ],
        '@stylistic/wrap-iife': [ 'error', 'inside' ],
        '@stylistic/wrap-regex': 'error',
        '@stylistic/ts/type-annotation-spacing': 'error',
    }
};

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    // Base JavaScript rules
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    style,

    // TypeScript support
    // {
    //     files: ['**/*.ts', '**/*.tsx'],
    //     languageOptions: {
    //         parser: parserTs,
    //         parserOptions: {
    //             ecmaVersion: 'latest',
    //             sourceType: 'module',
    //             project: './tsconfig.json',
    //             ecmaFeatures: {
    //                 jsx: true,
    //             },
    //         },
    //     },
    //     plugins: {
    //         '@typescript-eslint': typescript,
    //     },
    //     rules: {
    //         ...typescript.configs.recommended.rules,
    //         ...style.rules,
    //     },
    // },

    // Vue support (including TS and JSX inside SFCs)
    {
        'files': [ '**/*.vue' ],
        'extends': [ 'plugin: vue/recommended' ],
        'plugins': {
            'vue-eslint-parser': vue,
            '@typescript-eslint': typescript,
        },
        'rules': {
            ...typescript.configs.recommended.rules,
            ...style.rules,

            // You can override any Vue or TS rules here
            'vue/html-indent': [ 'error', 4 ],
            'vue/html-comment-indent': [ 'error', 4 ],
            'vue/script-indent': [ 'error', 4 ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    'singleline': 3,
                    'multiline': { 'max': 1, 'allowFirstLine': false },
                }
            ],
        },
    },
);
