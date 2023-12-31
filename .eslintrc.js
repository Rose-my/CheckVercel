module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'eol-last': ['error', 'always'], // line의 가장 마지막 줄에는 개행 넣기
    'simple-import-sort/imports': 'error', // import 정렬
    'no-multi-spaces': 'error', // 스페이스 여러개 금지
    'object-curly-spacing': ['error', 'always'], // 객체 괄호 앞 뒤 공백 추가"
    quotes: ['off', 'single'], // 쌍따옴표가 아닌 홑따옴표를 사용
    indent: ['off', 2, { SwitchCase: 1 }],
    'space-in-parens': ['error', 'never'], // 일반 괄호 앞 뒤 공백 추가,
    'computed-property-spacing': ['error', 'never'], // 대괄호 앞 뒤 공백 추가하지 않음,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  },
};
