<template>
  <div>
    儿子:{{getCount}}
    {{toson}}
    <div>
      <button @click="jianjian">count--</button>
      <button @click="jian">2count--</button>
    </div>
    <div>
      <input type="text"  v-model="childmsg" />
      <button @click="toparent">
        发送
      </button>
    </div>

  </div>
</template>

<script>
  export default{
    name:"Child",
    data(){
      return{
        childmsg: "收到 收到 ",
        msgbox:''
      }
    },
    props:{
      toson:{
        type:String,
        default:''
      }
    },
    methods:{
      toparent(){
        this.$emit("info", this.childmsg)
      },
      jianjian(){
        this.$store.commit('jianjian')
      },
      jian(){
        this.$store.dispatch('jian')
      }
    },
    computed:{
      getCount(){
        // return this.$store.state.count
        return this.$store.getters.getcou
      },

    }
  }
</script>

<style scoped>

</style>
