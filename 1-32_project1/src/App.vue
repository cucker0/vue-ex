<template>
  <div id="app">
    <headers/>
    <router-view/>
    <footers/>
  </div>
</template>

<script>
import headers from './components/header'
import footers from './components/footer'
export default {
  name: 'App',
  components:{
    headers,
    footers
  }
}
</script>

<style>

</style>
