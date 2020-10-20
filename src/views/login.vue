/* 登录页面 */
<template>
    <div id="big">
        <p><img src="../assets/41bd0a522fbeb024a41208a408ca73ec.png" alt="穷游">登录</p>
        <div id="small">
            <div>
                <router-link to="/login">登录 </router-link>
                <router-link to="/login/b">短信登录</router-link>
                <hr>
                <router-view></router-view>
            </div>
            <div></div>
        </div>
        <div id="biggg">
             <ul>
                <li v-for="(item,index) in ftt" :key="index"  @mousemove="jinru(index)"  @mouseleave="likai(index)" :class="[aaaa==index?'gtu':'']">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in ftt1" :key="index"  @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in ftt2" :key="index"  @mousemove="jinru2(index)"  @mouseleave="likai2(index)" :class="[aaac==index?'gtu':'']">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in ftt3" :key="index"  @mousemove="jinru3(index)"  @mouseleave="likai3(index)" :class="[aaad==index?'gtu':'']">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in ftt4" :key="index"  @mousemove="jinru4(index)"  @mouseleave="likai4(index)" :class="[aaae==index?'gtu':'']">{{item}}</li>
            </ul>
            <img src="../assets/tvuybivfnokiibeygh.png" alt="">
        </div>
        <div>
            <div>
                <span>
                    <h2>Q穷游</h2>
                    <span>
                        <p>2004-2020 © 穷游网® qyer.com All rights reserved. Version v5.57  京ICP备12003524号   京公网安备11010502041090   京ICP证140673号  营业执照  经营许可证</p>
                        <p>穷游网为旅行者提供原创实用的出境游旅行指南和旅游攻略、旅行社区和问答交流平台，并提供签证、保险、机票、酒店预订、租车等服务。</p>
                    </span>
                    <img src="../assets/vucbwjhvjbjkvjfd.jpg" alt="">
                    <img src="../assets/trustutn_large.jpg" alt="">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aaaa:999,
            aaab:999,
            aaac:999,
            aaad:999,
            aaae:999,
            ftt:['关于我们','加入穷游','网站条款','帮助中心'],
            ftt1:['穷游简介','联系我们','合作伙伴'],
            ftt2:['招聘职位'],
            ftt3:['会员条款','社区指南','版权声明','免责声明'],
            ftt4:['新手上路','使用帮助','网站地图','旅行工具'],
        }
    },
    methods:{
        jinru(index){
            this.aaaa=index;
        },
        likai(index){
            this.aaaa=999;
        },
        jinru1(index){
            this.aaab=index;
        },
        likai1(index){
            this.aaab=999;
        },
        jinru2(index){
            this.aaac=index;
        },
        likai2(index){
            this.aaac=999;
        },
        jinru3(index){
            this.aaad=index;
        },
        likai3(index){
            this.aaad=999;
        },
        jinru4(index){
            this.aaae=index;
        },
        likai4(index){
            this.aaae=999;
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
    }
    .gtu{
         color: #10b041;
    }
    a{
        text-decoration: none
    }
    hr{
        margin: 10px;
    }
    #big{
        width: 1520px;
        height: 1028px;
        background-size: cover;
        background-image: url('../assets/ecb39528d488b6c520f7ddd3898379d6.jpg');
    }
    #big>p>img{
        width: 170px;
    }
     #big>p{
         color: white;
         font-size: 20px;
         padding-top: 60px;
     }
     #small{
         width: 600px;
         height: 500px;
         background-color: white;
         margin: 0 auto;
     }
     #small>div:first-child>a{
        display: inline-block;
        width: 150px;
        height: 30px;
        text-align: center;
     }
     #small>div:first-child{
        width: 330px;
        float: left;
        padding: 10px;
     }
     #small>div:last-child{
        width: 250px;
        height: 100%;
        background-image: url('../assets/xrtcyvubhjnkmllkndcs.jpg');
        background-color: goldenrod;
        float: left;
        background-size:contain;
     }
      #small>div:first-child>a>button{
          width: 145px;
          height: 45px;
          border: none;
      }

    li{
        list-style: none;
    }
    #biggg{
        
        width: 1318px;
        height: 200px;
        padding-left: 200px;
        margin: 0 auto;
        color: #959595;
        background-color: #363636;
    }
    #biggg>img{
        height: 150px;
        float: left;
        margin-left: 114px;
        margin-top: -35px;
    }
    #biggg>ul:first-child{
        margin-top: 100px;
        padding: 0;
        float: none;
        width: 100%;
        height: 50px;
    }
    #biggg>ul{
        padding: 0;
        float: left;
    }
    #biggg>ul>li{
        width: 100px;
        text-align: center;
        font-size: 13px;
        margin-right: 30px;
        margin-top: 10px;
    }
    #biggg>ul:first-child>li{
        width: 100px;
        float: left;
        text-align: center;
        margin-right: 30px;
        margin-top: 20px;
        font-size: 14px;
    }


    #biggg+div{
        width: 1520px;
        margin: 0 auto;
        height: 100px;
        text-align: left;
        color: #959595;
        background-color: #363636;
        position: relative;

    }
    #biggg+div>div{
        width: 1100px;
        margin: 0 auto;
        padding-top: 25px;
    }
    #biggg+div>div>span>h2{
        width: 100px;
        float: left;
    }
     #biggg+div>div>span>span{
         float: left;
         width: 700px;
         font-size: 12px;
     }
      #biggg+div>div>span>img{
          width: 100px;
          height: 35px;
          float: left;
          margin: 5px;
    }
    #biggg+div>div>spav>h2{
        position: absolute;
        left: 210px;
        top:104px
    }
    #biggg+div>div>spav>ul{
        margin-left: 60px;
        margin-top: 80px;
    }
    #biggg+div>div>spav>ul>li{
        float: left;
        font-size: 13px;
    }
</style>
