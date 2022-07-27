# 规范化标准

规范化标准主要是用来约束一个团队里面的代码风格，一个团队内有同样的代码风格会更加有利于项目后期的维护和升级。

## ESLint 的安装
`eslint` 一般是通过 `npm` 安装为开发依赖后使用。

```sh
yarn add eslint --dev
```

安装后要初始化 `eslint` 的配置项。
```sh
yarn eslint --init
```
[eslint init](https://cn.eslint.org/docs/user-guide/command-line-interface#miscellaneous)

配置过程，具体的配置过程会因为选择的不同而产生差异。
<!-- <img :src="$withBase('/lagou/eslint-init.png')"> -->
![Eslint](/lagou/eslint-init.png)

配置项初始化以后会在目录下生成一个 `.eslintrc.js` 的配置文件，配置项如下链接：

[eslint 配置规则](https://cn.eslint.org/docs/rules/)

如果有想要忽略的目录可以在项目根目录下创建一个 `.eslintignore` 文件，里面写想要忽略的目录或者文件名即可。

[.eslintignore](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)

## 配置注释
配置注释的作用是可以在代码中临时的禁用某一项校验规则。

在想禁用校验规则的代码后面写上注释
```js
const str1 = "${name} is a coder" // eslint-disable-line

// 单独的禁用某一项规则，规则的名称可以在校验报错中找到
const str1 = "${name} is a coder" // eslint-disable-line no-template-curly-in-string
```

## ESLint 检查普通的项目
```sh
# 检查单文件
yarn eslint index.js

# 通配一个目录下的所有文件
yarn eslint ./src/*.js
```

## eslint 结合 webpack 项目
首先需要 `eslint-loader` 然后在 `webpack` 的 `rules` 中配置。

需要注意的是校验 `.vue` 后缀的文件，需要单独安装插件。
```sh
yarn add eslint-plugin-vue --dev
```

下面这段代码中有一些注意项，这里的 `eslint` 是单独配置了一个 `loader`，所以他是有可能在 `bebal-loader` 之前执行的，但是项目中需要进行代码校验的是 `babal` 转移之前的代码，所以就要求 `eslint-loader` 这个加载项肯定是要在 `babel-loader` 之前执行的，所以就需要加一个 `enforce`，以保证他能优先执行。
```js
{
  // 校验 js 和 vue 文件
  test: /\.(js|vue)$/,
  exclude: /node_modules/,
  use: 'eslint-loader',
  enforce: 'pre',
}
```

`eslint` 的配置项比较繁琐，不是一下子就能说的完的，所以主要还是碰到问题后能解决他。

## stylelint
安装配置项
```sh
yarn add stylelint stylelint-webpack-plugin --dev
```

基础的使用和 `eslint` 基本上是一致的，这里不再赘述，区别就是 `webpack` 在配置的时候需要配置一个 `plugin`，如下代码他回去校验 `src` 目录下的，后缀是 `(vue|css|less)` 的文件。
```js
new StyleLintPlugin({
  files: ['src/*.(vue|css|less)']
})
```



## 使用 git 钩子来添加校验时机
在 `git` 执行的时候会在指定的时机执行指定的钩子，所以就可以在 `git` 钩子执行的时候执行以下代码校验。

::: tip 知识点
`git` 的钩子文件都在 `.git/hooks/` 目录下，其中 `pre-commit.sample` 就是 `commit` 的钩子，这时候只要在当前目录下新建一个 `pre-commit`，里面写的 `shell` 脚本就能在 `commit` 执行的时候触发了。
:::

最好还是不要使用直接修改 `shell` 脚本的方式去做，而是使用一个叫 `husky` 的模块。
```sh
yarn add husky --dev
```

安装完成后就可以直接在 `package.json` 中定义了，需要注意的是，这里写的调试命令一定要在 `script` 内已经定义好了。
```json
{
  "scripts": {
    "serve": "webpack serve --config webpack.dev.js",
    "build": "webpack --config ./webpack.prod.js",
    "lint": "eslint --ext js,vue ./src --fix && stylelint src/*.{html,vue,css,less}",
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint"
    }
  }
}
```

上面这种方式只是单纯的执行了一下 `eslint`，如果有多个命令要执行的话还可以使用 `lint-staged` 插件。
```sh
yarn add lint-staged --dev
```

使用方式也是在 `package.json` 中定义。
执行过程是
- `git commit` 触发 `hooks`
- `hooks` 执行 `yarn precommit`
- `yarn precommit` 再分别触发 `eslint` 的校验和重新 `git add` 命令
```json
{
  "scripts": {
    "serve": "webpack serve --config webpack.dev.js",
    "build": "webpack --config ./webpack.prod.js",
    "lint": "eslint --ext js,vue ./src --fix && stylelint src/*.{html,vue,css,less}",
    "precommit": "lint-staged"
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn precommit"
    }
  },
  "lint-staged": {
    "*.js": [
      "yarn lint",
      "git add"
    ]
  }
}
```