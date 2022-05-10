<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
  <p>{{ name }} : {{ name2 }}</p>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  computed,
  watchEffect,
} from "vue";
import HelloWorld from "./components/HelloWorld.vue";

interface Config {
  name: string;
}

export default defineComponent({
  name: "App",
  props: {
    age: {
      type: Number as PropType<number>,
    },
    config: {
      type: Object as PropType<Config>,
      // 设置当前值为必传项
      required: true,
    },
  },
  components: {
    HelloWorld,
  },
  // data() {
  //   return {
  //     name: "jokcy",
  //   };
  // },
  setup() {
    // const state = reactive({
    //   name: "jokcy",
    // });

    const nameRef = ref("jocky");

    setInterval(() => {
      // name += "1";
      // nameRef.value += "1";
    }, 1000);

    const computedNameRef = computed(() => {
      return nameRef.value + "2";
    });

    watchEffect(() => {
      console.log(nameRef.value);
    });

    return {
      name: nameRef,
      name2: computedNameRef,
    };
  },
  mounted() {
    this.config;
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
