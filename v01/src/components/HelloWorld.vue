<template>
  <div class="hello">
    {{ hello }}
    {{ 1+10 }}
    <!--{{ 哈哈 }}   会报错-->
    <p>{{ "你好呀" }}</p>
    <p>{{ 广东 }}</p>
    <p>{{ 1> 10  ? 'ok': 'error' }}</p>
    <p v-html="hello"></p>
    <p v-text="text"></p>
    <ul>
      <li v-for="(name, index) in names" v-bind:key="index">{{ name }} -- {{index}}</li>
    </ul>

    <ul>
      <li v-for="user in users">user:{{user.name}}  age:{{user.age}}</li>
    </ul>
    <button v-on:click="num += 1">自增</button>
    <span>{{num}}</span>
    <button v-on:click="hand">按钮2</button>

  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello: 'hi vue',
      '广东':'这里在是广东省',
      text: '<p>wo shi text</p>',
      names:['tom', 'cigo', 'hisi'],
      users:[
        {'name':'user1', 'age':10},
        {'name':'user2', 'age':20},
        {'name':'user3', 'age':40},

      ],
      num:1,
    }
  },
  methods:{
    hand(){
      alert("我是一个事件");
    }
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
