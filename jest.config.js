module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/cypress'],
    moduleNameMapper: {
        '@pages/(.*)': ['<rootDir>/src/pages/$1'],
        '@packages/(.*)': ['<rootDir>/src/packages/$1'],
        '@app/(.*)': ['<rootDir>/src/app/$1'],
        '@features/(.*)': ['<rootDir>/src/features/$1'],
    },
};
