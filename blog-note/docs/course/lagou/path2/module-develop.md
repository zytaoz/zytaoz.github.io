# 模块化开发

::: tip 写在前面
其实就我来说入行并不算晚，15年底，应该算是刚好踏上了移动互联网爆发的时间点（不然也找不到工作吧），但是后续一直在这家公司确实耽误了很多（技能方面）。就拿这个模块化开发的概念来说，其实在很早很早之前就有这方面的概念了，但是学习能力比较差，因为学历低（中专），且是电工转行，接触不到除公司之外其他任何的技术人员，自己的性格又不喜欢和陌生人聊天。导致自己进入了一个封闭的学习状态，封装了很多现在看起来基本就是垃圾的模块和功能库（对比一下老师讲的内容其实一直都在第一阶段来回徘徊）。现在回想起来，也不知道应该庆幸（发现了问题）还是应该可悲（用了太长时间才发现）。
:::

## 演化过程
> 模块化开发其实就是一个思想，他的实现方式是多种多样的。且从一开始到现在是有一个循序渐进的演化过程的。

### 1. 文件划分的方式
就是最原始的把某个功能或者模块放到某个文件里面去，然后口头约定来实现模块化。
**缺点**
- 会污染全局作用域
- 会有命名冲突
- 模块之间没有从属关系无法管理依赖

### 2. 命名空间的方式
相较于第一种方式，这种方式仅仅只是把一个文件里面的方法都放到一个对象下面而已，仅仅只是小范围的解决了第一种方法的命名冲突问题。

### 3. IIFE
立即执行函数，相较于第一第二种方法，立即执行函数实现了命名空间。但他的方式依然是非常的刀耕火种。
```js
(function($){
  var num = 100;
  $('body').addClass('hidden');
})(jQuery);
```

> 我自己对模块化的探索也就仅仅到此为止了。

## 崭露头角
### CommonJS
`nodejs` 的 `commonjs` 规范才算是能真正称得上模块化开发的一种开发方式。

- 他一个文件就是一个模块
- 每个模块都有自己的独立作用域
- 他通过 `module.exports` 导出成员
- 然后通过 `require` 函数载入函数

但是 `commonjs` 加载模块的方式是使用同步加载的，在 `nodejs` 中没有什么问题，却并不适用于浏览器环境。

### AMD (Asynchronous Module Definition)
一个适用于浏览器环境的 **异步模块化开发标准**，代表作就是 `Require.js`。他可以解决上面没有解决的命名空间和依赖管理的问题。

定义一个模块的时候，他接受三个参数
- 第一个参数是一个字符串，为当前模块的名字
- 第二个参数是一个数组，为需要加载的模块
- 第三个参数是一个函数，函数内的参数分别对应第二个参数加载的模块
```js
define('module1', ['jquery', 'lodash'], function($, _) {
  var a = 100;
  return {
    handleBtn: function() {
      $('body').addClass('hidden');
    }
  }
});
```

使用一个 `AMD` 模块。
- 第一个参数是数组，为想要加载的模块
- 第二个参数是函数，函数的参数对应加载的模块
```js
require(['module1'], function('module1') {
  module1.handleBtn();
})
```
`AMD` 可以实现模块化标准，但是使用起来还是麻烦的，因为除了业务代码之外，还要去写一堆模块化标准的代码。

## 最佳实践
这里没啥好说的了，因为就是一直都在用的。
- 浏览器环境就是 `ES Modules` 规范
- `nodejs` 环境就是 `commonjs` 规范

### `ES Modules`
基本上现代浏览器都原生支持 `ES Modules` 规范了。

**特性**
- 他会自动启用严格模式，哪怕没有定义 `use strict` 也会自动启用。
- 每个模块都有自己独立的作用域。
- `ES Modules` 是通过 `CORS` 去请求外链的，所以要求服务端设置不跨域，否则会出现跨域报错。
- `ES Modules` 引入的 `script` 标签会延迟执行。

基础的导入导出语法没有什么好记的，都是一些经常用的基础语法，但是有一点之前不了解的地方。

#### 大括号语法
下面这里的导入 `b` 并不是导入一个对象，导出 `a` 也不是导出一个对象，这里的大括号是标准的语法，并不是 `es6` 的解构语法。
```js
import { b } from './modules-b.js';

const a = 100;

export {
  a
}
```

#### default
之前一直都理解错误，认为 `export` 的时候要么导出大括号，要么导出 `default`，其实两者是可以共存的，`default` 只是提供一个默认的选项而已。
```js
// 模块 a
const a = 100;
const b = 200;

export default a;

export {
  b
};
```
引用
```js
// 模块 b
import a, { b } from './modules-a.js';
```

#### 中继转发
在做大型项目的时候，一个目录下可能会有很多个模块文件同时存在，这时候可以可以使用一个 `index.js` 作为中继文件转发出当前目录下的所有文件，那样在引用这个目录下的模块的时候就不用去一个个找文件了。

#### 直接导出
还可以直接把导出的文件导出出去
```js
export { moduelsA } from './modules-a.js';
```

#### 执行，但是不引用
```js
import {} from './modules-a.js';

// 或者 

import './modules-a.js';
```

#### 在文件中间导入模块
通常情况下，`import` 只能在文件的最顶部使用，但是也有个别的情况需要在代码内部进行引入，如需要执行判断后再使用的情况，这时候就可以使用 `import` 函数去引用模块。引入的模块他会返回一个 `Promise`，所以可以使用 `.then` 方法去接受模块加载回来的结果。
```js
if (true) {
  import('./modules-a.js').then(modulesa => {
    console.log(modulesa);
  })
}
```

## 低版本兼容性处理

### IE 
`ie` 不支持 `ES Module` 语法，这里可以使用第三方的 `polyfill`。

- [browser-es-module-loader](https://github.com/ModuleLoader/browser-es-module-loader)
- [promise-polyfill](https://github.com/taylorhakes/promise-polyfill)

#### nomodule
```html
<script nomodule>
  alert('这里面的代码只会在不支持 ES module 的浏览器里面执行');
</script>
```

## 在 nodejs 中使用 ES Module 语法
`nodejs` 中已经可以使用 `ES Module` 语法了，只是目前还是处于试验状态，他使用起来和在浏览器环境中有一些小区别。
- 因为目前是试验属性，所以后缀要改成 `.mjs`。
- 可以在代码中间的位置使用 `import` 语法引入模块，浏览器中只能使用 `import()` 函数。
- 在使用`nodejs`的第三方模块的时候，除非第三方模块特别声明了，否则是不能使用 `{}` 提取的方式去提取模块中的内置成员，因为 `nodejs` 的第三方组件库一般都是直接导出一个对象。但是 `nodejs` 的官方模块做了这方面的处理，可以使用 `{}` 的方式提取内置方法。

```js {6,7}
import _ from 'lodash';
const a = {};
const b = _.cloneDeep(a);

// 这里会报错，无法提取内置模块
import { cloneDeep } from 'lodash';
const b = cloneDeep(a);

import fs from 'fs';
fs.writeFileSync('test.txt', 'test text');

// 可以正常执行，因为内置模块都做了兼容处理
import { writeFileSync } from 'fs';
writeFileSync('test.txt', 'test text');
```

### commonjs 和 es module 的交互
- ES Module 中可以导入 CommonJS 模块
- CommonJS 中不能导入 ES Module 模块
- 区别于 ES Module，CommonJS 只会导出一个默认的成员
- ES Module 中的 import 语法只是固定语法，并不能解构导出的对象！
- ES Module 中的 import 语法只是固定语法，并不能解构导出的对象！！
- ES Module 中的 import 语法只是固定语法，并不能解构导出的对象！！！
- ES Module 中不能使用 CommonJS 中那些内置的方法。

### 新版 nodejs 中对 ES Module 的进一步支持
在 12.X 以后的 `nodejs` 版本中，可以在 `package.json` 里面定义一个 `type` 字段为 `module` 来声明当前项目下的文件都是使用 `ES Module` 规范进行开发的，这样就可以不用在把后缀改成 `.mjs` 了。但是这样就不能使用 `Commonjs` 规范，如果要使用的话，就需要把对应的文件后缀改成 `.cjs`。

### bebal
可以直接使用 `bebal` 在 `nodejs` 中使用 `ES Module` 语法。