module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true
  },
  globals: { '_': true, 'dayjs': true, '$': true, 'jQuery': true, 'echarts': true, 'Echarts': true },
  extends: ['plugin:vue/strongly-recommended'],
  rules: {
    'prefer-const': 2,
    'no-const-assign': 2,
    'no-var': 2,
    'no-tabs': 0,
    'no-unused-vars': 0,
    'no-return-assign': 0,
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 0,
    'vue/max-attributes-per-line': [
      // 配置成可允许一行attribute跟着标签
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

