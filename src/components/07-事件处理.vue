<script>
    export default{
        data() {
            return {
                name: "tom",
                age: 20,
                salary: 100
            }
        },

        methods: {
            salaryIncrease() {
                this.salary++;
            },

            pClick() {
                console.log("p 被点击");
            },

            spanClick() {
                console.log("span 被点击");
            },

            keyUp() {
                console.log("键盘弹起");
            },

            keyDown() {
                console.log("键盘按下");
            },

            keyEnter() {
                console.log("回车按键");
            }
        }
    }
</script>

<template>
    <!-- 事件监听 -->
    <div>
        <!-- 
            1、事件监听是什么？怎么用：
                事件监听为什么：是指当用户与网页发生交互行为时，通过监听器监听到这一行为，并执行对应的 JS 代码。
                Vue 中怎么进行事件监听：可以使用 v-on 指令 (简写为 @) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：v-on:click="methodName" 或 @click="handler"；
            
            2、事件处理器取值（v-on:click="事件处理器" 或者 @click="事件处理器"）：
                1）内联事件处理器：事件被触发时执行的内联 JavaScript 语句 (与 onclick 类似)；
                2）方法事件处理器：一个指向组件上定义的方法的属性名或是路径；
        -->

        <!-- 内联事件处理器 -->
        <p>age：{{age}}</p>
        <button v-on:click="age++">年龄加一（内联事件处理器）</button>

        <!-- 方法事件处理器 -->
        <p>salary：{{salary}}</p>
        <button v-on:click="salaryIncrease">薪水加一（方法事件处理器）</button>
    </div>

    <!-- 事件修饰符 -->
    <div>
        <!-- .stop：单击事件将停止传递 -->
        <p v-on:click="pClick"><span v-on:click.stop="spanClick">.stop --> 单击事件将停止传递</span></p>

        <!-- .once：点击事件最多被触发一次 -->
        <p v-on:click.once="pClick">.once --> 只会执行一次</p>
    </div>

    <!-- 使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的 -->

    <!-- 按键修饰符（监听键盘按键） -->
    <div>
        <!-- 使用 v-on:keyup 可以监听键盘 弹起 状态 -->
        <p>账号：<input type="text" name="username" v-on:keyup="keyUp"></p>

        <!-- 使用 v-on:keyup 可以监听键盘 按下 状态 -->
        <p>密码：<input type="password" name="password" v-on:keydown="keyDown"></p>

        <!-- 
            在监听键盘事件时，我们经常需要检查特定的按键。Vue 为一些常用的按键提供了别名：
                .enter
                .tab
                .delete (捕获“Delete”和“Backspace”两个按键)
                .esc
                .space
                .up
                .down
                .left
                .right
        -->
        <p>监听回车按键：<input type="text" name="msg" v-on:keyup.enter="keyEnter"></p>
    </div>
</template>

<style>

</style>
