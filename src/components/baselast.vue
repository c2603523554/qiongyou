<template>
    <div id="biggg">
        <div>
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
                <span>
                    <h2>友情链接</h2>
                    <ul>
                        <li v-for="(item,index) in kpp" :key="index">{{item}}|</li>
                    </ul>
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
            kpp:['Hertz国际租车','大自驾网','凤凰古城住宿推荐','信息聚合','豌豆荚安卓市场','凤凰网旅游','甚至狗租车','中国签证资讯网','北京国旅官网','同程旅游','相约久久旅游网','携程旅游网','户外资料网','火车票','绿野网','欣欣旅游网','驴妈妈旅游网','多多驿站','艺龙旅游指南']
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
    .gtu{
        color: #10b041;
    }
     a{
        text-decoration: none
    }
    #biggg{
        width: 1520px;
        height: 400px;
        border-top: 2px solid green;
        background-color: #323232;
    }
    li{
        list-style: none;
    }
    #biggg>div{
        width: 1100px;
        margin: 0 auto;
        height: 200px;
        text-align: left;
        color: #959595;
    }
    #biggg>div>ul:first-child{
        padding: 0;
        float: none;
        width: 100%;
        height: 50px;
    }
    #biggg>div>ul{
        padding: 0;
        float: left;
    }
    #biggg>div:first-child>ul>li{
        width: 104px;
        text-align: center;
        margin-right: 30px;
        margin-top: 10px;
    }
    #biggg>div:first-child>ul:first-child>li{
        width: 100px;
        float: left;
        border-left: 4px solid green;
        text-align: center;
        margin-right: 30px;
        margin-top: 20px;
    }
    #biggg>div:last-child{
        width: 1520px;
        margin: 0 auto;
        height: 200px;
        text-align: left;
        background-color: #242424;
        position: relative;

    }
    #biggg>div:last-child>div{
        width: 1100px;
        margin: 0 auto;
        padding-top: 25px;
    }
    #biggg>div:last-child>div>span>h2{
        width: 100px;
        float: left;
    }
     #biggg>div:last-child>div>span>span{
         float: left;
         width: 700px;
         font-size: 12px;
     }
      #biggg>div:last-child>div>span>img{
          width: 100px;
          height: 35px;
          float: left;
          margin: 5px;
    }
    #biggg>div:last-child>div>span:last-child>h2{
        position: absolute;
        left: 210px;
        top:104px
    }
    #biggg>div:last-child>div>span:last-child>ul{
        margin-left: 60px;
        margin-top: 80px;
    }
    #biggg>div:last-child>div>span:last-child>ul>li{
        float: left;
        font-size: 13px;
    }
</style>