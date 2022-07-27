# 其他打包工具

::: warning 关于
目前看下来这块东西还是需要继续看的，不能只是简单的了解。
:::
## Rollup
[Rollup](https://www.rollupjs.com/)<br />
相对于 `webpack`，`rollup` 更适合去开发库，因为他的生态没有 `webpack` 好，插件什么的没有 `webpack` 多。


## parcel
[parcel](https://parceljs.org/)<br />
完全零配置，可以可以使用，也不用安装插件，想用插件就去直接使用，他会自动安装，也不用 `webpack` 中各种各样的 `loader` `plugin` 等，都可以直接使用，而且使用了多线程打包，打包速度会比 `webpack` 快很多。

那为啥不用 `parcel` ，还是继续用 `webpack` ？还是因为 `webpack` 的生态成熟，且之前被 `parcel` 比下去的部分现在也都慢慢的补偿回来了。
