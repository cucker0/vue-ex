<template>
  <div>
    parent
    <hr>
    <Child>
      <!--<p slot="s1">父：我是插槽1</p>-->
      <div slot="s1">
        <p>插槽...</p>
        <p>父：我是插槽2</p>
      </div>
      <p slot-scope="key" slot="s2">父：我是插槽2--{{key.fofa}}</p>
    </Child>
  </div>
</template>

<script>
  import Child from './Child'

  export default {
    name: "Parent",
    components: {Child},
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
