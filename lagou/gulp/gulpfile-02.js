const fs = require('fs');
const { Transform } = require('stream');

exports.default = () => {
  // 读取文件流
  const read = fs.createReadStream('normalize.css');
  // 写入文件流
  const write = fs.createWriteStream('normalize.min.css');

  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 读取到的文件转换成字符串
      const input = chunk.toString();
      // 将读取到的字符串中的空格和注释全部都删掉
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\//g, '');
      // 结束文件流，callback 是错误优先的，如果没有错误处理的话第一个参数传null也可以
      callback(null, output);
    }
  })

  // 先转换，再写入
  read.pipe(transform).pipe(write);

  return read;
}