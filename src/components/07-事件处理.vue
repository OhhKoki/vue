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
        },

        // 一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute
        // props 会暴露到 this 上（可以理解为相当于在 data 选项中定义了这个属性，用法跟 data 选项中的属性一样）
        
        // 声明 props 的方式一：使用字符串数组
        // props: ["propA", "propB"]

        // 声明 props 的方式二：使用对象
        // 对于以对象形式声明中的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数
        // 使用对象形式时，可以进行额外的操作，例如：指定属性的类型、默认值、是否必传等

        /**
         * 单向数据流：
         *      所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。
         *      这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。
         */

        props: {
            // 单一类型检查（如果传过来的值为 `null` 或 `undefined` 时，则会跳过任何类型检查）
            propA: String,
            // 多种类型检查
            propB: [String, Number],
            // 类型检查 & 默认值
            propC: {
                type: Number,
                // 当父组件没有传值过来时，使用 default 指定的值
                default: 100
            },
            // 属性是否必传
            propD: {
                type: String,
                // 必传，且类型必须是 String
                required: true
            },
            // 属性的类型为对象
            propE: {
                type: Object,
                // 对象或者数组应当用工厂函数返回
                default() {
                    return {};
                }
            },
            // 属性的类型为数组
            propF: {
                type: Array,
                // 对象或者数组应当用工厂函数返回
                default() {
                    return [];
                }
            }
        },

        mounted() {
            console.log("子组件访问父组件");
            console.log(this.$parent);

            console.log("子组件访问父组件中的对象");
            console.log(this.$parent.propE);

            console.log("子组件访问根组件");
            console.log(this.$root);
        }
    }
</script>

<template>
    <!-- 事件监听 -->
    <div>
        <!-- 
            1、事件监听是什么？怎么用：
                事件监听是什么：是指当用户与网页发生交互行为时，通过监听器监听到这一行为，并执行对应的 JS 代码。
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

    <!-- 传递 props -->
    <div>
        <h3>传递 props</h3>
        <p>父组件传递过来的数据（propA）：{{propA}}</p>
        <p>父组件传递过来的数据（propB）：{{propB}}</p>
        <p>父组件传递过来的数据（propC）：{{propC}}</p>
        <p>父组件传递过来的数据（propD）：{{propD}}</p>
        <p>父组件传递过来的数据（propE）：{{propE}}</p>
        <p>父组件传递过来的数据（propF）：{{propF}}</p>
    </div>
</template>

<style>

</style>
