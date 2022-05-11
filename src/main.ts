/*
 * @Author: caiwenkai
 * @Date: 2022-05-10 16:00:04
 * @LastEditors: caiwenkai
 * @LastEditTime: 2022-05-11 10:43:34
 * @Discription: 
 * @FilePath: \vue3-json-schema-form-study\src\main.ts
 */
import { createApp, defineComponent, h, reactive, ref } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

import App from "./App"

const app = createApp(App)

app.use(ElementPlus)

// 由于在 h 函数中，img 标签内的 src 属性不会像 .vue 文件中的 template 模板中一样去查找对应文件的想怼路径，因此需要通过外部直接引入的方式来实现。
// 但是在ts中配置了不可以使用import，因此需要通过require的方式来引入外界图片
// const img = require("./assets/logo.png"); // eslint-disable-line

// 转移到APP.tsx内了
// const App = defineComponent({
  // render 可以替换成下面的setup内部返回一个函数的形式
  // render() {
  //   // h("节点", {属性a: 值}, [子节点内容，如果内容是节点时，需要通过h函数创建])
  //   return h("div", { id: "app" }, [
  //     h("img", {
  //       alt: "Vue logo",
  //       src: img,
  //     }),
  //     h(HelloWorld, {
  //       msg: "Welcome to Your Vue.js + TypeScript App",
  //       age: 12,
  //     }),
  //   ]);
  // },
//   setup() {
//     const state = reactive({
//       name: "Kevin"
//     });

//     const countRef = ref(1);

//     setInterval(() => {
//       // state.name += " success!";
//       // countRef.value += 1;`
//     }, 1000);

//     return () => {
//       // h("节点", {属性a: 值}, [子节点内容，如果内容是节点时，需要通过h函数创建])
//       return h("div", { id: "app" }, [
//         h("img", {
//           alt: "Vue logo",
//           src: img,
//         }),
//         h(HelloWorld, {
//           msg: "Welcome to Your Vue.js + TypeScript App",
//           age: 12,
//         }),
//         h('p', state.name),
//         h('div', countRef.value)
//       ]);
//     }
//   }
// });

app.mount("#app");
