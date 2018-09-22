<template>
  <!--只能有一个根div-->
  <div>
    <ul>
      <li v-on:click.once="getItemInfo(index, $event)" v-for="(name, index) in names">{{name}}</li>
    </ul>
  <input type="text" v-on:keyup="getKeyInfo"/>
  <input type="text" v-on:keyup.ctrl="getKeyInfo"/>
    <button @click="addEl">列表增加一个元素</button>
    <p>
      <button @click="getOdd">过滤出奇数</button>
    </p>
    <ul>
      <li v-for="n in wantNums">{{n}}</li>
    </ul>
    <div>
      <p>{{revMsg}}</p>
      <p>{{revMsg}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name:'Events',
    data(){
      return{
        names:['diudiu', 'wuwuliuliu', 'sanduo'],
        nums: [1,2,3,4,5,6,7,8],
        wantNums: [],
        message: "coco jiji"
      }
    },
    methods: {
      getItemInfo(data, event) {
        console.log(data);
        console.log(this.names[data]);
        console.log(event);
      },
      getKeyInfo(event) {
        console.log(event);
      },
      addEl() {
        // this.names.push('kibana');
        var aa = this.names.concat(['jiuge']);    // 未改变原来的变量
        console.log(this.names);
        console.log(aa);
      },
      filterNums(){
        return this.nums.filter(function (num) {
          return num % 2 !== 0;
        })
      },
      getOdd(){
        this.nums.filter(num => {
          if (num % 2 !== 0){
            console.log(this.wantNums);
            this.wantNums.push(num);
          }
        })
      }
    },
    computed:{
      revMsg(){
        return this.message.split('').reverse().join('');
      }
    }
  }
</script>

<styly>

</styly>
