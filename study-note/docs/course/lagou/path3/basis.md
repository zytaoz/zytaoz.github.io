# 基础概念

::: tip 这里都是什么
因为平时在写项目的时候基本都是基于 `vue-cli` 去做的，对于一些平时用不太到的概念和语法会显得非常的生疏，然后在上课的时候老师在碰到这种基础概念的时候只会带一笔，所以就需要有一个地方来专门记录这些比较全局性的基础概念和语法。
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