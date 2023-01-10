import { createApp } from 'vue'
import App01 from './components/01-创建应用.vue'
import App02 from './components/02-模版语法.vue'
import App03 from './components/03-应用数据.vue'
import App04 from './components/04-类与样式.vue'
import App05 from './components/05-条件渲染.vue'
import App06 from './components/06-列表渲染.vue'
import App07 from './components/07-事件处理.vue'
import App08 from './components/08-表单绑定.vue'
import App09 from './components/09-组件基础.vue'

/**
 * 创建实例：
 *      1、Vue 应用通过 createApp() 函数创建一个新的 "应用实例"；
 *      2、传入 createApp() 函数的对象实际上是一个组件，每个应用都需要一个 “根组件”（即：App01 为根组件）；
 *      3、应用实例并不只限于一个，createApp() 允许在同一个页面中创建多个共存的 Vue "应用实例"，而且 "应用实例" 都拥有自己的用于配置和全局资源的作用域；
 */
// let applicationInstance = createApp(App01);
// let applicationInstance = createApp(App02);
// let applicationInstance = createApp(App03);
// let applicationInstance = createApp(App04);
// let applicationInstance = createApp(App05);
// let applicationInstance = createApp(App06);
// let applicationInstance = createApp(App07);
// let applicationInstance = createApp(App08);
let applicationInstance = createApp(App09);

/**
 * 实例挂载：
 *      1、应用实例可以通过 mount() 函数挂载在一个 DOM 元素上，该函数接收一个 "容器" ，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串；
 *      2、应用实例只有挂载在 DOM 元素上才会渲染出来（应用实例可以理解为根据配置实例化得到的对象，对象内容想要展示出来，需要依附于一个 HTML 元素）；
 *      3、容器元素自己将不会被视为应用的一部分；
 *      4、返回值是根组件实例而非应用实例；
 */
let componentInstance = applicationInstance.mount("#app");
