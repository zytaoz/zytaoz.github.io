# 脚手架工具
> 三年之后，又开始搞这个东西了。希望这一次完成一套更为完善更为强大的工具集合。

::: tip 脚手架工具
使用自动化代码来完成一些每个项目都会用到的重复性工作，比如依赖、架构、工具、常用代码等。
:::

## Yeoman
区别于 `vue cli` 这类指向性专注性更强的工具，`Yeoman` 则是一个通用性的脚手架运行平台，搭配不同的 `generator` 来实现不同的功能。甚至可以来自定义 `generator` 来实现更定制化的功能。

### 基础使用的规则和注意事项
- 安装起来和其他的 `npm` `yarn` 并没有什么区别。
- `windows` 安装好以后使用 `yo` 命令如果提示 `不是内部或外部命令 也不是可运行的程序` 的话就需要在系统变量里面的 `path` 加一下 `yo.cmd` 的目录名，到目录名就好了，不用精确到文件名。
- 安装好之后就可以使用 `yo` 命令来**全局安装**想要使用的 `generator` 模块，如 `generator-node` 就是一个 `node-module` 模块。
- 他有一个官网提供了各种各样的功能的 `generator` 模块。
  - [yeoman generator](https://yeoman.io/generators/)
- 可以在这里面找到你项目所需的 `generator` 模块。
- 安装好 `generator` 模块后就可以在项目里面进行使用了。
- 在项目目录下执行 `yo ` 命令，命令后跟着想要使用 `generator` 模块，如前面安装的 `generator-node` 模块，就直接输入 `yo node` 命令就可以了。可以把前面的 `generator-` 省略掉。
- 安装的时候他会提示一些基础的配置项，就和 `vue-cli` 或 `webpack init` 的配置感觉差不多。
- 安装完成后工具会自动执行 `npm install`。执行完成后会问是否要发布到平台，这里点击回车跳过后，就可以使用了。

**层级关系**

这里一共有三层关系。
- 第一层 `yeoman` 就是一个平台，他并没有其他的功能，仅仅提供了一个平台。
- 第二层 `generator` 模块，这个模块就像是发布在 `npm` 上面的包一样，你可以把他下载到本地的一个类似仓库的地方先放着。(全局安装)
- 第三层项目，如果要使用的话，就借助平台的工具 (`yo`命令)，拿出对应的模块(`generator-node`)，放到项目里面。

### sub generator
`sub generator` 是 `generator` 模块下的子集生成器，他可以用来在项目中创建一个常用的单文件，如 `readme.md` 或者 `.gitignore` 文件。

如 `generator-node` 模块下就有一个 `cli` 的子集生成器，他可以创建 `cli` 文件。

需要注意的是，并不是所有的 `generator` 模块都有子集生成器，具体需要看文档。前面安装的这个 `node` 模块就有几个子集生成器。如下例子。

``` sh
# 使用 cli 子集生成器创建一个 cli
yo node:cli 

# 使用 readme 子集生成器创建一个 readme.md 文件
yo node:readme

# 使用 eslint 子集生成器创建 eslint 基础规则
yo node:eslint
```