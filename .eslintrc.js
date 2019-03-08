module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    'arrow-parens': 0, // 箭头函数只有一个参数的时候，必须加括号
    'no-multiple-empty-lines': 0, // 禁止出现多行的连续空行
    'generator-star-spacing': 0, // generator 的 * 前面禁止有空格，后面必须有空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0, // function 的小括号之前必须要有空格
    'no-unneeded-ternary': 0, // 关闭 三目检测
    'indent': [ // 换行 4个空格
        'error',
        4
      ],
      'eol-last': 0, // 不检测文件末尾有空行
      'no-var': ['error'], // 禁止 var 声明
      'prefer-const': ['error'], // 申明后不再被修改的变量必须使用 const 来申明
      'semi': ['error', 'always'], // 分号结尾
      'comma-dangle': ['error', 'always'], // 对象的最后一个属性末尾必须有逗号
  }
}
