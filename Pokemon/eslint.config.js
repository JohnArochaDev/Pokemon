import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            'indent': ['error', 4], // Enforce consistent indentation
            'no-unexpected-multiline': 'error', // Prevent unexpected multiline expressions
            'no-sparse-arrays': 'error', // Disallow sparse arrays
            'no-unreachable': 'error', // Disallow unreachable code
            'no-duplicate-case': 'error', // Disallow duplicate case labels
            'no-extra-semi': 'error', // Disallow unnecessary semicolons
            'no-func-assign': 'error', // Disallow reassigning function declarations
            'no-obj-calls': 'error', // Disallow calling global object properties as functions
            'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
            'react/jsx-uses-react': 'error', // Prevent React to be incorrectly marked as unused
            'react/jsx-uses-vars': 'error', // Prevent variables used in JSX to be incorrectly marked as unused
            'react-hooks/rules-of-hooks': 'error', // Enforce the Rules of Hooks
            'react-hooks/exhaustive-deps': 'warn', // Verify the list of dependencies for Hooks
        },
    },
];