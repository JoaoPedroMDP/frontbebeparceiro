module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/valid-v-slot': 'off',
  },
}
