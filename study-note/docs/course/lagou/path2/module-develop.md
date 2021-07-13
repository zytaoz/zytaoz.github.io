# 模块化开发

::: tip 写在前面
其实就我来说入行并不算晚，15年底，应该算是刚好踏上了移动互联网爆发的时间点（不然也找不到工作吧），但是后续一直在这家公司确实耽误了很多（技能方面）。就拿这个模块化开发的概念来说，其实在很早很早之前就有这方面的概念了，但是学习能力比较差，因为学历低（中专），且是电工转行，接触不到除公司之外其他任何的技术人员，自己的性格又不喜欢和陌生人聊天。导致自己进入了一个封闭的学习状态，封装了很多现在看起来基本就是垃圾的模块和功能库（对比一下老师讲的内容其实一直都在第一阶段来回徘徊）。现在回想起来，也不知道应该庆幸（发现了问题）还是应该可悲（用了太长时间才发现）。
:::

## 模块化开发演化过程
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
``` javascript
(function($){
  var num = 100;
  $('body').addClass('hidden');
})(jQuery);
```

> 我自己对模块化的探索也就仅仅到此为止了。

## 模块化开发崭露头角
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
``` javascript
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
``` javascript
require(['module1'], function('module1') {
  module1.handleBtn();
})
```
`AMD` 可以实现模块化标准，但是使用起来还是麻烦的，因为除了业务代码之外，还要去写一堆模块化标准的代码。

## 模块化标准的最佳实践
这里没啥好说的了，因为就是一直都在用的。
- 浏览器环境就是 `ES Modules` 规范
- `nodejs` 环境就是 `commonjs` 规范