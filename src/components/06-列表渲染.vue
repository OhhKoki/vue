<script>
    export default{
        data() {
            return {
                teachers: [
                    {
                        name: "张三",
                        age: 20
                    },
                    {
                        name: "李四",
                        age: 20
                    },
                    {
                        name: "王五",
                        age: 20
                    }
                ],
                student: {
                    name: "terry",
                    age: 20,
                    gender: "man"
                },
                cities: ["北京","上海","广州"]
            }
        },
        
        methods: {
            cityPush() {
                // push()：在数组的末尾添加元素
                // this.cities.push("深圳");
                this.cities.push("深圳","厦门","海南");
            },

            cityPop() {
                // pop()：在数组的末尾删除元素
                this.cities.pop();
            },

            cityShift() {
                // shift()：在数组的头部删除元素
                this.cities.shift();
            },

            cityUnshift() {
                // unshift()：在数组的头部添加元素
                // this.cities.unshift("杭州");
                this.cities.unshift("杭州","武汉","长沙");
            },

            splice(index) {
                this.cities.splice(index);
            },

            splice(index,length) {
                this.cities.splice(index,length);
            },

            splice(index,length,item) {
                this.cities.splice(index,length,item);
            }
        }
    }
</script>

<template>
    <!-- v-for & 数组 -->
    <div>
        <!-- v-for 指令的值需要使用 item in items 形式的特殊语法，其中 items 是源数据的数组（对象），而 item 是迭代项的别名 -->
        <!-- 另外需要加上 :key="item"，其中 item 为每次遍历得到的变量 -->
        <!-- :key 为 v-bind:key 的缩写 -->

        <p>第一个参数表示本轮遍历的元素：(item) in items</p>
        <ul>
            <li v-for="item in teachers" :key="item">姓名：{{item.name}}；年龄：{{item.age}}</li>
        </ul>

        <p>第二个参数表示索引：(item, index) in items</p>
        <ul>
            <li v-for="(item, index) in teachers" :key="item">姓名：{{item.name}}；年龄：{{item.age}}；索引：{{index}}</li>
        </ul>
    </div>

    <!-- v-for & 对象 -->
    <div>
        <!-- v-for 也可以用来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定 -->

        <p>第一个参数表示属性值：(value) in items</p>
        <ul>
            <li v-for="value in student" :key="value">{{value}}</li>
        </ul>

        <p>第二个参数表示属性名：(value, key) in items</p>
        <ul>
            <li v-for="(value, key) in student" :key="value">{{key}} : {{value}}</li>
        </ul>

        <p>第三个参数表示索引：(value, key, index) in items</p>
        <ul>
            <li v-for="(value, key, index) in student" :key="value">{{key}} : {{value}} : {{index}}</li>
        </ul>
    </div>

    <!-- 在 v-for 里使用范围值 -->
    <div>
        <p>v-for 可以直接接受一个整数值，相当于遍历一个 1-n 的数组（从 1 开始）</p>
        <ul>
            <li v-for="num in 3" :key="num">{{num}}</li>
        </ul>
    </div>

    <!-- <template> 上的 v-for -->
    <div>
        <p>template 上的 v-for</p>
        <ul>
            <template v-for="item in teachers" :key="item">
                <li>{{item.name}}</li>
                <li>{{item.age}}</li>
            </template>
        </ul>
    </div>

    <!-- 突然报错： Failed to resolve component: ui
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. (2)
 -->
    <!-- 通过 key 管理状态 -->
    <div>
        <p>为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，最好为每个元素对应的块提供一个唯一的 key，例如：v-bind:key="item.name"</p>
        <ui>
            <!-- <li v-for="item in teachers" :key="item.name">姓名：{{item.name}}；年龄：{{item.age}}</li> -->
        </ui>

        <p>template 上也可以添加 key，例如：v-bind:key="item.name"</p>
        <template v-for="item in teachers" :key="item">
            <ui>
                <li>姓名：{{item.name}}</li>
                <li>年龄：{{item.age}}</li>
            </ui>
        </template>

        <!-- key 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 v-for 的 key -->
    </div>

    <!-- 数组变化侦测 -->
    <div>
        <!-- 
            数组的常用方法：
                1、push()
                2、pop()
                3、shift()
                4、unshift()
                5、splice()
                6、sort()
                7、reverse()
        -->

        <!-- 1、push() -->
        <p>数组的常用方法</p>
        <ul>
            <li v-for="item in cities" :key="item">{{item}}</li>
        </ul>

        <p>
            <button v-on:click="cityPush">push()：在数组的末尾添加元素</button>
        </p>

        <p>
            <button v-on:click="cityPop">pop()：在数组的末尾删除元素</button>
        </p>

        <p>
            <button v-on:click="cityShift">shift()：在数组的头部删除元素</button>
        </p>

        <p>
            <button v-on:click="cityUnshift">unshift()：在数组的头部添加元素</button>
        </p>

        <!-- 
            splice(index,number,[item])：
                index：要操作的数组开始下标；
                number:：替换/删除的元素个数；
                item：替换的值，删除操作的话 item 为空；
        -->

        <!-- 删除 -->
        <p>
            <button v-on:click="splice(2)">splice(index)：表示删除元素，删除范围为：[index,数组末尾]，此处 index 为 2</button>
        </p>

        <!-- 删除指定个数 -->
        <p>
            <button v-on:click="splice(2,2)">splice(index,number)：表示删除元素，删除范围为：从 index 开始，删除 number 个元素，此处 index 为 2，number 为 2</button>
        </p>

        <!-- 删除个数为零时，数组保持不变 -->
        <p>
            <button v-on:click="splice(2,0)">splice(index,0)：如果 number 为 0 则数组不变</button>
        </p>

        <!-- 替换 -->
        <p>
            <button v-on:click="splice(2,2,'替换')">splice(index,number)：表示替换元素，删除范围为：从 index 开始，删除 number 个元素，此处 index 为 2，number 为 2</button>
        </p>

        <!-- 添加 -->
        <p>
            <button v-on:click="splice(2,0,'天津')">splice(index,0,item)：如果 number 为零，则存在 item，表示在 index 前插入 item</button>
        </p>
    </div>
</template>

<style>

</style>
