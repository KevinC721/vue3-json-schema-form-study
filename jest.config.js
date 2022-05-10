// 测试的配置
module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    // 通过 vue-jest 转义 .vue 文件
    "^.+\\.vue$": "vue-jest",
  },
};
