<template>
  <div>
    <!--专家-->
    <!--路由传参-->
    专家:{{ $route.params.count }}-- {{$route.params.q}} -- {{$route.params.q.name}}
    <div>
      <p v-for="c in $route.params.com">{{c}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "master",
    data(){
      return {

      }
    }
}
</script>

<style scoped>

</style>
