<script>

    // 引入组件
    import demo05 from "./05-条件渲染.vue"
    import demo07 from "./07-事件处理.vue"

    export default{
        data() {
            return {
                name: "tom",
                age: 20,
                dynamicSlotName: "dynamicSlot"
            }
        },

        // 组件注册
        components: {
            demo05,
            demo07
        }
    }
</script>

<template>
    <!-- 使用插槽：双标签中的内容会用于替换 slot 标签 -->
    <div>
        <!-- 插槽占坑 -->
        <demo05>
            <hr>
            <h3>匿名插槽</h3>
            <p style="color:blue">使用插槽，插槽其实就是一个占位符</p>
            <button>这是一个按钮</button>
            <p style="color:blue">可以使用多个标签一起替换插槽</p>

            <hr>
            <h3>具名插槽</h3>
            <template v-slot:left><p style="color:blue">具名插槽：v-slot:left</p></template>
            <template v-slot:center><button>具名插槽：v-slot:center</button></template>
            <template v-slot:right><p style="color:blue">具名插槽：v-slot:right</p></template>

            <!-- 渲染作用域使用的是就近原则。比如：父组件和子组件都有 age 属性，在当前组件中使用 {{age}} 时，用的是父组件中的 age -->

            <!-- 默认内容 -->
            <template v-slot:defaultContent></template>

            <!-- 动态插槽名 -->
            <template v-slot:[dynamicSlotName]>
                <hr>
                <h3>动态插槽名</h3>
                <p style="color:blue">使用动态插槽名：v-slot:[dynamicSlotName]</p>
            </template>

            <!-- 
                作用域插槽：
                    作用域插槽也可以理解为带数据的插槽，即带参数的插槽；
                    简单的来说就是子组件提供给父组件的参数，该参数仅限于插槽中使用；
                    父组件可根据子组件传过来的插槽数据来进行不同的方式展现和填充插槽内容；
                    如果是具名插槽 使用：v-slot:name="scopeData"；
            -->
            <template v-slot:scope="scopeData">
            <!-- <template #scope="scopeData"> -->
                <hr>
                <h3>作用域插槽</h3>
                <p>propObj：{{scopeData}}</p>
                <p>propObj.cities{{scopeData.cities}}</p>
                <p>propObj.age：{{scopeData.age}}</p>
                <ul>
                    <li v-for="item in scopeData.cities">{{item}}</li>
                </ul>
            </template>

        </demo05>
    </div>
</template>

<style>

</style>
