module.exports = [
  ['demo-code', {
      jsLibs: [
          'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
      ],
      cssLibs: [
          'https://unpkg.com/animate.css@3.7.0/animate.min.css',
      ],
      showText: 'show code',
      hideText: 'hide',
      styleStr: 'text-decoration: underline;',
      minHeight: 200,
      onlineBtns: {
          codepen: true,
          jsfiddle: true,
          codesandbox: true,
      },
      codesandbox: {
          deps: { 'lodash': 'latest' },
          json: '',
          query: '',
          embed: '',
      },
      demoCodeMark: 'demo-code',
  }]
]