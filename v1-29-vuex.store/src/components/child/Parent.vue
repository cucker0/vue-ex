<template>
  <div>
    父亲: {{msgbox}}
    <div>
      <input type="text" v-model="writemsg" />
      <button @click="sendmsg">发送</button>
    </div>

    <br/>

    <Child :toson="msg" @info="handlerMsg"/>

    <br>
    <Outer />
  </div>
</template>

<script>
  import Child from './Child'
  import Outer from './Outer'

  export default{
    name: 'Parent',
    data(){
      return{
        msg: "儿子儿子，我是你爸爸",
        msgbox:'',
        writemsg:''
      }
    },
    components:{
      Child,
      Outer,
    },
    methods:{
      handlerMsg(data){
        this.msgbox = data
      },
      sendmsg(){
        this.msg = this.writemsg
      }
    }
  }
</script>

<style scoped>

</style>
