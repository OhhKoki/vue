<script>
    export default{
        data() {
            return {
                name: "tom",
                age: 20,
                msg: "hello world",
                username: "zhangsan",
                introduce: "i am zhangsan",
                gender: "male",
                hobbit: [],
                city: "1",
                cities: ['1','2'],
                options: [
                    {text: '北京市', value: '1'},
                    {text: '广州市', value: '2'},
                    {text: '天津市', value: '3'}
                ],
                lazyText: "lazy text",
                numberText: 13728762021,
                trimText: "trim text"
            }
        },

        methods: {
            changeMsg(e) {
                this.msg = e.target.value;
            }
        }
    }
</script>

<template>
    <div>
        <h3>text</h3>
        <!-- 在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦，例如 -->
        <p>msg：{{msg}}</p>
        <input type="text" v-bind:value="msg" v-on:input="changeMsg">
        <!-- v-model 指令帮我们简化了这一步骤 -->
        <p>msg：{{msg}}</p>
        <input type="text" v-model="msg">

        <!-- 
            对于表单来说，表单中的表单一共有三大类：input、select、textarea，而 v-model 会针对不同的表单项自动绑定不同的 DOM 属性和事件：
                1）文本类型的 <input> 和 <textarea> 元素会绑定 value 属性并侦听 input 事件；
                2）<input type="radio"> 和 <input type="checkbox"> 会绑定 checked 属性并侦听 change 事件；
                3）<select> 会绑定 value 属性并侦听 change 事件；
        -->

        <h3>textarea</h3>
        <p>introduce：{{introduce}}</p>
        <!-- 注意在 <textarea> 中是不支持插值表达式的。请使用 v-model 来替代 -->
        <textarea name="introduce" cols="18" rows="2" v-model="introduce"></textarea>

        <!--
            radio：
                1）name：
                    具有相同 name 属性值的 radio 会互斥（不指定 name 属性不具有互斥效果，所以该属性必须指定）；
                2）value：
                    指定选中的单选框提交数据时，提交什么值（不指定 value 时，会提交一个 on，服务器都不知道是啥，所以该属性必须指定）；
                3）案例：
                    <input type="radio" id="male" name="gender" value="male">
                    <input type="radio" id="female" name="gender" value="female">
        -->
        <h3>radio</h3>
        <p>gender：{{gender}}</p>
        <!-- 在 radio 上使用 v-model 时，不需要再指定 name 属性（v-model 的值相当于 name） -->
        所属性别：
        <input type="radio" id="male" v-model="gender" value="male">
        <input type="radio" id="female" v-model="gender" value="female">

        <!--
            checkbox：
                1）name：
                    具有相同 name 代表是同一组 checkbox；
                2）value：
                    指定选中的单选框提交数据时，提交什么值（不指定 value 时，会提交一个 on，服务器都不知道是啥，所以该属性必须指定）；
                3）案例：
                    <input type="checkbox" id="basketball" name="hobbit" value="1"> <label for="basketball">篮球</label>
                    <input type="checkbox" id="football" name="hobbit" value="2"> <label for="football">足球</label>
                    <input type="checkbox" id="volleyball" name="hobbit" value="3"> <label for="volleyball">排球</label>
        -->
        <h3>checkbox</h3>
        <p>hobbit：{{hobbit}}</p>
        <!-- 在 checkbox 上使用 v-model 时，不需要再指定 name 属性（v-model 的值相当于 name） -->
        兴趣爱好：
        <input type="checkbox" id="basketball" v-model="hobbit" value="basketball"> <label for="basketball">篮球</label>
        <input type="checkbox" id="football" v-model="hobbit" value="football"> <label for="football">足球</label>
        <input type="checkbox" id="volleyball" v-model="hobbit" value="volleyball"> <label for="volleyball">排球</label>

        <!--
            select：
                1）name：
                    指定下拉选的 name 属性；
                2）value：
                    不指定 value 属性时，提交上去的是 option 对应的文本值；
                3）multiple：
                    由单选变成多选
                4）案例：
                    <select name="city" >
                        <option value="1">北京市</option>
                        <option value="2">广州市</option>
                        <option value="3">天津市</option>
                    </select>
        -->
        <h3>single select</h3>
        <p>city：{{city}}</p>
        所属城市：
        <select v-model="city" >
            <option value="1">北京市</option>
            <option value="2">广州市</option>
            <option value="3">天津市</option>
        </select>

        <!-- 值动态绑定 -->
        <h3>multiple select</h3>
        <p>cities：{{cities}}</p>
        向往城市：
        <!-- 添加 multiple 就变成了多选，去掉就跟上面的 city 一样变成单选；另外此处使用 for 进行展示 -->
        <select v-model="cities" multiple>
            <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
        </select>
    </div>

    <!-- 修饰符 -->
    <div>
        <!-- .lazy：默认情况下，v-model 会在每次 input 事件后更新数据，可以添加 lazy 修饰符来改为在每次 change 事件后更新数据 -->
        <h3>.lazy</h3>
        <p>lazyText：{{lazyText}}</p>
        <input type="text" v-model.lazy="lazyText">

        <!-- 
            1）.number：如果你想让用户输入自动转换为数字，你可以在 v-model 后添加 .number 修饰符来管理输入；
            2）如果该值无法被 parseFloat() 处理，那么将返回原始值；
            3）.number 修饰符会在输入框有 type="number" 时自动启用；
        -->
        <h3>.number</h3>
        <p>numberText：{{numberText}}</p>
        <p>tepe of numberText：{{typeof numberText}}</p>
        <input type="text" v-model.number="numberText">

        <!-- .trim：如果你想要默认自动去除用户输入内容中两端的空格，你可以在 v-model 后添加 .trim 修饰符 -->
        <h3>.trim</h3>
        <p>trimText：{{trimText}}</p>
        <input type="text" v-model.trim="trimText">
    </div>
</template>

<style>
    h3 {
        color: red;
    }
</style>
