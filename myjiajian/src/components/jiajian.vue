<template>
  <div>
    <input v-model="count"/>
    <div>
      <button @click="jia">++</button>
      <button @click="jian">--</button>
      <button @click="reset">置零</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "jiajian",
    data(){
      return{
        count:0
      }
    },
    methods:{
      jia(){
        this.count++
      },
      jian(){
        this.count--
      },
      reset(){
        this.count = 0
      }
    }
  }
</script>

<style scoped>

</style>
