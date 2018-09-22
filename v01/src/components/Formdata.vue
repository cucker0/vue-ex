<template>
  <div>
    number:<input v-model.number="msg" type="number"/>
    <p>{{msg}}</p>
    string(延迟2秒显示):<input v-model="qu"/>
    <p>{{an}}</p>
  </div>
</template>
<script>
  export default{
    name:'formdata',
    data(){
      return {
        msg:'',
        qu:'',
        an:'',
      }
    },
    watch:{   //侦听事件
      msg:function (data) {
        console.log(data);
      },
      qu:function (data) {
        setTimeout(()=>{
          this.an = data;
          }, 2000)

      }
    }
  }
</script>
<style>

</style>
