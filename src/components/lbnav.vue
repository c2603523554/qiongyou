<template>
    <div id="tyu">
        <span class="uoo" :class="[isshyu1?'gyu':'',woo1==1?'gaoliang':'diliang']" @click="one" @mousemove="jinru" @mouseleave="likai">特价酒店</span> 
        <span class="uoo" :class="[isshyu2?'gyu':'',woo2==2?'gaoliang':'diliang']" @click="twoe" @mousemove="jinru1" @mouseleave="likai1">看攻略</span>
        <span class="uoo" :class="[isshyu3?'gyu':'',woo3==3?'gaoliang':'diliang']" @click="othree" @mousemove="jinru2" @mouseleave="likai2">做行程</span>
        <div class="block" v-if="woo==1">
            <input type="text" placeholder="搜城市/机场/地标/酒店"/>
            <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="入住日期"
                end-placeholder="退房日期"
                :picker-options="pickerOptions">
            </el-date-picker>
            <button>搜索特价酒店</button>
        </div>
        <div v-if="woo==2" id="hyy">
            <input type="text" placeholder="搜目的地/主题攻略/问题">
            <button>搜索旅行攻略</button>
        </div>
        
        <div v-if="woo==3" id="kyt">
            <span>穷游行程助手，一分钟搞定你的攻略</span>
            <button>免费私人定制</button>
            <button>创建行程</button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          woo:1,
          woo1:1,
          woo2:1,
          woo3:1,
          isshyu1:false,
          isshyu2:true,
          isshyu3:true,
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    },
    methods:{
        jinru(){
            this.woo1=1;
        },
        likai(){
            if(this.isshyu1==false){
                this.woo1=1;
            }
            else{
                this.woo1=2;
            }
        },
        jinru1(){
            this.woo2=2;
        },
        likai1(){
             if(this.isshyu2==false){
                this.woo2=2;
            }
            else{
                this.woo2=1;
            }
        },
        jinru2(){
            this.woo3=3;
        },
        likai2(){
             if(this.isshyu3==false){
                this.woo3=3;
            }
            else{
                this.woo3=2;
            }
        },
        one(){
            this.woo=1;
            this.isshyu1=false;
            this.isshyu2=true;
            this.isshyu3=true;
        },
         twoe(){
            this.woo=2;
            this.isshyu1=true;
            this.isshyu2=false;
            this.isshyu3=true;
        },
         othree(){
            this.woo=3;
            this.isshyu1=true;
            this.isshyu2=true;
            this.isshyu3=false;
        },
    }

  };
</script>

<style scoped>
    .gaoliang{
        color: white;
    }
    .diliang{
        color: hsla(0,0%,100%,.8);
    }
    #kyt{
        width:690px;
        height:70px;
    }
    #kyt>span{
        line-height:60px;
        color:hsla(0,0%,100%,.8);
        font-size:18px;
        float:left;
        margin-left:60px;
    }
    #kyt>button:nth-child(2){
        width:130px;
        height:40px;
        background-color: unset;
        color: white;
        font-size: 18px;
        border: 1px solid white;
        border-radius: 10px;
        margin-top: 10px;
         margin-left: 40px;
    }
    #kyt>button:nth-child(3){
        width:130px;
        height:40px;
        background-color: yellow;
        font-size: 18px;
        border: none;
        border-radius: 10px;
        margin-top: 10px;
        margin-left: 30px;
    }
    #hyy{
        width:690px;
        height:80px;
    }
    #hyy>input{
        width:450px;
        height:40px;
        float: left;
        margin: 10px;
        border-radius: 10px;
        border: none;
        margin-top: 20px;
    }
    #hyy>button{
        width:195px;
        height:40px;
        float: right;
        margin: 10px;
        border-radius: 10px;
        border: 1px solid white;
        background-color: unset;
        color: white;
        font-size: 20px;
        margin-top: 20px;
    }
    .gyu{
        background-color: rgba(0,0,0,.75);
    }
    #tyu{
        border-radius: 10px;
       background-image: linear-gradient(90deg,rgba(83,144,250,.8),rgba(112,77,255,.8));
    }
    .uoo{
        margin: 0 auto;
        display: inline-block;
        width:244px;
        line-height: 60px;
        font-size:30px;
        border-radius: 10px;
    }
    .block{
        padding: 20px;
        margin: 0 auto;
        width: 690px;
        height: 40px;
    }
    .block>input{
        width: 200px;
        height: 40px;
        border-radius: 10px;
        border: none;
    }
    .block>button{
        float: right;
        width:130px;
        height: 40px;
        border-radius: 10px;
        border: none;
        color: white;
        background-image: linear-gradient(90deg,#ff168f,#ff5854);
    }
</style>