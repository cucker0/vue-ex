<template>
  <div>
    <p v-bind:class="{active:isActive, 'demo':Demo}">哈哈</p>
    <p v-bind:class="classObj">go go go </p>
    <ul>
      <li v-for="(name, index) in names" :class="[{active:index%2 == 0}, 'info-' + id]">{{name}}</li>
    </ul>
    <p :style="styobj">
      内联样式
    </p>
  </div>
</template>

<script>
  export default{
    name: 'Styles',
    data(){
      return {
        isActive:true,
        Demo:true,
        classObj: {
          active: true,
          demo: true,
        },
        names:['iwen', 'ice', 'ime', 'frank'],
        id: 10,
        styobj:{
          color:'red',
          fontSize: '30px'
        }
      }
    }
  }

</script>

<style>
  .active {
    color: red;
  }
  .demo{
    font-size: larger;
  }

</style>
