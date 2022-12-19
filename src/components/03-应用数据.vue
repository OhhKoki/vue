<script>
    export default {
        // data 选项用于声明响应式属性
        data() {
            return {
                name: "tom",
                age: 18,
                message1: "演示属性监听写法一",
                message2: "演示属性监听写法二",
                message3: "演示即时回调的属性监听",
                teacher: {
                    name: "terry",
                    age: 18
                }
            }
        },

        // methods 选项用于声明方法
        methods: {
            increaseAge() {
                console.log("调用 increaseAge 方法");
                this.age++;
            },

            ageGreaterThan18() {
                console.log("调用 ageGreaterThan18 方法")
                return this.age > 18 ? 'Yes' : 'No';
            }
        },

        // mounted 选项用于声明钩子函数
        mounted() {
            
        },

        // computed 选项用于声明计算属性
        computed: {
            ageGT18() {
                console.log("调用 ageGT18 方法")
                return this.age > 18 ? 'Yes' : 'No';
            }
        },

        // watch 选项用于声明监听属性
        watch: {
            // watch 默认是懒执行的：仅当数据源变化时，才会执行回调。

            // 属性监听写法一
            message1(newValue, oldValue) {
                console.log("调用 message1 方法")
                if(newValue.length < 5 || newValue.length > 10) {
                    console.log("文本内容长度为 5 - 10 之间")
                }
            },
            
            // 属性监听写法二
            message2: {
                handler: function(newValue, oldValue) {
                    console.log("调用 message2 方法")
                    if(newValue.length < 5 || newValue.length > 10) {
                        console.log("文本内容长度为 5 - 10 之间");
                    }
                }
            },

            // 如果想在组件实例创建时会立即调用回调函数，可以使用 immediate 选项
            message3: {
                // 回调函数的初次执行就发生在 created 钩子之前
                handler: function(newValue, oldValue) {
                    console.log("调用 message3 方法");
                    if(newValue.length < 5 || newValue.length > 10) {
                        console.log("文本内容长度为 5 - 10 之间");
                    }
                },
                // 是否需要立即执行回调函数
                immediate: true
            },

            // 如果想侦听所有嵌套的变更，你需要深层侦听器，使用 deep 选项
            // teacher: {
            //     handler: function(newValue, oldValue) {
            //         console.log("调用 teacher 方法");
            //     },
            //     // 是否需要深度监听
            //     // 注意，Vue 会逐层遍历对象（例如本案例的 teacher 对象），并给对象的各个属性（例如本案例的 name，age 属性）添加监听器 ---- 性能开销大
            //     deep: true
            // },

            // 使用字符串优化深度监听器，让其只监听对象中的特定属性，避免进行不必要的遍历
            "teacher.name": {
                handler: function(newValue, oldValue) {
                    console.log("调用 teacher 方法");
                },
                // 是否需要深度监听
                // 注意，Vue 会逐层遍历对象（例如本案例的 teacher 对象），并给对象的各个属性（例如本案例的 name，age 属性）添加监听器 ---- 性能开销大
                deep: true
            }
        }
    }
</script>

<template>
    <div>
        <!-- data 选项 -->
        <p>age：{{ age }}</p>
    </div>

    <div>
        <!-- methods 选项 -->
        <button v-on:click="increaseAge">年龄加一</button>
    </div>

    <div>
        <!-- mounted 选项 -->
    </div>

    <div>
        <!-- computed 选项 -->
        <!-- 只要计算属性依赖的值（响应式属性）没有发生改变，不管调用几次计算属性中定义的方法，计算属性中的方法，只会执行一次 -->
        <p>调用 ageGreaterThan18 方法：{{ ageGreaterThan18() }}</p>
        <p>调用 ageGreaterThan18 方法：{{ ageGreaterThan18() }}</p>
        <p>调用 ageGT18 方法：{{ ageGT18 }}</p>
        <p>调用 ageGT18 方法：{{ ageGT18 }}</p>
    </div>

    <div>
        <!-- watch 选项 -->
        <!-- v-model 用于数据双向绑定，即：当前 input 中输入的值与 data 中定义的 message 进行双向绑定 -->

        <!-- message1 用于演示属性监听写法一 -->
        <p>{{ message1 }}</p>
        <input type="text" v-model="message1">

        <br>

        <!-- message2 用于演示属性监听写法二 -->
        <p>{{ message2 }}</p>
        <input type="text" v-model="message2">

        <br>

        <!-- teacher 用于属性深度监听 -->
        <p>{{ teacher.name }}</p>
        <button v-on:click="teacher.name='tom'">改变 teacher.name 的值</button>
    </div>
</template>

<style>

</style>
