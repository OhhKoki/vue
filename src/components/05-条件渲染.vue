<script>
    export default{
        data() {
            return {
                name: "tom",
                age: 18,
                cities: ["北京","上海","广州"]
            }
        },

        computed: {
            ageGT18() {
                return this.age > 18;
            },

            ageLT18() {
                return this.age < 18;
            },

            ageEQ18() {
                return this.age == 18;
            }
        }
    }
</script>

<template>
    <!-- v-if & v-else-if & v-else -->
    <div>
        <!-- 
            1、v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染；
            2、v-else-if 和 v-else 用法等同于 java 的 else if 和 else；
            3、一个 v-else 元素必须跟在一个 v-if 或者 v-else-if 元素后面，否则它将不会被识别；
            4、一个 v-else-if 的元素必须紧跟在一个 v-if 或一个 v-else-if 元素后面，否则它将不会被识别；
            5、当 v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行；
        -->

        <p v-bind:style="{color:'red'}">使用 v-if 展示</p>

        <p v-if="ageGT18">年龄大于18</p>
        <p v-else-if="ageEQ18">年龄等于18</p>
        <p v-else="ageLT18">年龄小于18</p>
        <input type="text" v-model="age">
    </div>

    <!-- template 上的 v-if & v-else-if & v-else -->
    <div>
        <!-- 
            因为 v-if 是一个指令，它必须依附于某个元素。但如果我们想要切换不止一个元素呢？在这种情况下我们可以在一个 <template> 元素上使用 v-if，
            这只是一个不可见的包装器元素，最后渲染的结果并不会包含这个 <template> 元素。
        -->

        <p v-bind:style="{color:'red'}">使用 template 包裹</p>

        <template v-if="ageGT18">
            <p>年龄大于18</p>
            <p>年龄大于18</p>
        </template>

        <template v-else-if="ageEQ18">
            <p>年龄等于18</p>
            <p>年龄等于18</p>
        </template>

        <template v-else="ageLT18">
            <p>年龄小于18</p>
            <p>年龄小于18</p>
        </template>
    </div>

    <!-- v-show（用法和 v-if 一样，即：条件为真时展示） -->
    <div>
        <!-- 
            v-if & v-show 的区别：
                1、v-if 是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染；
                2、v-show 元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换；
                3、总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适；
        -->

        <p v-bind:style="{color:'red'}">使用 v-show 展示</p>

        <p v-show="ageGT18">年龄大于18</p>
        <p v-show="ageEQ18">年龄等于18</p>
        <p v-show="ageLT18">年龄小于18</p>
    </div>

    <div>
        <!-- 匿名插槽 -->
        <!-- 没有使用 template 包裹的标签，全放进这个匿名插槽中 -->
        <!-- <slot></slot> -->
        <!-- 匿名插槽就是 name 属性为 default 的插槽 -->
        <slot name="default"></slot>

        <!-- 具名插槽 -->
        <!-- 只有 <template v-slot:left></template> 包裹的标签用于替换 <slot name="left"></slot> 这个插槽 -->
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>

        <!-- 默认内容 -->
        <slot name="defaultContent">
            <hr>
            <h3>默认内容</h3>
            <p style="color:blue">在外部没有提供任何内容的情况下，slot 标签中间的内容为插槽指定默认内容</p>
        </slot>

        <!-- 动态插槽名 -->
        <slot name="dynamicSlot"></slot>

        <!-- 作用域插槽 -->
        <slot name="scope" v-bind:cities="cities" v-bind:age="age"></slot>
    </div>
</template>

<style>

</style>
