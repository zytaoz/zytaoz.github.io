const path = require('path');

class myPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('myPlugin', compilation => {
      // Compilation 就是当前打包用到的所有文件名字，如果读出来他就需要对他进行遍历
      for (const name in compilation.assets) {
        if (Object.hasOwnProperty.call(compilation.assets, name)) {
          const element = compilation.assets[name];
          // 使用 source() 方法获取到所有文件中的值
          const nowSource = element.source();
          // 真对值进行加工
          const newData = nowSource.replace(/\/\*\*+\*\//g, '');
          // 把加工后的值覆写进初始值
          compilation.assets[name] = {
            source: () => newData,
            size: () => newData.length
          }
        }
      }
    })
  }
}

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  module : {
    rules: [
      {
        test: /.md$/,
        use: [
          'html-loader',
          './markdown-loader.js'
        ]
      }
    ]
  },
  plugins: [
    new myPlugin()
  ]
}