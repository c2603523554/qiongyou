<template>
<div id="bbb">
     <div id="big">
        <h1>穷游商城<span>换一换</span></h1>
        <div v-for="(item,index) in arr" :key="index">
            <img :src="item.src">
            <div>
                <p>{{item.details}}</p>
                <p>秒杀</p>
                <p>￥<span>{{item.number}}</span>元起</p>
            </div>
        </div>
        <button @mousemove="jinru" @mouseleave="likai" :class="[aaa?'gaoliang':'']">查看更多商品</button>
    </div>
</div>
   
</template>
<script>
export default {
   data(){
       return{
           aaa:false,
           arr:[
               {src:require('../assets/bfvjkdlfvlndfvl.jpg'),details:'成都熊猫基地+都江堰经典纯玩一日游（三环内上门接送+专业司导+5项措施安心游+2-6人团*4人免费升级单团）',number:418},
               {src:require('../assets/yhiojok[pklk.jpg'),details:'玉龙雪山大索道+印象丽江+玉龙雪山纯玩一日游+赠防寒服氧气+7-15座精品商务车团',number:220},
               {src:require('../assets/tuygilkjvbjnm.jpg'),details:'贵阳+天河潭+丹寨+西江2日游-VIP一单一团·风情古寨·鸟笼制作/苗服拍照·蜡染体验·24H接机·黔山秀水·千户夜景',number:1600},
               {src:require('../assets/ertyuioppiojih.jpg'),details:'宜昌故事丨宜昌旅游景点三峡人家精品一日游 （品质纯玩丨含门票+船票+宜昌市区/东站接送+抛绣球+抢新娘+优质导游）',number:198},
               {src:require('../assets/ctvybuikmlkhjhvj.jpg'),details:'泸沽湖+猪槽船+里格半岛+纯玩2日跟团游（6-14人精品商务小团）',number:360},
               {src:require('../assets/xrctyvubinophkgj.jpg'),details:'成都都江堰+青城山经典纯玩一日游（三环内上门接送+专业司导+违约百分百赔付+5项措施安心随行+2-6人团*4人免费升级单团）',number:418}
           ]
       }
   },
    methods:{
            jinru(){
                this.aaa=true;
            },
            likai(){
                this.aaa=false;
            }
        }
}
</script>
<style  scoped>
    .gaoliang{
        box-shadow:0px 0px 10px #000;
    }
    #bbb{
        width: 1520px;
        height: 400px;
        background-image: linear-gradient(#6dd27c,#1bcdae);
    }
    #big{
        padding: 20px;
        width: 1100px;
        margin: 0 auto;
    }
    #big>div{
        width: 360px;
        height: 100px;
        float: left;
        white-space: nowrap;
        background-color: white;
        margin: 3px;
        text-align: left;
    }
     #big>div>img{
         width: 115px;
         height: 100px;
     }
    #big>div>div{
    width: 245px;
    height: 100px;
    
    float: right;
    }
    #big>div>div>p:first-child{
        padding: 5px;
        width: 245px;
        height: 30px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    #big>div>div>p:last-child{
        float: right;
        color: red;
    }
    #big>div>div>p:last-child>span{
        font-size: 25px;
    }
    #big>div>div>p:nth-child(2){
        text-align: center;
        width: 50px;
        border: 1px solid teal;
        margin-left: 10px;
        border-radius: 5px;
        color: teal;
    }
    h1{
        margin: 0 auto;
        width: 1100px;
        color: #fff;
    }
    h1 span{
        font-size: 12px;
        float: right;
        margin-top: 19px;
    }
    #big>button{
        width: 200px;
        height: 60px;
        margin: 20px;
        border-radius: 10px;
        background-color: white;
        border: none;
        font-size: 20px;
    }
</style>