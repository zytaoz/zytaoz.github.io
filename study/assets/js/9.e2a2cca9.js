(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("定义")]),t._v(" "),a("p",[t._v("函数式编程其实就是对运算过程的抽象。")])]),t._v(" "),a("h2",{attrs:{id:"前置知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[t._v("#")]),t._v(" 前置知识")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("笔记待整理。")])]),t._v(" "),a("h4",{attrs:{id:"函数式编程的优点都有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的优点都有哪些"}},[t._v("#")]),t._v(" 函数式编程的优点都有哪些？")]),t._v(" "),a("p",[a("code",[t._v("优点")])]),t._v(" "),a("ul",[a("li",[t._v("可以缓存非常耗时的函数操作。（这里需要写一个事例）")]),t._v(" "),a("li",[t._v("测试方便。")]),t._v(" "),a("li",[t._v("支持并行处理。")])]),t._v(" "),a("h2",{attrs:{id:"高阶函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数"}},[t._v("#")]),t._v(" 高阶函数")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("笔记待整理，什么是高阶函数，高阶函数有什么用，在什么地方用。")])]),t._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("什么是闭包")]),t._v(" "),a("p",[t._v("闭包是一种特殊的函数，他可以把一个函数作为参数传递进来，或者把函数作为返回值返回。闭包其实就是对作用域的控制，最主要的特征就是可以在外部作用域访问一个函数的内部变量。")])]),t._v(" "),a("p",[t._v("闭包这里除了之前理解的传统的闭包，老师讲述了一种之前没有见过的闭包事例，虽然很简单，但是实用意义比较大，这里做一个记录。（其实就是说明之前对闭包的理解并没有很到位）")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("需求点")]),t._v(" "),a("p",[t._v("现在有一个需求，给某某班级的某某小朋友发糖果，按照之前传统的思路，就是新建一个函数然后接受两个参数，一个是班级一个是学名。其实这里有一个前提条件，一个班级是有很多个小朋友组成的，所以这里就可以先去生成一个班级，然后返回一个函数并接受学名（闭包）。")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classRoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("classnumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("给")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("classnumber"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("班的")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("小朋友发糖果")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成两个班级")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" classRoom1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classRoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" classRoom2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classRoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据班级生成两个小朋友")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wxm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classRoom1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'王小明'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lxh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classRoom2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'李晓红'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wxm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 给1班的王小明小朋友发糖果")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lxh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 给2班的李晓红小朋友发糖果")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"纯函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯函数"}},[t._v("#")]),t._v(" 纯函数")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("笔记待整理。")])]),t._v(" "),a("p",[t._v("纯函数的概念，同样的输入始终就是同样的输出，并且没有副作用\n这个函数的意思是数学中的那个函数的意思，而不是编程里面的编程的意思。")]),t._v(" "),a("p",[t._v("函数式编程不会保留计算时候的结果，所以变量是不可变的就是所谓的纯函数。")]),t._v(" "),a("h4",{attrs:{id:"副作用的来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#副作用的来源"}},[t._v("#")]),t._v(" 副作用的来源")]),t._v(" "),a("ul",[a("li",[t._v("配置文件")]),t._v(" "),a("li",[t._v("数据库")]),t._v(" "),a("li",[t._v("用户的输入")]),t._v(" "),a("li",[t._v("随机数")]),t._v(" "),a("li",[t._v("日期")])]),t._v(" "),a("h2",{attrs:{id:"柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化"}},[t._v("#")]),t._v(" 柯里化")]),t._v(" "),a("h2",{attrs:{id:"函数组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组合"}},[t._v("#")]),t._v(" 函数组合")]),t._v(" "),a("h2",{attrs:{id:"functor-函子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functor-函子"}},[t._v("#")]),t._v(" Functor (函子)")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")])])}),[],!1,null,null,null);s.default=r.exports}}]);