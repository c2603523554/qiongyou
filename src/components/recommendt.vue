<template>
<div id="big">
     <div id="mak">
        <div v-for="(item,index) in commend" :key="index" class="opp"  @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">
            <img :src="item.src">
            <span id="namspan">{{item.name}}</span>
            <p @mousemove="jinru(index)" @mouseleave="likai(index)" :class="[aaa==index?'gaoliang':'']">{{item.describe}}</p>
            <p>
                <span>{{item.city}}</span>
                <span id="spanone">{{item.amount}}</span>
            </p>
        </div>
    </div>
</div>
   
</template>

<script>
export default {
    name:'mak',
    data(){
        return{
            aaa:999,
            aaab:999,
            commend:[
                {name:'商城',src:require('../assets/rthrtyht.jpg'),describe:'[十一]上海/杭州/南京/扬州直飞三亚5天往返含税机票（多航司可选+含10KG托运行李额）',city:'杭州，上海，南京，扬州',amount:'699元起',ifv:false},
                {name:'专栏',src:require('../assets/15994007893173.jpg'),describe:'City Walk 3 | 当工业遇上艺术',city:'茱妮游中国',amount:'茱妮',ifv:false},
                {name:'专栏',src:require('../assets/rthrthryjyu.jpg'),describe:'穿越喀喇昆仑寻找遗失的艺术奇珍---我在巴基斯坦的14天',city:'bjakuma',amount:'265349人浏览过',ifv:false},
                {name:'游记',src:require('../assets/jiontykbjn.jpg'),describe:'火星撞地球，寻失落古城，探中东庞贝，以约埃中东行之约旦篇（以约埃超详过境攻略+公交避坑指南+电子书分享）',city:'rain_chenyu',amount:'91712人浏览过',ifv:false}

            ]}
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
        }
}
</script>

<style scoped>
     .gtu{
        box-shadow:0px 0px 10px #000;
    }
    .gaoliang{
        color: green;
    }
    a{
        text-decoration: none
    }
    #big{
        width: 1520px;
        height:330px ;
    }
    #mak{
        width: 72.4%;
        margin: 0 auto;
    }
    .opp{
        width: 260px;
        height: 300px;
        float: left;
        margin-right: 17px;
        margin-top: 20px;
        border: 1px solid #aaaaaa;
        position: relative;
    }
    .opp:last-child{
        margin-right: 0;
    }
    .opp img{
        width: 260px;
        height: 150px;
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
     .opp>p{
         text-align: left;
         padding: 10px;
         font-size: 10px;
        
     }
     .opp>p:nth-child(3){
         font-size: 15px;
         height: 60px;
         font-weight: bold;
     }
     .opp>p:nth-child(4)>span{
        font-weight: bold;
    }
     #spanone{
         float: right;
     }
</style>