<template>
  <div>
    <ul>
      <li>
        <router-link :to="{path: '/'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{path: '/ele'}">ele</router-link>
      </li>
      <li>
        <router-link :to="{path: '/banar'}">走马灯</router-link>
      </li>
      <li>
        <router-link :to="{path: '/container'}">Container 布局容器</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
ul{
  list-style: none;
}

li{
  margin: 0 20px;
  display: inline;
  line-height: 50px;
  float: left;
}
</style>
