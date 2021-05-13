# TypeScript

::: tip 前言
`JavaScript` 是一门具有动态类型的弱类型语言。因此才诞生了 [TypeScript](https://www.typescriptlang.org/zh/)。他是 `JavaScript` 的超集。强弱类型这个东西没啥好记得了。
:::
<br />

> 哎，可能是之前这些东西已经看过很多遍了，但是一直都没去用，所以很多地方感觉似曾相识，但是又不知道是啥东西。

之前的一部分笔记[TypeScript](/web/advanced/ts/basis.html)

## 强类型语言的优势
- 可以更早的发现错误，在编译的时候而不是运行的时候
- 更智能的代码提示，如果是 `TypeScript` 的话好像必须要用 `VsCode`
- 重构的时候更加牢靠
- 可以减少不必要的类型判断（但是如果是后台传过来的值，该判断的还是需要判断啊）
## flow
> `JavaScript` 类型检查器。

这个东西有个啥用？明明已经有 `TypeScript` 了。仅作为了解吧。

## TypeScript 原始类型
就是很简单的东西，没啥好看的。

**这里有一个需要注意点，如果打开严格模式的情况下（默认开启），那么`string` `number` `boolean` 是不能为空的，但是如果关闭严格模式的话，可以为`null`**
``` typescript
const a: string = 'string';
const b: number = 100;
const c: boolean = true;
```
``` json
{
  "strict": true, // 严格模式
}
```
## TypeScirpt 标准库
就比如 `ES5` 里面没有 `Symbol` 和 `promise`，如果在 ts 编译成 js 的时候，标准库选择的是不支持这些 api 的标准库，那么就会出现报错，解决方案是，在 `tsconfig.json` 中使用 `lib` 来指定标准库。
- `ES2015` 是为了兼容类如上面的两个 `API`
- `DOM` 则是为了兼容 `DOM` 和 `BOM` 的 `API`
``` json
{
  "lib": ["ES2015", "DOM"]
}
```

## 作用域的问题
在很多文件进行整体编译的时候，`ts` 会把他们在一个作用域下进行编译，然后就会报不能重复定义的错误。

## object 类型
`ts` 中的 `object` 类型并不单指对象类型，而是泛指除了原始类型之外的其他所有类型，如数组、对象、函数。

如果要声明一个对象，就需要使用**对象字面量语法**去声明
``` typescript
const obj: {
  foo: number,
  str: string
} = {
  foo: 12,
  str: 'ssss'
}
```

## 数组
``` typescript
// 两种定义数组里面全部都是数字的方式
const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

// 数组内包含多种类型
const arr3: Array<number | string> = [1, 2, 3, 'sss'];
```

## 元祖
在定义一个固定长度，类型也不太一样的数组的时候，就可以使用元祖。他要求定义的数组长度和类型必须要和要求的完全一致。
``` typescript
const arr4: [string, number] = ['src', 123]
```

## 参考