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

```sh
# 使用 cli 子集生成器创建一个 cli
yo node:cli 

# 使用 readme 子集生成器创建一个 readme.md 文件
yo node:readme

# 使用 eslint 子集生成器创建 eslint 基础规则
yo node:eslint
```

## 自定义 Generator
我们可以按照 `yeoman` 规定的目录结构和生命周期方法来自定义一个自己专属的 `generator` 。

从某种意义上来说， `generator` 其实就是一个 `npm` 模块。

```sh
# 首先要创建一个文件夹，然后在里面初始化一个 npm 项目，创建 pakeage.json
yarn init

# 然后要安装 yeoman 模块基类，里面会有一些工具函数
yarn add yeoman-generator
```
::: warning 注意事项
在 `init` 项目的时候，项目的名称必须要以 `generator-` 开头，比如要创建一个叫 `test` 的 `generator` ，那名字就必须是 `generator-test`。
:::

基础模块生成好之后就要按照，`yeoman` 定义的基础目录结构来创建文件夹。

**generators 文件夹**

默认必须要有一个 `generators` 文件夹，要注意这里的文件夹名字是 `generators` 多了一个 `s` ，内部有一个 `app` 文件夹，这个是 `generator` 的入口文件。

如果要新建子生成器的话，就在 `app` 的同级别目录下创建一个新的目录就好了。
```
.
├─ generators
│  └─ app
│     └─ index.js
└─ package.json
```

**入口文件**
- `index.js` 文件是该 `generator` 的核心入口文件，
- 该文件要导出一个继承自 `yeoman generator` 的类
- `yeoman generator` 在运行过程中会自动调用对应的类似生命周期方法函数
  - [The run loop](https://yeoman.io/authoring/running-context.html)
- 我们可以在对应的生命周期方法函数中实现想要的功能

```js
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // 生成文件时的生命周期方法
  writing() {
    /**
     * 调用父类的 fs 模块的 write 方法写入，这个 fs 模块和 node 原生的 fs 模块不一样，功能会更强大。
     * write 方法接受两个参数，第一个参数是写入的路径，第二个参数是写入的内容
     */
    this.fs.write(
      this.destinationPath('temp.txt'),
      Math.random().toString()
    );
  }
}
```

```sh
# 在模块根目录执行命令，将他绑定到当前的 npm 全局环境中
yarn link

# 新建一个目录，就可以使用刚才定义的 generator 了
yo sample
```

## 使用模板创建 Generator
上面的方法可以建立简单的 `generator` 但是如果碰到了比较复杂的项目就需要使用模板来生成 `generator`。

模板是放在生成器目录下的，文件夹命名为 `templates`，模板就放置在该目录下，模板内支持 `ejs` 语法。
```
.
├─ generators
│  └─ app
│     ├─ index.js
│     └─ templates
│        └─ test.txt
└─ package.json
```
同时，因为使用了模板，需要将 `app/index.js` 修改为通过模板编译的方式。
- 使用 `fs.copyTpl` 方法函数来生成代码，他接受三个参数。
- 第一个参数是模板的路径
- 第二个参数是输入目标的路径
- 第三个参数是模板的上下文数据，就是 `ejs` 的数据。

```js {16}
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    // 使用模板的话就不需要使用上面写入的方式了，而是获取模板的内容
    // 模板的路径
    const templatePath = this.templatePath('test.txt');
    // 输出目标的路径
    const output = this.destinationPath('test.txt');
    // 模板的上下文数据
    const templateData = {
      title: '桃子'
    };

    // 执行函数
    this.fs.copyTpl(templatePath, output, templateData);
  }
}
```

## 命令行交互的方式收集用户填写的信息
这个看起来这么高级的功能原来实现起来挺简单的。

在 `generator` 类里面有一个 `prompting` 的方法是在进行命令行交互的时候会执行的方法。在这个方法里面调用父类的 `prompt()` 方法可以在命令行中发起对用户的询问。

```js
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  /**
   * 在命令行交互的时候 yeoman 会执行该方法
   * 在这个方法里面调用父类的 prompt() 方法以在命令行中发起对用户的询问
   */
  prompting() {
    /**
     * prompt 是一个 promise ，这里要把它 return 出去
     * 他接受一个对象数组，每个对象里面都是需要用户操作的问题
     */
    return this.prompt([
      {
        type: 'input', // 想让用户以什么交互方式提交数据
        name: 'title', // 当前数据的 key
        message: '请输入项目名称', // 命令行的提示信息
        default: this.appname, // 这里是 yeoman 自动获取的目录名
      },
      {
        type: 'input', // 想让用户以什么交互方式提交数据
        name: 'name', // 当前数据的 key
        message: '请输入你的名字', // 命令行的提示信息
        default: 'lambortao', // 这里是 yeoman 自动获取的目录名
      }
    ]).then(res => {
      // 这里将获取到的值挂载到 this 上面
      this.answers = res;
    })
  }
  // 生成文件时的生命周期方法
  writing() {
    // 模板的路径
    const templatePath = this.templatePath('test.html');
    // 输出目标的路径
    const output = this.destinationPath('test.html');
    // 模板的上下文数据，这里直接使用前文中获取到的值
    const templateData = this.answers;

    // 执行函数
    this.fs.copyTpl(templatePath, output, templateData);
  }
}
```
执行的过程如下
<!-- <img :src="$withBase('/lagou/prompting.png')"> -->
![prompting](/lagou/prompting.png)

## 多文件模板
多文件模板和单文件大同小异，基本都是一样的操作流程，只是把 `template` 模板的目录集中放到了一个数组里面，然后循环这个数组，生成和之前一样统一的结构就好了。

如果碰到了不需要进行编译的 `ejs` 语法，就多加一个 `%`。

```
<%%= title =%>
```
## 发布到 npm
终于走到这一步了。
首先要发布到一个 `github` 仓库去，发布完之后，执行命令

```sh
yarn publish
```

- 需要注意的是最好先配置一下 `npmuser` 把自己的 `npm` 账号信息先配置先配置一下。
- 还需要注意 `private` 需要为 `false` ，也就是不是私有的。

::: tip 发布
把之前搭建的一个多页面 webpack 脚手架发布上去了 [b-webapp](https://www.npmjs.com/package/b-webapp)。
:::

## plop
使用 `plop` 可以通过模板的形式新建一些会重复新建的文件。

就比如上面那个多页面的 `webpack` 打包器，里面页面都需要生成一个文件夹，里面有 `index.html` 和 `index.js` 和 `index.scss` 三个文件，而且每个文件里面都有一些固定的代码，这时候就可以只用 `plop` 来自动生成这些文件。

- 使用之前需要先安装 `plop`，他就和普通的 `npm` 包一样，直接使用 `yarn` 安装就可以了。
- 然后在项目根目录创建一个 `plopfile.js` 文件，这个是 `plop` 的入口文件。

```js {3}
module.exports = plop => {
  // newpage 是在新建文件的之后执行的命令
  plop.setGenerator('newpage', {
    description: '创建一个新的页面',
    // 命令行交互信息
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入新的页面名称',
        default: 'newPages'
      }
    ],
    // 命令行完成之后的动作，这里是新增了三个页面
    actions: [
      {
        type: 'add', // 代表新增
        path: 'src/pages/{{name}}/index.js', // 导出的目录
        templateFile: 'plop-templates/pages/index.hbs', // 模板目录
      },
      {
        type: 'add', // 代表新增
        path: 'src/pages/{{name}}/index.html', // 导出的目录
        templateFile: 'plop-templates/pages/index.html.hbs', // 模板目录
      },
      {
        type: 'add', // 代表新增
        path: 'src/pages/{{name}}/index.scss', // 导出的目录
        templateFile: 'plop-templates/pages/index.scss.hbs', // 模板目录
      }
    ]
  })
}
```
#### 模板一般都是建立在项目的根目录，根据需要进行区分。
- 模板需要以 `.hbs` 为后缀。
- 如果是 `js` 文件可以省略 `.js` 后缀。
- 其他的文件需要把自己文件的后缀也加上，比如 `html` 文件，那模板名字就要是 `index.html.hbs`

#### 一切准备就绪后执行命令
- 其中 `newpage` 就是在 `plopfile.js` 入口文件中 `setGenerator` 的第一个参数。
- 根据命令行提示输入文件名字。
- 如果你只有一个 `setGenerator` 的话，可以省略 `newpage` 关键字，他会自动生成你输入名字的文件。
```sh
# 默认情况下
yarn plop newpage

# 如果只有一个 setGenerator 可以直接输入下面的，他就会按照模板生成 news 文件
yarn plop news
```

执行的过程如下
<!-- <img :src="$withBase('/lagou/plop.png')"> -->
![plop](/lagou/plop.png)

::: tip 
`plop` 这个工具的使用场景很多
:::

## 自己制作一个脚手架工具
首先要 `init` 一个本地项目。生成 `package.json` 文件后要使用 `bin` 字段来定义一个脚手架的入口文件。

```json {5}
{
  "name": "my-cli",
  "version": "1.0.0",
  "main": "index.js",
  "bin": "cli.js",
  "license": "MIT",
  "dependencies": {
    "ejs": "^3.1.6",
    "inquirer": "^8.1.0"
  }
}
```

然后建立对应的入口文件，这里是 `cli.js` 文件。
在文件的头部有一行固定的代码。这个是 `node cli` 文件的固定文件头，如果是 `linux` 或者 `macos` 环境下可能还需要修改权限为 `755`
```js
#!/usr/bin/env node
```

脚手架的流程简单说就两个步骤
- 根据命令行来询问用户基础的数据。
- 根据用户反馈来生成对应的文件。
  - 生成文件这里，可能还需要使用模板。

这里要安装几个功能板块。
- `inquirer` 用来生成命令行交互
- `ejs` 模板引擎

```js
const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");
const ejs = require('ejs');

// 生成命令行交互，和之前的命令行交互参数都是差不多的，就是输入方式，名字，和询问的信息
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'project name'
  }
]).then(result => {
  // 首先要获取一个模板，这里的模板都在项目根目录下的 tempaltes 下
  const templateDir = path.join(__dirname, 'templates');
  // 目标目录，这里是默认的当前目录
  const destDir = process.cwd();
  // 将模板下的文件都转换到目标目录
  // 使用 fs 读取模板目录下的所有文件
  fs.readdir(templateDir, (err, files) => {
    if (err) throw err; // 打印错误
    files.forEach(file => {
      /**
       * 使用 ejs 去解析模板
       * 他接受三个参数，
       * 1. 文件的目录
       * 2. 接受的上下文参数
       * 3. 回调函数，里面有错误和回调结果
       */
      ejs.renderFile(path.join(templateDir, file), result, (err, res) => {
        if (err) throw err;

        // 将文件写入目标目录
        fs.writeFileSync(path.join(destDir, file), res);
      })
    })
  })
})
```

::: tip
这个东西挺牛逼的，思路上基本能符合现在公司需求了，但是该怎么做成像 `vue` 脚手架那样，直接使用 `npx` 全局安装下来，然后就可以直接用了呢？继续往后面看吧。
:::