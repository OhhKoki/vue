<script>
    export default {
        // data 选项用于声明响应式状态
        data() {
            return {
                name: "tom",
                age: 18
            }
        },

        // methods 选项用于声明方法
        methods: {
            increaseAge() {
                // Vue 自动为 methods 中的方法绑定了永远指向组件实例的 this（通过 this 可以直接调用到 data 中定义的状态）
                this.age++;
            }
        },

        // mounted 选项用于声明钩子函数
        mounted() {
            // 在其他方法或是生命周期中也可以调用方法
            // this.increment()
        },

        // computed 选项用于声明计算属性
        computed: {
            ageGT18() {
                console.log("调用 ageGT18 方法")
                return this.age > 18 ? 'Yes' : 'No'
            }
        }
    }
</script>

<template>
    <div>
        <!-- 使用 data 选项中定义的状态 -->
        <p>age：{{ age }}</p>

        <!-- 使用 methods 选项中定义的方法 -->
        <button v-on:click="increaseAge">年龄加一</button>

        <!-- 使用 computed 选项中定义的方法 -->
        <!-- 当成属性来使用，即：计算属性本质上就是一个具有缓存性质的属性 -->
        <!-- 只要计算属性依赖的值没有发生改变，不管调用几次计算属性中定义的方法，计算属性中的方法，只会执行一次 ---- 缓存 -->
        <p>age greater than 18 ：{{ ageGT18 }}</p>
        <p>age greater than 18 ：{{ ageGT18 }}</p>
        <p>age greater than 18 ：{{ ageGT18 }}</p>
    </div>
</template>

<style>

</style>
