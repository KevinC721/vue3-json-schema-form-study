import { defineComponent, reactive, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue"

const img = require("./assets/logo.png"); // eslint-disable-line

function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: "Kevin"
    });

    const countRef = ref(1);

    setInterval(() => {
      // state.name += " success!";
      // countRef.value += 1;
    }, 1000);

    return () => {
      const number = countRef.value;

      // 使用jsx格式返回节点
      // {} 代表内部使用的是变量
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
          <HelloWorld age={123} />
          <input type="text" v-model={state.name} />
          {renderHelloWorld(12)}
        </div>
      )

      // return h("div", { id: "app" }, [
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
    }
  }
});