module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'next/core-web-vitals',
    ],

    plugins: ['unused-imports', 'react-hooks', 'jsx-a11y'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'unused-imports/no-unused-imports-ts': 2,
    },
    ignorePatterns: ['node_modules/'],
};
