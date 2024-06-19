module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended' // Gunakan vue3-recommended untuk Vue 3, atau vue/recommended untuk Vue 2
    ],
    rules: {
        // Aturan tambahan disini
        'vue/no-unused-components': 'warn',
        'vue/no-multiple-template-root': 'error',
        'vue/html-closing-bracket-newline': ['error', {
          'singleline': 'never',
          'multiline': 'always'
        }]
      },
  };
  