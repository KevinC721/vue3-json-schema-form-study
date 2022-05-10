<template>
  <div>{{ age }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true, // 当把props提到外部来通过对象定义时，在defineComponent中通过变量引入以后，即使对变量设置require:true，当使用该变量时还是会提示该变量可能为undefined，需要在外部的PropsType对象后面加as const
  },
} as const; // 由于在defineComponent内部直接定义的props底层会将其识别为ReadOnly，当我们在外部通过对象定义，代码执行到外部对象时，没有标识可以将其识别为ReadOnly，因此我们可以通过as const来讲该对象转换为Readonly对象

export default defineComponent({
  name: "HelloWorld",
  // props: {
  //   msg: String,
  //   age: {
  //     type: String,
  //     required: true,
  //   },
  // },
  props: PropsType,
  mounted() {
    this.age;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
