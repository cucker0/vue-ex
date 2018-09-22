<template>
  <div>
    son
    <slot name="s1"></slot>
    <slot name="s2" fofa="我是子组件传递数据"></slot>
  </div>
</template>

<script>
  export default {
    name: "Child",
    data() {
      return {
        fa:"我是子组件传递数据",
      }
    }
  }
</script>

<style scoped>

</style>
