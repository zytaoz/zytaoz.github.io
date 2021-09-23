 class Compiler {
   constructor (vm) {
     this.vm = vm;
     this.$el = vm.$el;

     this.compile(this.$el);
   }

   // 编译模板，遍历和处理各种节点
   compile (el) {
     // 获取所有的节点然后进行遍历
     let childNodes = el.childNodes;
     Array.from(childNodes).forEach(item => {
       // 判断当前节点是哪种类型
       if (this.isTextNode(item)) {
         this.compileText(item);
       } else if (this.isElemenetNode(item)) {
         this.compileElement(item);
       }

       // 如果有嵌套的子节点，就使用递归的方式重新调用 compile
       if (item.childNodes && item.childNodes.length) {
         this.compile(item);
       }
     })
   }

   /**
    * 遍历解析文本节点中的插值表达式
    * 这方法中会调用下面的判断是否是指令和是否是文本的方法去判断当前遍历到的插值表达式
    * 如果是普通指令的话，方法内会通过截取 v- 的方式把指令转化为语义化的方法名去执行
    * 如果是事件的指令的话，会获取对应的方法，然后把他挂载到对应的 node 上
    */
   // 编译元素节点
   compileElement (node) {
     // 这里可以通过 node.attributes 获取到所有的属性节点，然后遍历这个属性节点来判断他是否是指令
     Array.from(node.attributes).forEach(item => {
       // 这里可以使用 console.dir 把需要打印的内容转换成对象的形式，否则开发者工具自动转义的是看不出有什么字内容的
      //  console.dir(item);
      // 获取当前的 attr 的 name，并判断是否是指令
      let attrname = item.name;
      if (this.isDirective(attrname)) {
        // 转换指令，把指令转换成比较语义化的函数名，这样可以不使用 if 也能判断执行不同的方法
        attrname = attrname.substr(2);
        // 判断一下当前的指令是不是 v-on
        // 如果是 v-on 的话就需要把事件名称提取出来绑定到对应的node上
        if (attrname.includes('on:')) {
          this.onUpdater(node, item.value, attrname.substr(3));
        } else {
          let updateFunc = this[`${attrname}Updater`];
          updateFunc && updateFunc(node, this.vm[item.value]);
        }
      }
     })
   }

   // 编译 text
   textUpdater (node, val) {
     node.textContent = val;
   }

   // 编译输入框的指令
   modelUpdater (node, val) {
     node.value = val;
   }

   // 编译 html 指令
   htmlUpdater (node, val) {
     node.innerHTML = val;
   }

   // 绑定 v-on 指令
   onUpdater (node, funcName, event) {
     const nowFunc = this.vm.$options.methods[funcName];
     node.addEventListener(event, nowFunc, false);
   }

   // 编译文本节点
   compileText (node) {
     // 判断当前节点是否是插值表达式
     const reg = /\{\{(.+?)\}\}/;
     // 获取内容
     const val = node.textContent;

     // 如果是文本节点的话
     if (reg.test(val)) {
       // 从正则中取出数据，且去掉前后空格
       const key = RegExp.$1.trim();
       // 然后把从 vue 实例中获取到的值替换掉插值表达式
       node.textContent = val.replace(reg, this.vm[key]);
     }
   }

   // 判断传入的值是否是指令
   isDirective (attrName) {
    // 直接就判断传入的字符串是否是以 v- 开头
    return attrName.startsWith('v-');
   }

   // 判断节点是否是文本节点
   isTextNode (node) {
     // 文本节点的 nodeType 是 3
    return node.nodeType === 3;
   }

   // 判断节点是否是元素节点
   isElemenetNode (node) {
     // 元素节点的 nodeType 是 1
    return node.nodeType === 1;
   }
 }