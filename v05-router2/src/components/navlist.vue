<template>
  <div>
    <ul>
      <li>
        <router-link exact to="/">首页</router-link>
      </li>
      <li>
        <router-link :to="{ path:'/course' }">课程</router-link>
      </li>
      <li>
        <!--<router-link to="/master">专家</router-link></li>-->
        <router-link :to="{name:'master', params:{count:100, q:obj, com:comp}}">专家</router-link></li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "navlist",
    data(){
      return{
        obj:{name:'qq'},
        comp:['alibaba', 'baidu', 'tengxun'],
      }
    }
  }
</script>

<style scoped>

  div{
    margin: 0;
    width: 100%;
    height: 50px;
    background: #f1f1f1;
  }

  ul{
    list-style: none;
  }

  li{
    margin: 0 20px;
    display: inline;
    line-height: 50px;
    float: left;
  }

  /*a:hover, a:visited, a:link, a:active {*/
    /*text-decoration:none;*/
    /*color:#333;*/
  /*}*/

  a {
    text-decoration:none;
    /*color:#333;*/
  }

</style>
