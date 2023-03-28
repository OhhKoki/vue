<script>
    export default{
        data() {
            return {
                isActive: true,
                isError: null,
                classObject: {
                    turnRed: true,
                    backgroundColorTurnBlue: true
                },
                turnRedArry: "turnRed",
                backgroundColorTurnBlueArray: "backgroundColorTurnBlue",
                activeColor: 'pink',
                activeBackgroundColor: "yellow",
                styleObject: {
                    color: 'pink',
                    backgroundColor: "yellow",
                    // 需要特别注意的是，当 key 使用的不是驼峰命名时，需要加引号
                    // fontSize: '30px'
                    'font-size': '30px'

                }
            }
        },

        computed: {
            whetherToDisplay() {
                return {
                    // 存在需要展示的样式且页面没有报错时，才进行展示 turnRed 样式（null 会自动转换成 false）
                    turnRed: this.isActive && !this.isError,
                    // 页面没有报错就展示 backgroundColorTurnBlue 样式
                    backgroundColorTurnBlue: !this.isError
                }
            }
        }
    }
</script>

<template>
    <!-- 
        HTML 导入 CSS 有三种方式，分别为：内联样式、内部样式、外部样式：
            1、内联样式：在标签内部使用 style 属性；
            2、内部样式：定义 style 标签，在标签内部定义 CSS 样式；
            3、外部样式：定义 link 标签，引入外部的 CSS 文件
    -->

    <!-- 元素绑定内部样式的三种方式：字符、对象、数组 -->
    <div>
        <!-- 元素绑定内部样式 方式一：表达式是字符 -->
        <p class="turnRed">表达式是字符</p>

        <!-- 元素绑定内部样式方式二：表达式是对象 -->
        <!-- 表达式是一个 JSON 对象，形式为：{对象名:布尔值}，当布尔值 为 true 时，表示要将对象中的 k-v 绑定到当前元素的 clss 属性上 -->

        <!-- 元素绑定内部样式方式二：表达式是一个 JSON 对象，且该 JSON 对象只含一组 k-v 键值对 -->
        <p v-bind:class="{turnRed:isActive}">表达式是一个 JSON 对象，且该 JSON 对象只含一组 k-v 键值对</p>

        <!-- 元素绑定内部样式方式二：表达式是一个 JSON 对象，且该 JSON 对象包含多组 k-v 键值对 -->
        <p v-bind:class="{turnRed:isActive, backgroundColorTurnBlue:isActive}">表达式是一个 JSON 对象，且该 JSON 对象包含多组 k-v 键值对</p>

        <!-- 元素绑定内部样式方式二：表达式是一个 JSON 对象，且该 JSON 在 data 选项中已经定义好，直接使用 -->
        <p v-bind:class="classObject">表达式是一个 JSON 对象，且该 JSON 在 data 选项中已经定义好，直接使用</p>

        <!-- 元素上可以同时存在 class 和 v-bind:class 这两个属性，会进行合并 -->
        <p class="turnRed" v-bind:class="{backgroundColorTurnBlue:isActive}">元素上可以同时存在 class 和 v-bind:class 这两个属性，会进行合并</p>
        
        <!-- 将 computed 返回的 JSON 对象作为内部样式 -->
        <p v-bind:class="whetherToDisplay">将 computed 返回的 JSON 对象作为内部样式</p>

        <!-- 元素绑定内部样式方式三：通过数组的形式绑定样式（不常用，了解即可） -->
        <p v-bind:class="[turnRedArry,backgroundColorTurnBlueArray]">通过数组的形式绑定内部样式</p>
    </div>

    <!-- 元素绑定内联样式的三种方式：字面量、对象、数组 -->
    <div>
        <!-- 元素绑定内联样式的方式一：表达式是字面量 -->
        <p style="color:red">表达式是字面量</p>

        <!-- 元素绑定内联样式的方式二：表达式是一个 JSON 对象 -->
        <p v-bind:style="{color:activeColor,backgroundColor:activeBackgroundColor,'font-size':'30px'}">表达式是一个 JSON 对象</p>

        <!-- 元素绑定内联样式的方式二：表达式是一个 JSON 对象，且该 JSON 在 data 选项中已经定义好，直接使用 -->
        <p v-bind:style="styleObject">表达式是一个 JSON 对象，且该 JSON 在 data 选项中已经定义好，直接使用</p>

        <!-- 将 computed 返回的 JSON 对象作为内联样式（和内部样式一样，此处不再演示） -->

        <!-- 元素绑定内联样式方式三：通过数组的形式绑定样式（不常用，了解即可） -->
        <!-- 直接使用对象相当于绑定了多组键值对 -->
        <p v-bind:style="[styleObject]">通过数组的形式绑定内联样式</p>
    </div>
</template>

<style>

    .turnRed {
        color: red;
    }

    .backgroundColorTurnBlue {
        background-color: blue;
    }

</style>
