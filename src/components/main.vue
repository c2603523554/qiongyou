<template>
    <dir id="yi">
        <div id="yi-head">
            <div id="er">
                <h2>新鲜甩货</h2>
                <p>每日不可不看的好货</p>
                <p>
                    <em class="el-icon-refresh"></em>
                    换一换
                </p>
            </div>
            <div id="san">
                <ul>
                    <li v-for="(i,index) in maa" :key="index">
                        <img :src="i.img" alt="">
                        <h3>{{i.it}}</h3>
                        <p><span>{{i.number}}</span>元起</p>
                    </li>
                </ul>
                <ul>
                    <li v-for="(i,index) in baa" :key="index">
                        <img :src="i.img" alt="">
                        <h3>{{i.it}}</h3>
                        <p><span>{{i.number}}</span>元起</p>
                    </li>
                </ul>
            </div>
        </div>
    </dir>
</template>
<script>
export default {
    data(){
        return{
            maa:[
                {img:require('../assets/yi-main1.jpg'),it:'上海都市旅游观光巴士-24/48小时有效全线车票',number:'32'},
                {img:require('../assets/yi-main2.jpg'),it:'上海直飞厦门3-4日自由行（酒店全含+多级别酒店可选+两套航班可选）',number:'449'},
                {img:require('../assets/yi-main3.jpg'),it:'[十一]上海/杭州/南京/扬州直飞三亚5天往返含税机票（多航司可选+含10KG托运行李额）票',number:'699'},
                {img:require('../assets/yi-main4.jpg'),it:'上海直飞成都4日含税机票（含熊猫基地往返车票门票/浦东往返）',number:'1041'},
                ],
            baa:[
                {img:require('../assets/yi-main5.jpg'),it:'上海都市旅游观光网红打卡·呼伦贝尔大草原+异国风情满洲里SUV穿越5日游（1单1团+套娃亲子主题乐园+不限时骑马+星空蒙古包+篝火狂欢夜）巴士-24/48小时有效全线车票',number:'1680'},
                {img:require('../assets/yi-main6.jpg'),it:'泸沽湖+猪槽船+里格半岛+纯玩2日跟团游（6-14人精品商务小团）',number:'360'},
                {img:require('../assets/yi-main7.jpg'),it:'宜昌故事丨宜昌旅游景点三峡人家精品一日游 （品质纯玩丨含门票+船票+宜昌市区/东站接送+抛绣球+抢新娘+优质导游）',number:'198'},
                {img:require('../assets/yi-main8.jpg'),it:'成都熊猫基地+都江堰经典纯玩一日游（三环内上门接送+专业司导+5项措施安心游+2-6人团*4人免费升级单团）',number:'418'},
            ]
        }
    }
}
</script>
<style scoped>
    #yi{
        height: 680px;
        padding: 35px 0 50px;
        background-color: #f5f5f5;
    }
    #yi-head{
        width: 1160px;
        margin: 0 auto;
    }
    #er{
        height: 40px;
    }
    #er>h2{
        float: left;
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
    }
    #er>p:nth-child(2){
        float: left;
        margin-left: 12px;
        padding-top: 20px;
        font-size: 14px;
        line-height: 18px;
        color: #636363;
    }
    #er>p:last-child{
        float: right;
        margin-top: 18px;
        font-size: 14px;
        line-height: 16px;
        color: #636363;
    }
    #san{
        margin-top: 30px;
    }
    #san ul{
        margin-left: -20px;
        margin-top: -20px;
        list-style: none;
        
    }
    #san ul h3{
        text-align: left;
        height: 48px;
        padding: 10px 15px 0;
        font-size: 16px;
        line-height: 24px;
        color: #323232;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    #san ul li{
        float: left;
        margin: 20px 0 0 10px;
        width: 275px;
        height: 300px;
        overflow: hidden;
        position: relative;
        border: 1px solid #ececec;
        box-sizing: border-box;
        background: #fff;
    }
    #san ul p>span{
        font-size: 32px;
        font-weight: 200;
        color: #ff7467;
    }
    #san ul li p{
        color: silver;
        font-size: 14px;
        line-height: 1;
        text-align: right;
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
    #san ul li:hover{
        box-shadow: 0 0 5px rgba(0,0,0,.15);
    }
    #san ul li:hover img{
        opacity: .7;
    }
</style>