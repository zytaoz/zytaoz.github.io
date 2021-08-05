# Vue Router 源码及实现
::: tip 写在前面
Vue 可以说是拥有整个前端生态中最友好的官方中文文档，所以根本就没有理由不去熟读文档。

[Vue Router v3.x](https://router.vuejs.org/zh/)
:::

## 路由模式
`Vue Router` 一共有两种路由模式。

### Hash 模式
`hash` 模式就是链接里面带 `#`。
- 而 `hash` 模式是基于锚点，即使用 `url` 中 `#` 后面的链接作为路径参数。
- 然后通过监听 [onhashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onhashchange) 事件。
- 匹配渲染当前路由地址的对应组件来实现的。

### history 模式
`history` 模式从链接上看起来就是正常的 `url` 链接。
- 他是通过使用 [History.pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState) 和 [History.replaceState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState) 来改变链接地址。
- 然后监听 [popstate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event) 事件。
- 在监听到 `url` 有变化后，去匹配渲染当前路由地址的对应组件。

#### 一个老生常谈的问题。
`history` 上线之后需要进行服务端配置才能实现路由访问。为什么会这样呢？
- 首先从浏览器的层面上来说，它并不知道我们访问的这个 `URL` 地址是不是一个单页面应用，他只会像服务端请求我们访问的链接地址。
- 但是因为我们的网站是一个单页面应用，浏览器访问的这个地址其实是不存在的，服务端上的页面链接只有 `index.html` 是可以被真实访问到的。
- 所以，不管是 `nodejs` 还是 `nginx` 他们做的事情都是一样的。即：不管浏览器请求的是哪一个页面链接，始终只返回 `index.html` 入口文件的链接。

## 实现一个 Vue Router
```class
class Square~Shape~{
    int id
    List~int~ position
    setPoints(List~int~ points)
    getPoints() List~int~
}

Square : -List~string~ messages
Square : +setMessages(List~string~ messages)
Square : +getMessages() List~string~
```