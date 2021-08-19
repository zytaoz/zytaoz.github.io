(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{629:function(t,s,e){"use strict";e.r(s);var a=e(25),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"基础概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("这里都是什么")]),t._v(" "),e("p",[t._v("因为平时在写项目的时候基本都是基于 "),e("code",[t._v("vue-cli")]),t._v(" 去做的，对于一些平时用不太到的概念和语法会显得非常的生疏，然后在上课的时候老师在碰到这种基础概念的时候只会带一笔，所以就需要有一个地方来专门记录这些比较全局性的基础概念和语法。")])]),t._v(" "),e("h2",{attrs:{id:"vue-的插件机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的插件机制"}},[t._v("#")]),t._v(" Vue 的插件机制")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank",rel:"noopener noreferrer"}},[t._v("第三方插件库"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("use")]),t._v(" 方法来注册插件，"),e("code",[t._v("use")]),t._v(" 方法接受两种参数，函数和对象，如果传入的是一个函数的话 "),e("code",[t._v("vue")]),t._v(" 会自动调用该函数，如果传入的是个对象的话， "),e("code",[t._v("vue")]),t._v(" 会调用该对象的 "),e("code",[t._v("install")]),t._v(" 方法。")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册 router 插件")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册 Vuex 插件")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"vue-的构建版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的构建版本"}},[t._v("#")]),t._v(" Vue 的构建版本")]),t._v(" "),e("h4",{attrs:{id:"运行时版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行时版本"}},[t._v("#")]),t._v(" 运行时版本")]),t._v(" "),e("p",[t._v("运行时的版本不支持对 "),e("code",[t._v("template")]),t._v(" 模板的编译，需要在打包的时候提前编译好。")]),t._v(" "),e("h4",{attrs:{id:"完整版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整版"}},[t._v("#")]),t._v(" 完整版")]),t._v(" "),e("p",[t._v("包含运行时的版本和 "),e("code",[t._v("template")]),t._v(" 编译器，体积稍大，可以在程序运行的时候把 "),e("code",[t._v("template")]),t._v(" 模板转化为 "),e("code",[t._v("render")]),t._v(" 函数。")])])}),[],!1,null,null,null);s.default=n.exports}}]);