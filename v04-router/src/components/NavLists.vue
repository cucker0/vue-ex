<template>
  <div>
    <ul>
      <li>
        <router-link to="/hello">hello</router-link>
      </li>
      <li>
        <router-link to="/catalog">目录</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link :to="urldata.hello">hello</router-link>
      </li>
      <li>
        <router-link v-bind:to="urldata.catalog">目录</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link :to="{path:'/hello'}">hello</router-link>
      </li>
      <li>
        <router-link :to="{path: urldata.catalog}">目录</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default{
    name:'navlists',
    data(){
      return {
        urldata:{
          hello:'/hello',
          catalog: '/catalog'
        }
      }
    }
  }
</script>

<style scoped>
  ul li{
    display:inline;
    margin:0 20px;
  }

</style>
