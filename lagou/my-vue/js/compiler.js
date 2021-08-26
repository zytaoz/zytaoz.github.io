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

   // 编译元素节点
   compileElement (node) {
    //  console.log(node);
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