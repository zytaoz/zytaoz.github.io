(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{384:function(t,a,n){"use strict";n.r(a);var e=n(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"float-浮点型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#float-浮点型"}},[t._v("#")]),t._v(" "),n("code",[t._v("Float")]),t._v(" 浮点型")]),t._v(" "),n("p",[t._v("浮点型（也叫浮点数 float，双精度数 double 或实数 real）可以用以下任一语法定义")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2e3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$c")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7E-10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"浮点型的比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮点型的比较"}},[t._v("#")]),t._v(" 浮点型的比较")]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("不要比较")]),t._v(" "),n("p",[t._v("永远不要相信浮点数已精确到最后一位，也永远不要比较两个浮点数是否相等。")])]),t._v(" "),n("p",[t._v("如果一定要比较，那么有两种方法。"),n("br")]),t._v(" "),n("p",[n("strong",[t._v("方法一：要测试浮点数是否相等，要使用一个仅比该数值大一丁点的最小误差值。该值也被称为机器极小值 "),n("code",[t._v("epsilon")]),t._v(" 或最小单元取整数，是计算中所能接受的最小的差别值。")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23456789")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23456780")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$epsilon")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$b")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$epsilon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"true"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("方法二：使用 "),n("code",[t._v("BC Math")]),t._v(" 数学函数。")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcadd.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcadd"),n("OutboundLink")],1),t._v(" 2个任意精度数字的加法计算")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bccomp.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bccomp"),n("OutboundLink")],1),t._v(" 比较两个任意精度的数字")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcdiv.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcdiv"),n("OutboundLink")],1),t._v(" 2个任意精度的数字除法计算")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcmod.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcmod"),n("OutboundLink")],1),t._v(" 对一个任意精度数字取模")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcmul.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcmul"),n("OutboundLink")],1),t._v(" 2个任意精度数字乘法计算")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcpow.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcpow"),n("OutboundLink")],1),t._v(" 任意精度数字的乘方")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcpowmod.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcpowmod"),n("OutboundLink")],1),t._v(" Raise an arbitrary precision number to another, reduced by a specified modulus (机翻：将任意精度数提高到另一个，以指定的模数减少)")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcscale.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcscale"),n("OutboundLink")],1),t._v(" 设置所有bc数学函数的默认小数点保留位数")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcsqrt.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcsqrt"),n("OutboundLink")],1),t._v(" 任意精度数字的二次方根")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.php.net/manual/zh/function.bcsub.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bcsub"),n("OutboundLink")],1),t._v(" 2个任意精度数字的减法")])]),t._v(" "),n("h2",{attrs:{id:"nan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nan"}},[t._v("#")]),t._v(" "),n("code",[t._v("NAN")])]),t._v(" "),n("p",[t._v("某些数学运算会产生一个由常量 "),n("code",[t._v("NAN")]),t._v(" 所代表的的结果。此结果代表着一个在浮点数运算中未定义或不可表述的值。任何拿此值与其他任何值（除了 "),n("code",[t._v("true")]),t._v("）进行的松散或严格比较的结果都是 "),n("code",[t._v("FALSE")]),t._v("。")]),t._v(" "),n("p",[t._v("由于 "),n("code",[t._v("NAN")]),t._v(" 代表着任何不同值，所以不应该拿 "),n("code",[t._v("NAN")]),t._v(" 去和其他值进行比较，包括其自身，应该使用 "),n("a",{attrs:{href:"https://www.php.net/manual/zh/function.is-nan.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("is_nan()"),n("OutboundLink")],1),t._v(" 来检查。")])])}),[],!1,null,null,null);a.default=r.exports}}]);