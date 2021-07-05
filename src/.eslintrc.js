module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript', 'prettier'],
  plugins: ['prettier', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          tsx: true
      }
  },
  env: {
      // 你的环境变量（包含多个预定义的全局变量）
      //
      browser: true,
      node: true,
      es6: true,
      mocha: true,
      jest: true,
      jasmine: true,
  },
  settings: {
      'import/resolver': {
          alias: {
              map: [['@', './src']],
              extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
          }
      }
  },
  globals: {
      // 你的全局变量（设置为 false 表示它不允许被重新赋值）
      //
      // myGlobal: false
  },
  rules: {
      // 自定义你的规则
      // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': 'error',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/component-tags-order': [
          'error',
          {
              order: ['template', 'script', 'style']
          }
      ]
  }
};