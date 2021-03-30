module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  modulePathIgnorePatterns: [
    '<rootDir>/cli/file-templates/*/*'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    '**/src/**/*.spec.[jt]s?(x)'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
};
