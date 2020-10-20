<template>
    <div id="recom">
        <p id="nav">
            <a href="https://home.qyer.com/index.php?action=safety">出境游安全提示></a>
            <span>今日推荐</span>
        </p>
        <div id="ecom">
            <div v-for="(item,index) in commend" :key="index" class="com"  @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">
                <video :src='item.src' autoplay="autoplay" v-if="item.ifv==true"></video>
                <img :src='item.src' v-if="item.ifv==false">
                <span id="namspan">{{item.name}}</span>
                <p @mousemove="jinru(index)" @mouseleave="likai(index)" :class="[aaa==index?'gaoliang':'']">{{item.describe}}</p>
                <p><span>{{item.city}}</span><span id="spanone">{{item.amount}}</span></p>
            </div>
        </div>
        <div id="fcom" @mousemove="jinru2"  @mouseleave="likai2" :class="[aaabb==0?'gtu':'']">
            <p>让我们更懂你</p>
            <p>拥有穷游账号，获得更准确的推荐</p>
            <button  @mousemove="jinru3"  @mouseleave="likai3" :class="[aaabbb==0?'gtuu':'ggtu']" @click="zhuce">立即注册</button>
            <p @click="denglu">已有账号？登录</p>
            <p id="qqspan">
                <span><a href="https://oauth.taobao.com/authorize?state=PASSPORT00005f6dda74e4d4c&response_type=code&client_id=21680685&redirect_uri=https%3A%2F%2Flogin.qyer.com%2Fauth.php%3Faction%3Dtaobaocb&view=web"><img src="../assets/bscihbsdvjndslk.jpg" ></a></span>
                <span><a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&display=default&client_id=100287346&redirect_uri=https%3A%2F%2Flogin.qyer.com%2Fauth.php%3Faction%3Dqqcb&ismobile=0&state=PASSPORT00005f6ddb08f24cc"><img src="../assets/vudcbhjndfbvdklf.png"></a></span>
                <span><a href="https://api.weibo.com/oauth2/authorize?client_id=1118290340&redirect_uri=http%3A%2F%2Flogin.qyer.com%2Flogin.php%3Faction%3Dweibo&response_type=code&refer=www.qyer.com&state=PASSPORT00005f6ddb145bf38&display=default&ismobile=0&with_offical_account=1###"><img src="../assets/weibo.jpg"></a></span>
                <span><a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxd286e350e72a6eac&redirect_uri=https://login.qyer.com/auth.php?action=weixincb&response_type=code&scope=snsapi_login&state=PASSPORT00005f6ddb26696df#wechat_redirect"><img src="../assets/weixin.jpg"></a></span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'recom',
    data(){
        return{
            aaa:999,
            aaab:999,
            aaabb:999,
            aaabbb:999,
            commend:[
                {name:'商城',src:require('../assets/4651646516516.jpg'),describe:'上海都市旅游观光巴士-24/48小时有效全线车票',city:'上海',amount:'32元起',ifv:false},
                {name:'游记',src:require('../assets/10000023255.jpg'),describe:'一座比广东还好吃的省（厦门/漳州/泉州/沙县）',city:'磨人哒小栗砸',amount:'18901人浏览过',ifv:false},
                {name:'视频',src:require('../assets/hsuvdivbsnd.mp4'),describe:'爱的里程第八站：说走就走，去长滩岛过夏天',city:'爱程全世界',amount:'长滩岛',ifv:true}

            ]
        }
    },
    methods:{
        jinru(index){
            this.aaa=index;
        },
        likai(index){
            this.aaa=999;
        },
        jinru1(index){
            this.aaab=index;
        },
        likai1(index){
            this.aaab=999;
        },
        jinru2(){
            this.aaabb=0;
        },
        likai2(){
            this.aaabb=999;
        },
        jinru3(){
            this.aaabbb=0;
        },
        likai3(){
            this.aaabbb=999;
        },
        zhuce(){
            this.$router.push('/sign')        
        },
        denglu(){
             this.$router.push('/login') 
        }
    }
}
</script>

<style scoped>
    .gtu{
        box-shadow:0px 0px 10px #000;
    }
    .gtuu{
       background-color: #50a76b;
    }
    .ggtu{
         background-color: #10b041;
    }
    #ecom>div>p:nth-child(3){
        font-weight: bold;
    }
    #ecom>div>p:nth-child(4){
        font-weight: bold;
        font-size: 13px;
    }
    .gaoliang{
        color: green;
    }
    #recom{
        width: 1520px;
        height: 408px;
    }
    #nav{
        width: 1050px;
        line-height:100px;
        margin: 0 auto;
        background-color: white;
        padding-left: 0px!important;
    }
    #nav a{
        width: 200px;
        line-height: 40px;
        border-radius: 30px;
        background-color: #02db94;
        margin-top: 30px;
        float: left;
        text-align: center;
    }
     #nav span{
         font-size: 40px;
         margin-left: 200px;
     }
     #ecom{
         width: 1100px;
         margin: 0 auto;
     }
     .com{
         width: 258px;
         height: 300px;
         float: left;
         border: 1px solid #aaaaaa;
         margin-right: 19px;
         position: relative;
     }
    .com img{
        width: 260px;
    }
    video{
        width: 260px;
    }
     .com>p{
         text-align: left;
         padding: 16px;
        
     }
     .com>p:nth-child(2){
         font-size: 17px;
     }
     #spanone{
         float: right;
     }
     #namspan{
         position: absolute;
         border: 1px solid white;
         border-radius: 5px;
         color: white;
         width: 45px;
         height: 25px;
         margin-left: -250px;
         margin-top: 20px;
     }
     #fcom{
         width: 260px;
         height: 300px;
         background-color: #f8f8f8;
         float: right;
         margin-right: 213px;
     }
     #qqspan>span{
         width: 30px;
         height: 30px;
         border: 1px solid green;
         border-radius: 50%;
         float: left;
        margin-left: 16px;
     }
      #qqspan>span>a>img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
      }
     #fcom button{
         width: 80%;
         height: 40px;
         border-radius: 5px;
         border: none;
         margin-top: 10px;
         margin-bottom: 10px;
     }
     #fcom p{
         padding: 15px;
        
     }
</style>