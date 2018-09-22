<template>
  <div>
    <Navlist />
    <div>
      所有课程
    </div>
    <div class="left">
      <ul>
        <li><router-link to="/course/java">Java</router-link></li>
        <li><router-link to="/course/web">前端</router-link></li>
        <li><router-link to="/course/android">Android</router-link></li>
      </ul>
    </div>
    <div class="right">
      <!--好好-->
      <!--视图区域-->
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navlist from './navlist'
  export default {
    name: "course",
    data(){
      return {

      }
    },
    components:{
      Navlist
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }

  .left, .right{
    float: left;
  }

  .right{
    margin: 0 50px;
  }
</style>
