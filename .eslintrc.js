module.exports = {
  extends: ['nicenice'],
  settings: {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src',
          '.'
        ]
      }
    }
  }
}
