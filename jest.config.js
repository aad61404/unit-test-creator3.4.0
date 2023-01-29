module.exports = {
  preset: 'ts-jest/presets/default-esm', // 重要
  rootDir: './',         // 测试文件所在的目录
  testEnvironment: 'jsdom', // 需要；因为目前引擎依赖一点 DOM 环境
  testRegex: [String.raw`test[\/\\].*\.(test)?\.(ts|tsx)$`], // 这个路径看你自己的安排
  setupFiles: [
      './test/TestSuite/Setup.ts', // 需要在这里做一些事情，见下
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'jsx'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
      CC_DEV: true,
      CC_TEST: true,
      ENGINE_LOCATION: String.raw`C:\\CocosDashboard_1.2.3\\resources\\.editors\\Creator\\3.4.0\\resources\\resources\\3d\\engine`, // 替换成你引擎的位置
      'ts-jest': {
          useESM: true, // 重要
          tsconfig: 'tsconfig.json', // 这个可选了，看你安排
          /* Fails on mapped import syntax without this.*/
          diagnostics: false,
      },
  },
  moduleNameMapper: {
      '^cc$': '<rootDir>/test/TestSuite/EngineModuleMocks/cc.ts', // 重要，文件内容见下
      '^cc/env$': '<rootDir>/test/TestSuite/EngineModuleMocks/cc/env.ts', // 重要，文件内容见下
      '^(\\.{1,2}/.*)\\.js$': '$1', // 重要，见 https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
  },
};
