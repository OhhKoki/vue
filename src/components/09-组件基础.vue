<script>

    /**
     * 组件：带有名称的可复用实例，是某一单一功能的封装；
     * 
     * 组件就类似于 Java 中一个 JavaBean 下，可以存在多个别的 JavaBean 的引用，例如这种结构：
     * 
     *      public class 保单类 {
     *          private 投保人类 a;
     *          private 被保人类 b;
     *          private 保单明细 c;
     *      }
     * 
     * 即：一个大功能，由多个小功能组成；
     */

    // 组件引入语法：import 组件别名 from '组件路径'
    import demo05 from './05-条件渲染.vue'
    import demo07 from './07-事件处理.vue'

    export default{
        /**
         * 为什么 default 对象中的 data 必须是一个函数，并且要返回一个对象的原因：为了组件进行多次复用时，每个组件都能拿到一个独立的 data 数据，防止数组污染（类似于：局部变量和全局变量）
         */
        data() {
            return {
                name: "tom",
                age: 20,
                // data 中声明的属性，可以传递到子组件中
                propA: "propA",
                propC: 10,
                propD: "propD",
                propE: {
                    name: "zhangsan",
                    age: 18
                },
                propF: ["北京","上海","广州"]
            }
        },

        components: {
            // 组件引入后还不能直接使用，需要将组件暴露给模板（我们需要在 components 选项上注册它。这个组件将会以其注册时的名字作为模板中的标签名）
            demo05,
            demo07
        },

        mounted() {
            console.log("父组件访问子组件");
            console.log(this.$refs);
        }
    }
</script>

<template>
    <!-- 组件复用 -->
    <div>
        <!-- 要复用对应的组件时，直接通过 <组件别名></组件别名> 的方式使用-->
        <hr>
        <h3>展示 demo05 组件</h3>
        <demo05 ref="demo05"></demo05>
    </div>

    <!-- 在当前的 "09-组件基础" 中，"demo05" 为 "09-组件基础" 的子组件  -->
    <!-- 传递 props：将父组件中的数组传递到自组件中 -->
    <div>
        <!-- 当一个值被传递给 prop 时，它将成为该组件实例上的一个属性。该属性的值可以像其他组件属性一样，在模板和组件的 this 上下文中访问 -->
        <!-- 可以使用动态绑定或者直接传值 -->
        <hr>
        <h3>展示 demo07 组件</h3>
        <demo07 ref="demo07" v-bind:propA="propA" propB="hello props" v-bind:propD="propD" v-bind:propE="propE" v-bind:propF="propF"></demo07>
    </div>

    <!-- 父子组件相互访问 -->
    <div>
        <!-- 
            父组件访问自组件：$refs 
                1）在子组件标签上添加 ref 属性（类似于 id 的作用）
                2）父组件中使用 this.$refs 即可访问到对应的子组件
                3）案例：
                    <demo05 ref="demo05"></demo05>
                    console.log("父组件访问子组件");
                    console.log(this.$refs);
        -->

        <!-- 
            子组件访问父组件：$parent 
                1）案例：
                    console.log("子组件访问父组件");
                    console.log(this.$parent);

                    console.log("子组件访问父组件中的对象");
                    console.log(this.$parent.propE);

        -->

        <!-- 
            子组件访问跟组件：$root 
                1）案例：
                    console.log("子组件访问根组件");
                    console.log(this.$root);
        -->
    </div>
</template>

<style>

</style>
