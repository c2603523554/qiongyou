<template>
    <div id="main">
        <div id="main-nei">
            <div id="main-head">
                <h2>机酒自由行</h2>
                <p>挑选全球机票、酒店、邮轮等旅行产品</p>
                <ul>
                    <li v-for="(i, index) in naa" :key="index" @mouseenter="ggg(index)" :class="num==index?'tyug':''">{{i.name}}</li>
                </ul>
            </div>
            <div id="main-body" v-if="num==0">
                <ul>
                    <li v-for="(i,index) in abb1" :key="index">
                        <p><img :src="i.img" alt=""></p>
                        <div id="infos">
                            <p>{{i.heade}}</p>
                            <p><em>{{i.number}}</em>元起</p>
                        </div>
                        <div id="titles">
                            <h3>{{i.title}}</h3>
                            <p>{{i.time}}</p>
                        </div>
                    </li>
                </ul>
                <li id="teshu">
                    <div>
                        <p>
                            查看更多
                            <br>
                            机酒自由行产品
                        </p>
                        <p>
                            <span class="el-icon-arrow-right"></span>
                        </p>
                        <p class="list">机票&nbsp;&nbsp;|&nbsp;&nbsp;酒店&nbsp;&nbsp;|&nbsp;&nbsp;机+酒&nbsp;&nbsp;|&nbsp;&nbsp;邮轮</p>
                    </div>
                </li>
            </div>
            <div id="main-body" v-if="num==1">
                <ul>
                    <li v-for="(i,index) in abb2" :key="index">
                        <p><img :src="i.img" alt=""></p>
                        <div id="infos">
                            <p>{{i.heade}}</p>
                            <p><em>{{i.number}}</em>元起</p>
                        </div>
                        <div id="titles">
                            <h3>{{i.title}}</h3>
                            <p>{{i.time}}</p>
                        </div>
                    </li>
                </ul>
                <li id="teshu">
                    <div>
                        <p>
                            查看更多
                            <br>
                            机酒自由行产品
                        </p>
                        <p>
                            <span class="el-icon-arrow-right"></span>
                        </p>
                        <p class="list">机票&nbsp;&nbsp;|&nbsp;&nbsp;酒店&nbsp;&nbsp;|&nbsp;&nbsp;机+酒&nbsp;&nbsp;|&nbsp;&nbsp;邮轮</p>
                    </div>
                </li>
            </div>
            <div id="main-body" v-if="num==2">
                <ul>
                    <li v-for="(i,index) in abb3" :key="index">
                        <p><img :src="i.img" alt=""></p>
                        <div id="infos">
                            <p>{{i.heade}}</p>
                            <p><em>{{i.number}}</em>元起</p>
                        </div>
                        <div id="titles">
                            <h3>{{i.title}}</h3>
                            <p>{{i.time}}</p>
                        </div>
                    </li>
                </ul>
                <li id="teshu">
                    <div>
                        <p>
                            查看更多
                            <br>
                            机酒自由行产品
                        </p>
                        <p>
                            <span class="el-icon-arrow-right"></span>
                        </p>
                        <p class="list">机票&nbsp;&nbsp;|&nbsp;&nbsp;酒店&nbsp;&nbsp;|&nbsp;&nbsp;机+酒&nbsp;&nbsp;|&nbsp;&nbsp;邮轮</p>
                    </div>
                </li>
            </div>
            <div id="main-body" v-if="num==3">
                <ul>
                    <li v-for="(i,index) in abb4" :key="index">
                        <p><img :src="i.img" alt=""></p>
                        <div id="infos">
                            <p>{{i.heade}}</p>
                            <p><em>{{i.number}}</em>元起</p>
                        </div>
                        <div id="titles">
                            <h3>{{i.title}}</h3>
                            <p>{{i.time}}</p>
                        </div>
                    </li>
                </ul>
                <li id="teshu">
                    <div>
                        <p>
                            查看更多
                            <br>
                            机酒自由行产品
                        </p>
                        <p>
                            <span class="el-icon-arrow-right"></span>
                        </p>
                        <p class="list">机票&nbsp;&nbsp;|&nbsp;&nbsp;酒店&nbsp;&nbsp;|&nbsp;&nbsp;机+酒&nbsp;&nbsp;|&nbsp;&nbsp;邮轮</p>
                    </div>
                </li>
            </div>
            <div id="main-body" v-if="num==4">
                <ul>
                    <li v-for="(i,index) in abb5" :key="index">
                        <p><img :src="i.img" alt=""></p>
                        <div id="infos">
                            <p>{{i.heade}}</p>
                            <p><em>{{i.number}}</em>元起</p>
                        </div>
                        <div id="titles">
                            <h3>{{i.title}}</h3>
                            <p>{{i.time}}</p>
                        </div>
                    </li>
                </ul>
                <li id="teshu">
                    <div>
                        <p>
                            查看更多
                            <br>
                            机酒自由行产品
                        </p>
                        <p>
                            <span class="el-icon-arrow-right"></span>
                        </p>
                        <p class="list">机票&nbsp;&nbsp;|&nbsp;&nbsp;酒店&nbsp;&nbsp;|&nbsp;&nbsp;机+酒&nbsp;&nbsp;|&nbsp;&nbsp;邮轮</p>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    /*头部*/
    /*#region*/
    /* 尾部 */
    /*#endregion*/
export default {
    data(){
        return{
            num:0,

            naa:[
                {name:'近期好货'},
                {name:'新品汇聚'},
                {name:'热卖酒店'},
                {name:'热卖日游'},
                {name:'优惠机票'},
            ],
            abb1:[
                {img:require('../assets/er-main-2-1.jpg'),heade:'城市玩乐',number:'1138',title:'北京出发古北水镇2日休闲游（古北水镇/水镇大酒店/古北之光）',time:'旅行时间 永久有效'},
                {img:require('../assets/er-main-2-2.jpg'),heade:'机+酒',number:'2999',title:'全国往返三亚3天2晚/4天3晚自由行（机票含税+六星亚特兰蒂斯/海棠湾/亚龙湾/大东海/三亚湾可选+定接机或送机服务+门景点门票）'},
                {img:require('../assets/er-main-2-3.jpg'),heade:'城市玩乐',number:'850',title:'贵州旅游贵阳黄果树瀑布西江千户苗寨荔波梵净山旅游包车自由行'},
                {img:require('../assets/er-main-2-4.jpg'),heade:'酒店',number:'990',title:'（民宿，贵州安顺）黄果树 云端·石头寨（2020年开业+双人份营养早餐+云观澜·竹溪2米大床房+雾见山·伴林1.5米双床房 ）'},
                {img:require('../assets/er-main-2-5.jpg'),heade:'跟团游',number:'1999',title:'【摄影天堂】广州出发云南普者黑6天5晚游（三生三世十里桃花拍摄地+古城建水+领略红土地大观+碧色寨+弥勒温泉酒店+红酒庄园）'},
                {img:require('../assets/er-main-2-6.jpg'),heade:'跟团游',number:'999',title:'【醉美黔情】广州出发贵州全景5天游（黄果树瀑布+西江夜景+大小七孔+青岩古镇+丹寨小镇+专职全陪+VIP精致小团+含往返高铁票+食宿行游全陪费用全含）'},
            ],
            abb2:[
                {img:require('../assets/er-main-2-1.jpg'),heade:'城市玩乐',number:'1138',title:'北京出发古北水镇2日休闲游（古北水镇/水镇大酒店/古北之光）',time:'旅行时间 永久有效'},
                {img:require('../assets/er-main-2-3.jpg'),heade:'机+酒',number:'2999',title:'全国往返三亚3天2晚/4天3晚自由行（机票含税+六星亚特兰蒂斯/海棠湾/亚龙湾/大东海/三亚湾可选+定接机或送机服务+门景点门票）'},
                {img:require('../assets/er-main-2-2.jpg'),heade:'城市玩乐',number:'850',title:'贵州旅游贵阳黄果树瀑布西江千户苗寨荔波梵净山旅游包车自由行'},
                {img:require('../assets/er-main-2-4.jpg'),heade:'酒店',number:'990',title:'（民宿，贵州安顺）黄果树 云端·石头寨（2020年开业+双人份营养早餐+云观澜·竹溪2米大床房+雾见山·伴林1.5米双床房 ）'},
                {img:require('../assets/er-main-2-5.jpg'),heade:'跟团游',number:'1999',title:'【摄影天堂】广州出发云南普者黑6天5晚游（三生三世十里桃花拍摄地+古城建水+领略红土地大观+碧色寨+弥勒温泉酒店+红酒庄园）'},
                {img:require('../assets/er-main-2-6.jpg'),heade:'跟团游',number:'999',title:'【醉美黔情】广州出发贵州全景5天游（黄果树瀑布+西江夜景+大小七孔+青岩古镇+丹寨小镇+专职全陪+VIP精致小团+含往返高铁票+食宿行游全陪费用全含）'},
            ],
            abb3:[
                {img:require('../assets/er-main-2-1.jpg'),heade:'城市玩乐',number:'1138',title:'北京出发古北水镇2日休闲游（古北水镇/水镇大酒店/古北之光）',time:'旅行时间 永久有效'},
                {img:require('../assets/er-main-2-2.jpg'),heade:'机+酒',number:'2999',title:'全国往返三亚3天2晚/4天3晚自由行（机票含税+六星亚特兰蒂斯/海棠湾/亚龙湾/大东海/三亚湾可选+定接机或送机服务+门景点门票）'},
                {img:require('../assets/er-main-2-3.jpg'),heade:'城市玩乐',number:'850',title:'贵州旅游贵阳黄果树瀑布西江千户苗寨荔波梵净山旅游包车自由行'},
                {img:require('../assets/er-main-2-4.jpg'),heade:'酒店',number:'990',title:'（民宿，贵州安顺）黄果树 云端·石头寨（2020年开业+双人份营养早餐+云观澜·竹溪2米大床房+雾见山·伴林1.5米双床房 ）'},
                {img:require('../assets/er-main-2-5.jpg'),heade:'跟团游',number:'1999',title:'【摄影天堂】广州出发云南普者黑6天5晚游（三生三世十里桃花拍摄地+古城建水+领略红土地大观+碧色寨+弥勒温泉酒店+红酒庄园）'},
                {img:require('../assets/er-main-2-6.jpg'),heade:'跟团游',number:'999',title:'【醉美黔情】广州出发贵州全景5天游（黄果树瀑布+西江夜景+大小七孔+青岩古镇+丹寨小镇+专职全陪+VIP精致小团+含往返高铁票+食宿行游全陪费用全含）'},
            ],
            abb4:[
                {img:require('../assets/er-main-2-1.jpg'),heade:'城市玩乐',number:'1138',title:'北京出发古北水镇2日休闲游（古北水镇/水镇大酒店/古北之光）',time:'旅行时间 永久有效'},
                {img:require('../assets/er-main-2-2.jpg'),heade:'机+酒',number:'2999',title:'全国往返三亚3天2晚/4天3晚自由行（机票含税+六星亚特兰蒂斯/海棠湾/亚龙湾/大东海/三亚湾可选+定接机或送机服务+门景点门票）'},
                {img:require('../assets/er-main-2-3.jpg'),heade:'城市玩乐',number:'850',title:'贵州旅游贵阳黄果树瀑布西江千户苗寨荔波梵净山旅游包车自由行'},
                {img:require('../assets/er-main-2-4.jpg'),heade:'酒店',number:'990',title:'（民宿，贵州安顺）黄果树 云端·石头寨（2020年开业+双人份营养早餐+云观澜·竹溪2米大床房+雾见山·伴林1.5米双床房 ）'},
                {img:require('../assets/er-main-2-5.jpg'),heade:'跟团游',number:'1999',title:'【摄影天堂】广州出发云南普者黑6天5晚游（三生三世十里桃花拍摄地+古城建水+领略红土地大观+碧色寨+弥勒温泉酒店+红酒庄园）'},
                {img:require('../assets/er-main-2-6.jpg'),heade:'跟团游',number:'999',title:'【醉美黔情】广州出发贵州全景5天游（黄果树瀑布+西江夜景+大小七孔+青岩古镇+丹寨小镇+专职全陪+VIP精致小团+含往返高铁票+食宿行游全陪费用全含）'},
            ],
            abb5:[
                {img:require('../assets/er-main-2-1.jpg'),heade:'城市玩乐',number:'1138',title:'北京出发古北水镇2日休闲游（古北水镇/水镇大酒店/古北之光）',time:'旅行时间 永久有效'},
                {img:require('../assets/er-main-2-2.jpg'),heade:'机+酒',number:'2999',title:'全国往返三亚3天2晚/4天3晚自由行（机票含税+六星亚特兰蒂斯/海棠湾/亚龙湾/大东海/三亚湾可选+定接机或送机服务+门景点门票）'},
                {img:require('../assets/er-main-2-3.jpg'),heade:'城市玩乐',number:'850',title:'贵州旅游贵阳黄果树瀑布西江千户苗寨荔波梵净山旅游包车自由行'},
                {img:require('../assets/er-main-2-4.jpg'),heade:'酒店',number:'990',title:'（民宿，贵州安顺）黄果树 云端·石头寨（2020年开业+双人份营养早餐+云观澜·竹溪2米大床房+雾见山·伴林1.5米双床房 ）'},
                {img:require('../assets/er-main-2-5.jpg'),heade:'跟团游',number:'1999',title:'【摄影天堂】广州出发云南普者黑6天5晚游（三生三世十里桃花拍摄地+古城建水+领略红土地大观+碧色寨+弥勒温泉酒店+红酒庄园）'},
                {img:require('../assets/er-main-2-6.jpg'),heade:'跟团游',number:'999',title:'【醉美黔情】广州出发贵州全景5天游（黄果树瀑布+西江夜景+大小七孔+青岩古镇+丹寨小镇+专职全陪+VIP精致小团+含往返高铁票+食宿行游全陪费用全含）'},
            ]

        }
    },
    methods:{
        ggg(index){
            this.num=index;
            
        }
    }
    
}
</script>
<style scoped>
    /*头部*/
    /*#region*/
    *{
        margin: 0;
        padding: 0;
    }
    #main{
        padding: 35px 0 50px;
        overflow: hidden;
    }
    #main-nei{
        width: 1160px;
        margin: 0 auto;
    }
    #main-head{
        height: 40px;
    }
    #main-head>h2{
        float: left;
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
    }
    #main-head>p{
        float: left;
        margin-left: 12px;
        padding-top: 20px;
        font-size: 14px;
        line-height: 18px;
        color: #636363;
    }
    #main-head>ul{
        list-style: none;
        float: right;
        margin-top: 9px;
        position: relative;
        top: 5px;
    }
    #main-head>ul>li{
        float: left;
        margin-left: 30px;
        font-size: 16px;
        line-height: 28px;
    }
    #main-body{
        margin-top: 30px;
    }
    #main-body ul{
        margin-left: -20px;
        margin-top: -20px;
    }
    #main-body ul>li{
        list-style: none;
        float: left;
        margin: 20px 0 0 20px;
        width: 275px;
        height: 267px;
    }
    #main-body ul>li:first-child{
        width: 570px;
    }
    #main-body ul>li:first-child>p{
        width: 100%;
        height: 267px;
        overflow: hidden;
    }
    #main-body ul>li:first-child img{
        width: 570px;
        height: 380px;
        position: relative;
        top: -56px;
    }
    #main-body ul>li img{
        width: 275px;
        height: 183px;
        display: block;
    }
    #main-body #infos{
        position: absolute;
        height: 36px;
        margin-top: -36px;
        line-height: 36px;
        color: #fff;
    }
    #main-body li:first-child #infos{
        margin-top: -120px;
    }
    #main-body #infos>p:first-child{
        float: left;
        padding: 0 15px;
        background-color: #666;
        background-color: rgba(0,0,0,.6);
        font-size: 16px;
    }
    #main-body #infos>p:last-child{
        float: left;
        padding: 0 15px;
        background-color: #ff7467;
        color: #fff;
        line-height: 1.5;
    }
    #main-body #infos em{
        font-size: 24px;
        font-weight: 200;
    }
    #titles{
        height: 83px;
        overflow: hidden;
        border: 1px solid #ececec;
        border-top: none;
        background-color: #fff;
    }
    #main-body li:first-child #titles{
        position: absolute;
        width: 540px;
        height: 84px;
        margin-top: -84px;
        padding: 0 15px;
        background-color: #666;
        background-color: rgba(0,0,0,.6);
        border: 0;
    }
    #main-body #titles h3{
        height: 48px;
        padding: 17px 15px 0;
        font-size: 18px;
        line-height: 24px;
        color: #323232;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 500;
    }
    #main-body li:first-child #titles h3{
        text-align: left;
        padding-top: 15px;
        overflow: hidden;
        white-space: nowrap;
        color: #fff;
        height: 26px;
        padding:17px 0 0;
    }
    #titles p{
        text-align: left;
        padding-top: 5px;
        font-size: 14px;
        color: silver;
    }
   #teshu{
        float: left;
        margin: 20px 0 0 20px;
        width: 275px;
        height: 267px;
        background-color: #33cea0;
        background-image: linear-gradient(180deg,#61d482,#15cbb3);
        list-style: none;
   }
    #teshu p:first-child{
        padding-top: 46px;
        text-align: center;
        font-size: 18px;
        line-height: 24px;
        color: #fff;
    }
    #teshu p:last-child{
        padding-top: 16px;
    }
    #teshu p:nth-child(2){
        padding: 20px 0 36px 0;
    }
    #teshu p:nth-child(2) span{
        font-size: 60px;
        color: #fff;
        border: 3px solid #fff;
        border-radius: 50%;
    }
    #teshu p:last-child{
        padding-top: 15px;
        font-size: 16px;
        color: #fff;
    }
    #teshu p:nth-child(2) span:hover{
        background-color: hsla(0,0%,100%,.2);
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0,0,0,.2);
    }
    #main-body>ul>li:hover{
        box-shadow: 0 0 5px rgba(0,0,0,.15);
    }
    #main-body>ul>li img:hover{
        opacity: .7;
    }
    .tyug{
        color: #00b081;
        border-bottom: 3px solid #16c1a0;
    }
    /* 尾部 */
    /*#endregion*/

</style>