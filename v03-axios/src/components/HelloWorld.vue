<template>
  <div class="hello">
    <div>
      <ul>
        <li v-for="news in newsData">
          <p><a :href="news.url" target="_blank">{{news.title}}</a>
            </p>
          <img :src="news.thumbnail_pic_s" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newsData:[]
    }
  },
  created(){
    // this.$axios("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
    // this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30")
    this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
      params:{
        type:"junshi",
        count:30
      }
    })
      .then(res =>{
        this.newsData = res.data.result.data;
        console.log(res);
      })
      .catch(function(error){
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
