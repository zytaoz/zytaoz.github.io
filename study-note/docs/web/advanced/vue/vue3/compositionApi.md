# Composition Api
::: tip 理解
和之前的 `vue` 不一样的感觉是，第一次看到 `compostion api` 的写法，就感觉特别的像 `React` 的钩子那种写法。这样的语法确实可以把同样的数据和操作逻辑都封装到一个方法里面去，但是对于新手来说，应该会特别容易把代码写乱。
:::

## 基础语法

### ref
需要注意的点
- 单组件内的所有数据和方法都可以声明在一个 `setup` 方法里面。
- 使用 `ref` 函数来声明一个需要双向绑定值类型。
- 操作值类型需要找到改类型下的 `value` 属性进行操作。
- 需要将外界使用到的数据和方法在 `setup` 函数中导出出来。
- **可以将每个组件都抽离成成一个单独的函数或者文件，只需要在 `setup` 函数中有导出即可使用**


``` vue {9,13,16}
<template>
  <div>
    <p>{{ numbers }}</p>
    <button @click="addNumber">加一</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    let numbers = ref(0);

    function addNumber() {
      numbers.value ++;
    }

    return {
      numbers,
      addNumber
    }
  }
}
</script>
```

### reactive

需要注意的点
- 如果声明的数据是一个引用类型的话，就需要使用 `reactive` 函数声明变量。
- 其他的用法和 `ref` 差不多。

``` vue
<template>
  <div>
    <ul>
      <li 
        v-for="(item, index) in list" 
        :key="item.id" 
        @click="removeList(index)"
      >{{ item.text }}</li>
    </ul>
    <button @click="addList">添加列表</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

function createdList() {
  const list = reactive([
    {
      id: 1,
      text: 'sss'
    },
    {
      id: 2,
      text: 'sss'
    },
    {
      id: 3,
      text: 'sss'
    }
  ])

  // 删除数据
  function removeList(index) {
    list.splice(index, 1);
  }

  // 新增数据
  function addList() {
    list.push({
      id: Math.random(),
      text: 'sssss'
    })
  }

  return {
    list,
    removeList,
    addList
  }
}

export default {
  name: 'App',
  setup() {
    const { ...listData } = createdList();
    return {
      ...listData
    }
  }
}
</script>

```