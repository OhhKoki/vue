<script>
    export default{
        data() {
            return {
                name: "tom",
                age: 20,
                rawHtml: "<span style='color: red'>this should be red.</span>",
                dynamicUrl: "https://cn.vuejs.org",
                isButtonDisabled: true,
                objectOfAttrs: {
                    id: 'container',
                    class: 'wrapper'
                },
                salary: 100,
                ternaryOperation: true,
                helloMessage: "hello world",
                attributeOperation: 100,
                seen: true,
                dynamicAttributeName: "id",
                dynamicAttributeValue: 101
            }
        },

        methods: {
            increaseAge() {
                console.log("调用 increaseAge 方法");
                this.age++;
            }
        }
    }
</script>

<template>
    <!-- 
        Vue 使用一种基于 HTML 的模板语法，通过该模版语法，我们能够声明式地将 "组件实例" 的数据绑定到呈现的 DOM 上，常见的语法如下：
            1、文本插值
            2、原始 HTML
            3、Attribute 绑定
            4、JavaScript 表达式
            5、指令 Directives
    -->

    <!-- 
        1、文本插值：使用双大括号标签标记一个变量，变量会被替换为对应 "组件实例" 中同名属性的值。且每次同名属性的值更改时，双大括号中的值也会同步更新；
    -->
    <div>
        <h4>-------------------- 文本插值 --------------------</h4>
        <p>name：{{ name }}</p>
        <p>age：{{ age }}</p>
        <!-- 同名属性的值更改时，双大括号中的值也会同步更新 -->
        <button v-on:click="increaseAge">年龄加一</button>
    </div>

    <!-- 
        2、原始 HTML：双大括号之间的变量会被替换成纯文本，而不是 HTML，若想插入 HTML，你需要使用 v-html 指令；
            操作原理：DOM 元素的 innerHTML 与 rawHtml 属性保持一致；
    -->
    <div>
        <h4>-------------------- 原始 HTML --------------------</h4>
        <p>{{rawHtml}}</p>
        <p v-html="rawHtml"></p>
    </div>

    <!-- 
        3、Attribute 绑定：文本插值不能在 DOM 元素的 attributes 中使用，想要响应式地为一个 DOM 元素绑定一个 attribute，应该使用 v-bind 指令；   
    -->
    <div>
        <h4>-------------------- Attribute 绑定 --------------------</h4>
        <!-- v-bind 指令用于指示 Vue 将 DOM 元素的 attribute 的 value 与 "组件实例" 的属性保持一致 -->
        <!-- 常用于 img 的 src 属性，或者是 a 的 href 属性等等 -->
        <a v-bind:href="dynamicUrl">响应式设置 DOM 元素属性</a>

        <!-- 布尔型 Attribute -->
        <!-- 布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上 -->
        <!-- 当 isButtonDisabled 为真值或一个空字符串 (即 <button disabled="">) 时，元素会包含这个 disabled attribute。而当其为其他假值时 attribute 将被忽略 -->
        <button v-bind:disabled="isButtonDisabled">布尔型 attribute</button>

        <!-- 动态绑定多个值 -->
        <!-- 使用不带参数的 v-bind，可以将一个 JS 对象的所有属性（key-value）绑定到单个元素上 -->
        <p v-bind="objectOfAttrs">动态绑定多个值</p>
        <!-- <p id="container" class="wrapper">动态绑定多个值</p> -->
    </div>

    <!-- 
        4、JavaScript 表达式
    -->
    <div>
        <h4>-------------------- JavaScript 表达式 --------------------</h4>
        <!-- 
            Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式，使用场景为：
                1、文本插值；
                2、Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值；
        -->
        <p>四则运算：{{ salary + 100 }}</p>
        <p>三元运算：{{ ternaryOperation ? "yes" : "no" }}</p>
        <p>函数调用：{{ helloMessage.split('').reverse().join('') }}</p>
        <p v-bind:id="attributeOperation + 1">属性运算：本案例为将 id 属性值累计 1，可以开发者模式中查看该标签的 id 属性</p>

        <!-- 需要特别注意的是：数据绑定中支持的 JavaScript 表达式，仅仅支持 "单一表达式"，即：可以合法地写在 return 后面的 JS 表达式 -->
        <!-- 例如下面这个就不支持，这是一个语句，而非表达式 -->
        <!-- <p>{{ let age = 100 }}</p> -->
    </div>

    <!-- 
        5、Directives
    -->
    <div>
        <h4>-------------------- Directives --------------------</h4>
        <!-- 
            含义：是指带有 v- 前缀的特殊 attribute，Vue 提供了许多内置指令，例如：v-html、v-bind、v-on；
            作用：指令 attribute 的期望值为一个 JS 表达式 (除了少数几个例外，例如：v-for、v-on、v-slot)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM；
        -->

        <!-- 一个指令的任务是在其表达式的值变化时响应式地更新 DOM，以 v-if 为例 -->
        <!-- v-if 指令会基于表达式 seen 的值的真假来移除/插入该 <p> 元素 -->
        <p v-if="seen">不带参数的指令</p>

        <!-- Arguments：某些指令会需要一个 "参数"，在指令名后通过一个冒号隔开做标识。例如 v-bind 指令 -->
        <!-- 这里的 id 就是一个参数，它告诉 v-bind 指令将 101 绑定到元素的 id attribute 上 -->
        <p v-bind:id="101">带参数的指令，使用冒号作为标识符</p>
        
        <!-- 动态参数：在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内 -->
        <!-- 
            参数会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。
            以本案例来说，组件实例有一个数据属性 dynamicAttributeName，其值为 "id"，那么这个绑定就等价于 v-bind:id。
            另外需要注意的是：动态参数中表达式的值应当是一个字符串，或者是 null。特殊值 null 意为显式移除该绑定。其他非字符串的值会触发警告。
        -->
        <p v-bind:[dynamicAttributeName]="100">动态参数</p>

        <!-- 另外，参数的值也是可以动态的 -->
        <p v-bind:[dynamicAttributeName]="dynamicAttributeValue">动态参数 & 动态参数值</p>
    </div>

</template>

<style>

</style>