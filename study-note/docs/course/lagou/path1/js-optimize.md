# JavaScript 性能优化

::: danger 重要提示
这一篇幅偏理论的概念太多，目前没有太多的时间去看这些。先暂时放置，后续再回顾！！！！
:::

## JavaScript 内存管理
JavaScript中内存管理是自动的，内存管理分为三个步骤
- 申请内存
- 使用内存
- 释放内存

## JavaScript 的垃圾回收
可达的概念。
- 有引用
- 从全局作用域能访问到

如果不符合以上两点就会触发`javascript`垃圾回收，被回收。

## GC 算法
### 引用技术算法
当某一个变量被引用一次就加1，如果一个变量被引用次数是0，那就可以直接回收掉了。

**缺点**
循环引用，无法回收。因为循环引用在他内部还有引用，但是已经不可达了。

### 标记清除算法

**缺点**
会有空间碎片化


### 标记整理算法
标记整理算法会将一个原本是乱序的内存空间占用状态，整理成一个有序的状态，首先将活动的内存空间都整理在一起，然后把非活动和空的内存空间整理在一起，然后再释放非活动的内存空间。