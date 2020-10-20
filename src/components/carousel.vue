/* 轮播图 */
<template>
<div id="big">
  <div id="lb">
    <ul :style="'margin-left:-'+offset+'px'">
      <li v-for="(item,index) in Img" :key="index" ><img :src='item.src' alt=item.number></li>
    </ul>
  </div>
  <div id="miaoshu">
    <p><span id="ome">{{num+1}}</span><span id="twm">/4</span></p>
    <p v-if="num==0">11111111111111111</p>
    <p v-if="num==1">222222222222222222</p>
    <p v-if="num==2">333333333333333333</p>
    <p v-if="num==3">344444444444444444444</p>
  </div>
  <div @click="last" id="las" ></div>
  <div @click="next" id="nxt" ></div>
  <div id="lbx">
    <div>
      <img src="../assets/FrixbKwP9Ix2LdK6_5PZCBiPuf6u.jpg">
      <img src="../assets/Fvaclm_QVW-1QgvPJifkdUVYZHNH.jpg">
    </div>
  </div>
  <div><lbnav/></div>
</div>
 
</template>

<script>
import lbnav from "./lbnav.vue";
export default{
  data(){
    return {
      num:0,
      offset:0,
      Img:[
        {number:1,src:require('../assets/15994012465964.jpg')},
        {number:2,src:require('../assets/15996420997716.jpg')},
        {number:3,src:require('../assets/15996428038748.jpg')},
        {number:4,src:require('../assets/15999975172012.jpg')}
      ]
    }
  },
  components: {
    lbnav,
  },
  methods:{
    goto(){
      setInterval(()=>{
        if(this.num<3){
          this.num++;
        }else{
          this.num=0;
        }
        this.offset=this.num*1520;
        
      },3000)
    },
    next(){
       if(this.num<3){
          this.num++;
        }else{
          this.num=0;
        }
        this.offset=this.num*1520;
    },
    last(){
       if(this.num>0){
          this.num--;
        }else{
          this.num=3;
        }
        this.offset=this.num*1520;
    }
  },
  mounted(){
    this.goto();

  }
}
</script>

<style scoped>
#big>div:last-child{
  position: absolute;
  margin-left: 430px;
  margin-top: -500px;
}

*{
  margin: 0;
}
#big{
  background-color: #f5f5f5;
  position: relative;
}
#lb{
  width: 1520px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}
#lb ul{
  padding: 0;
  width: 6080px;
}
#lb ul li img{
  width: 1520px;
  height: 500px;
}
li{
  float: left;
  list-style: none;
  margin: 0;
}
#las{
  width: 100px;
  height: 500px;
  background-image: linear-gradient(to right, #323232 ,#fff );
  position: absolute;
  margin-top: -504px;
  opacity: 0;

}
#nxt{
  width: 100px;
  height: 500px;
  background-image: linear-gradient(to right, #fff , #323232);
  position: absolute;
  margin-top: -504px;
  margin-left: 1419px;
  opacity: 0;
}
#miaoshu{
  width: 800px;
  height: 200px;
  position: absolute;
  margin-top: -204px;
  margin-left: 720px;
  text-align: right;
}
#miaoshu>p{
  margin-right: 50px;
  color:white;
  font-size: 20px;
}
#ome{
  font-size: 60px;
  color:white;
}
#twm{
  font-size: 30px;
  color: white;
}
#lbx{
  width: 1520px;
  height: 150px;
}
#lbx div{
  width: 1100px;
  height: 150px;
  margin: 0 auto;
}
#lbx img{
  float: left;
}
#lbx img:first-child{
  width: 650px;
  height: 100px;
  margin-top: 25px;
  border-radius: 5px;
}
#lbx img:last-child{
  width: 400px;
  height: 100px;
  margin-left: 50px;
   margin-top: 25px;
   border-radius: 5px;
}
</style>
