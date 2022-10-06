<template>
<Editor></Editor>
</template>

<script>
import { ref } from "@vue/reactivity";
import data from "./data.json";
import Editor from './packages/editor.jsx'// 渲染区域（包括组件区、渲染区、属性菜单区）
export default {
  components:{
    Editor
  },
  setup() {
    const state = ref(data);

    return {
      state
    };
  },
};
</script>

<style lang="scss">
</style>
