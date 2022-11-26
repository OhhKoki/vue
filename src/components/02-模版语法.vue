<script>
    export default{
        data() {
            return {
                name: "tom",
                age: 20
            }
        },

        methods: {
            increaseAge() {
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
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <button on-v:click="increaseAge"></button>
    </div>


</template>

<style>

</style>
