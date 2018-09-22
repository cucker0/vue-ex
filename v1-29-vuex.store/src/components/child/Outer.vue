<template>
	<div>
    Outer：{{getCount}}
    <div>
      <button @click="increment">count ++</button>
      <button @click="add">2count ++</button>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Outer",
    data(){
		  return{

      }
    },
    computed:{
		  getCount(){
		    return this.$store.state.count
        // return this.$store.getters.getcou
      }

    },
    methods:{
      increment(){
        this.$store.commit('increment')
      },
      add(){
        this.$store.dispatch('add')
      }
    }
	}
</script>

<style scoped>

</style>
