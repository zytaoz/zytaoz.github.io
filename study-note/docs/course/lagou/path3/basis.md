# 基础概念

::: tip 这里都是什么
平时写项目的时候并不会去主动的使用一些不常用的概念和语法，所以对于用不太到的概念和语法会显得非常的生疏，然后在上课的时候老师在碰到这种基础概念的时候只会带一笔，所以就需要有一个地方来专门记录这些比较全局性的基础概念和语法。
:::

## Vue 的插件机制
- [官方文档](https://cn.vuejs.org/v2/guide/plugins.html)
- [第三方插件库](https://github.com/vuejs/awesome-vue#components--libraries)

使用 `use` 方法来注册插件，`use` 方法接受两种参数，函数和对象，如果传入的是一个函数的话 `vue` 会自动调用该函数，如果传入的是个对象的话， `vue` 会调用该对象的 `install` 方法。
``` javascript
// 注册 router 插件
Vue.use(VueRouter);

// 注册 Vuex 插件
Vue.use(store);
```

## Vue 的构建版本
#### 运行时版本
运行时的版本不支持对 `template` 模板的编译，需要在打包的时候提前编译好。

#### 完整版
包含运行时的版本和 `template` 编译器，体积稍大，可以在程序运行的时候把 `template` 模板转化为 `render` 函数。