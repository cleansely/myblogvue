module.exports = {
  root: true,
  env: {
    browser: true,
    jquery: true
  },
  rules: {
    // 强制有分号
    semi: ['error', 'always'],
    // 逗号
    "comma-dangle": [0, "never"],
    //函数定义时括号前面要不要有空格
    'space-before-function-paren': [0, 'always'],
    // 单引号
    quotes: [2, 'single'],
    //this别名
    'consistent-this': [2, 'that'],
    //强制驼峰法命名
    camelcase: 2,
    //禁止在使用new构造一个实例后不赋值
    'no-new': 0,
    // 生成器函数*的前后空格
    'generator-star-spacing': 0,
    // 生产环境禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off'
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  jquery: true
};