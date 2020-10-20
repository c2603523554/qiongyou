<template>
    <div id="tiu">
        <p><a>默认排序 </a> | 浏览次数最多 | 复制次数最多 <span>150个行程 <input type="text" placeholder="在当前结果下搜索"></span></p>
        <div v-for="(item,index) in arre" :key="index">
            <a href="#">
                <div class="koij">
                    <img :src="item.src">
                    <span class="bg">
                        <span>
                            <div><em>{{item.day}}</em>天</div>
                            <div>
                                <p>{{item.time}}出发</p>
                                <p>{{item.city}}</p>
                            </div>
                        </span>
                    </span>
                </div>
                <div class="koir">
                    <div>
                        <a href="#" v-if="item.isshow1">{{item.hobby1}}</a>
                        <a href="#" v-if="item.isshow2">{{item.hobby2}}</a>
                        <a href="#" v-if="item.isshow3">{{item.hobby3}}</a>
                        <a href="#" v-if="item.isshow4">{{item.hobby4}}</a>
                    </div>
                    <div>
                        <p>{{item.site}}</p>
                    </div>
                    <div>
                        <p>{{item.name}}<span>{{item.number1}}  |  {{item.number2}}</span></p>
                    </div>
                </div>
            </a>
        </div>
        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arre:[
                {src:require('../assets/rtyuiouytryuyioop.jpg'),day:'10',time:'2025-07-16',city:'英国-伦敦-爱丁堡-温莎-巴斯',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'上海·伦敦·牛津·剑桥·爱丁堡·苏格兰高地·苏格兰·因弗尼斯·尼斯湖·威廉堡·巴斯·巨石阵',name:'柚子_柚子',number1:'9221',number2:'654',isshow1:true,isshow2:true,isshow3:false,isshow4:false,},
                {src:require('../assets/gfdfsrtyjythrfrgthyjujyhg.jpg'),day:'14',time:'2023-09-26',city:'新西兰自驾南岛深度游',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'上海·奥克兰·新西兰马尔堡·凯库拉·基督城·格雷茅斯·普纳凯基·霍基蒂卡·弗朗茨约瑟夫冰川·福克斯冰川·瓦纳卡·箭镇·皇后镇·蒂阿瑙·因弗卡吉尔·奥瓦卡·但尼丁·奥马鲁·怀马蒂·特威泽尔·阿卡罗阿',name:'taogeww',number1:'15210',number2:'295',isshow1:false,isshow2:true,isshow3:true,isshow4:false,},
                {src:require('../assets/sduvjifhsjkfjdsjkjvh.jpg'),day:'48',time:'2024-09-01',city:'法国（签证版）',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'广州·巴黎·凡尔赛·阿维尼翁·马赛·尼斯·戛纳·里昂·格勒诺布尔·日内瓦·菲斯普·采尔马特·卢塞恩·苏黎世·阿姆斯特丹·羊角村·海牙·鹿特丹·吉维尼·圣米歇尔山·图尔·昂布瓦兹·波尔多·图卢兹·卡尔卡松·蒙彼利埃·阿尔勒',name:'Findingiris',number1:'52586',number2:'242',isshow1:true,isshow2:true,isshow3:false,isshow4:false,},
                {src:require('../assets/rytuiokplkjiuytryuhik.jpg'),day:'12',time:'2026-03-01',city:'巴黎罗马巴塞罗那',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'香港·上海·巴黎·罗马·梵蒂冈·巴塞罗那',name:'Findingiris',number1:'9208',number2:'344',isshow1:false,isshow2:false,isshow3:false,isshow4:false,},
                {src:require('../assets/yuhijnklrtyugiojpiuytui.jpg'),day:'13',time:'2020-09-26',city:'魔芋菌的奥捷行程',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'北京·布拉格·库特纳霍拉·捷克克鲁姆洛夫·萨尔茨堡·哈尔施塔特·维也纳',name:'魔芋菌',number1:'8559',number2:'290',isshow1:true,isshow2:false,isshow3:false,isshow4:false,},
                {src:require('../assets/rtrygubinompliutrryhbujkl.jpg'),day:'50',time:'2024-08-01',city:'法国（签证版）2',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'广州·巴黎·凡尔赛·阿维尼翁·马赛·尼斯·戛纳·里昂·格勒诺布尔·布鲁日·根特·布鲁塞尔·卢森堡市·阿姆斯特丹·羊角村·海牙·鹿特丹·吉维尼·圣米歇尔山·图尔·昂布瓦兹·波尔多·图卢兹·卡尔卡松·蒙彼利埃·阿尔勒',name:'Findingiris',number1:'4067',number2:'49',isshow1:false,isshow2:false,isshow3:false,isshow4:false,},
                {src:require('../assets/ytsudiocsdvuhbiasml.jpg'),day:'12',time:'2021-07-26',city:'俄罗斯双城金环小镇',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'成都·莫斯科·弗拉基米尔·博戈柳博沃·苏兹达尔·圣彼得堡',name:'mickeygong001',number1:'1024',number2:'14',isshow1:true,isshow2:true,isshow3:false,isshow4:false,},
                {src:require('../assets/rysgubinodiihugvduasmkl.jpg'),day:'18',time:'2020-01-21',city:'追极光',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'上海·赫尔辛基·雷克雅未克·维克·赫本·斯德哥尔摩·恩舍尔兹维克·凯米·罗瓦涅米',name:'zoeyzhan',number1:'874',number2:'21',isshow1:false,isshow2:false,isshow3:false,isshow4:false,},
                {src:require('../assets/ytsyudjlkdxfgyhjkl.jpg'),day:'10',time:'2021-01-01',city:'爱旅游的世界的俄罗斯芬兰瑞典行程',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'北京·赫尔辛基·斯德哥尔摩·圣彼得堡·莫斯科·贝加尔湖·利斯特维扬卡·伊尔库茨克',name:'爱旅游的世界',number1:'799',number2:'11',isshow1:false,isshow2:false,isshow3:false,isshow4:false,},
                {src:require('../assets/rdsatyuidojpjioudyuyyastgyid.jpg'),day:'9',time:'2021-05-01',city:'荷兰、比利时 自由行',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'上海·莫斯科·阿姆斯特丹·海牙·鹿特丹·安特卫普·根特·布鲁日·布鲁塞尔',name:'geyefu',number1:'1119',number2:'14',isshow1:false,isshow2:false,isshow3:false,isshow4:true},
                {src:require('../assets/tryusdiokkscacfygvubhikl.jpg'),day:'17',time:'2028-09-05',city:'瑞丹英',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'马尼拉·伊斯坦布尔·斯德哥尔摩·哥德堡·布罗斯·哥本哈根·比隆·欧登塞·曼彻斯特·利物浦·伦敦·交通·资料',name:'YCTAN',number1:'522',number2:'5',isshow1:true,isshow2:true,isshow3:false,isshow4:false,},
                {src:require('../assets/dxfcgvhbjnlktytyuio.jpg'),day:'23',time:'2020-11-19',city:'奥匈德',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'上海·布达佩斯·格德勒·圣安德烈·维也纳·梅尔克·多瑙河畔克雷姆斯·哈尔施塔特·巴德伊舍·圣沃尔夫冈·圣吉尔根·富施尔·萨尔茨堡·贝希特斯加登·慕尼黑·菲森·施万高·海德堡·罗滕堡',name:'lindsey81',number1:'483',number2:'8',isshow1:false,isshow2:true,isshow3:false,isshow4:false,},
                {src:require('../assets/ycvuhjnklmsdvguhbijoksd.jpg'),day:'2',time:'2027-11-02',city:'马尼拉博物馆',hobby1:'购物',hobby2:'美食',hobby3:'自驾',hobby4:'人文',site:'马尼拉',name:'YCTAN',number1:'430',number2:'2',isshow1:true,isshow2:true,isshow3:false,isshow4:false,},
            ]
        }
    }
    
}
</script>

<style scoped>
em{
    font-style:normal
}
#tiu{
    width: 1150px;
    height: 1630px;
    margin: 0 auto;
    padding: 15px;
}
#tiu>p{
    text-align: left;
    line-height: 20px;
    font-size: 12px;
    padding-left: 25px;
    padding-top: 10px;
    color: #aaaaaa;
}
#tiu>p>a{
    color: black;
}
#tiu>p>span{
    float: right;
    padding-right: 30px;
    color: #aaaaaa;
}
#tiu>p>span>input{
    border-radius: 5px;
    border: 1px solid #aaaaaa;
    height: 20px;
    margin-left: 10px;
}
#tiu>div:last-child{
    width: 400px;
    height: 40px;
    border: none;
    float: right;
    margin-top: 400px;
}
#tiu>div{
    width: 250px;
    height: 350px;
    float: left;
    border: 1px solid #cccccc;
    margin-right: 17px;
    margin-left: 18px;
    margin-top: 20px;
    border-radius: 10px;
}
.koij{
    width: 248px;
    height: 200px;
    position: relative;
}
.koij>img{
    width: 250px;
    border-radius: 10px;
}
.koij>span{
    position: absolute;
    width: 250px;
    height: 55px;
    top: 130px;
    left: 0;
    border-radius: 10px;
}
.koir>div:nth-child(1){
    width: 250px;
    height: 30px;
}
.koir>div:nth-child(1)>a{
    font-size: 12px;
    color: #312f2f;
    border: 1px solid #312f2f;
    margin-left: 15px;
    float: left;
    padding:0px 2px;
    border-radius: 10px;
    background-color: #cccccc;
}
.koir>div:nth-child(2)>p{
    width: 230px;
    height: 34px;
    color: #312f2f;
    text-align: left;
    padding: 5px;
    margin: 10px;
    overflow: hidden;
}
.koir>div:nth-child(3)>p{
    text-align: left;
    margin: 17px;
    color: blue;
    font-size: 10px;
}
.koir>div:nth-child(3)>p>span{
    float: right;
    color: black;
}
.bg{
    background-color: #cccccc;
    background-color:rgba(0, 0, 0, 0.2);
}
.bg>span>div{
    float: left;
    height: 50px;
    text-align: left;
}
.bg>span>div:nth-child(1){
    border-right:1px solid #f5f5f5 ;
    margin-right: 10px;
    padding: 5px;
    color: white;
}
.bg>span>div:nth-child(1)>em{
    font-size: 40px;
}
.bg>span>div:nth-child(2)>p:nth-child(1){
    font-size: 10px;
    line-height: 30px;
    color: white;
}
.bg>span>div:nth-child(2)>p:nth-child(2){
    font-size: 12px;
    color: white;
}
</style>