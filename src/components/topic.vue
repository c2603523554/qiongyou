<template>
    <div id="yuio">
        <div id="iju" v-if="nummm==1">
            <h1>热门游记与话题</h1>
            <div  v-for="(item,index) in att" :key="index" class="sbig" @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">
                <div>
                    <img :src="item.src" class="bigg">
                    <img :src="item.scr" class="smalll">
                    <span>{{item.name}}</span>
                    <span><i class="el-icon-chat-dot-square"></i>{{item.number}}</span>
                    <p @mousemove="jinru(index)" @mouseleave="likai(index)" :class="[aaa==index?'gaoliang':'']">{{item.describe}}</p>
                </div>
            </div>
            <div id="dibuanniu">
                <div @mousemove="dianjione"></div>
                <div @mousemove="dianjitwo"></div>
                <div @mousemove="dianjithree"></div>    
                <div @mousemove="dianjifour"></div>
            </div>
            <button id="btls" @mousemove="jinrur" @mouseleave="likair" :class="[baa?'gaoliang':'']">查看更多游记</button>
        </div>
         <div id="iju" v-if="nummm==2">
             <h1>热门游记与话题</h1>
             <div v-for="(item,index) in att1"  :key="index" class="sbig" @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">
                <div>
                    <img :src="item.src" class="bigg">
                    <img :src="item.scr" class="smalll">
                    <span>{{item.name}}</span>
                    <span><i class="el-icon-chat-dot-square"></i>{{item.number}}</span>
                    <p @mousemove="jinru(index)" @mouseleave="likai(index)" :class="[aaa==index?'gaoliang':'']">{{item.describe}}</p>
                </div>
            </div>
            <div id="dibuanniu">
                <div @mousemove="dianjione"></div>
                <div @mousemove="dianjitwo"></div>
                <div @mousemove="dianjithree"></div>
                <div @mousemove="dianjifour"></div>
            </div>
             <button id="btls" @mousemove="jinrur" @mouseleave="likair" :class="[baa?'gaoliang':'']">查看更多游记</button>
         </div>
         <div id="iju" v-if="nummm==3">
             <h1>热门游记与话题</h1>
             <div v-for="(item,index) in att2"  :key="index" class="sbig" @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">
                <div>
                    <img :src="item.src" class="bigg">
                    <img :src="item.scr" class="smalll">
                    <span>{{item.name}}</span>
                    <span><i class="el-icon-chat-dot-square"></i>{{item.number}}</span>
                    <p @mousemove="jinru(index)" @mouseleave="likai(index)" :class="[aaa==index?'gaoliang':'']">{{item.describe}}</p>
                </div>
            </div>
            <div id="dibuanniu">
                <div @mousemove="dianjione"></div>
                <div @mousemove="dianjitwo"></div>
                <div @mousemove="dianjithree"></div>
                <div @mousemove="dianjifour"></div>
            </div>
             <button id="btls" @mousemove="jinrur" @mouseleave="likair" :class="[baa?'gaoliang':'']">查看更多游记</button>
         </div>
          <div id="iju" v-if="nummm==4">
              <h1>热门游记与话题</h1>
             <div v-for="(item,index) in att3"  :key="index" class="sbig" @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">
                <div>
                    <img :src="item.src" class="bigg">
                    <img :src="item.scr" class="smalll">
                    <span>{{item.name}}</span>
                    <span><i class="el-icon-chat-dot-square"></i>{{item.number}}</span>
                    <p @mousemove="jinru(index)" @mouseleave="likai(index)" :class="[aaa==index?'gaoliang':'']">{{item.describe}}</p>
                </div>
            </div>
            <div id="dibuanniu">
                <div @mousemove="dianjione"></div>
                <div @mousemove="dianjitwo"></div>
                <div @mousemove="dianjithree"></div>
                <div @mousemove="dianjifour"></div>
            </div>
             <button id="btls" @mousemove="jinrur" @mouseleave="likair" :class="[baa?'gaoliang':'']">查看更多游记</button>
          </div>
            
    </div>
</template>

<script>
export default {
    data(){
        return{
            aaab:999,
            aaa:999,
            baa:false,
            nummm:1,
            att:[
                {src:require('../assets/kjhgfjvuhbjnkl.jpg'),scr:require('../assets/tyfugiojoihouytyvuikm.jpg'),name:'茱妮',number:'50',describe:'完结【穿越河西走廊，共赴一场跨越千年的对话】冬季甘肃旅行全攻略：兰州-张掖-嘉峪关-瓜州-敦煌'},
                {src:require('../assets/ertyvubinoopiuiycgvhjk.jpg'),scr:require('../assets/hjgxgfgfgvjhbjkhh.jpg'),name:'西西里玩不停',number:'21',describe:'滇藏之路，雪山深处，谱一曲香巴拉的散文诗——香格里拉遛娃之旅'},
                {src:require('../assets/ytuioopiugbn.jpg'),scr:require('../assets/sxcytvyuhikjilnbuycyfgvuh.jpg'),name:'多多熊',number:'42',describe:'想念如果有声音，大西北给你回应'},
                {src:require('../assets/drtyuiopoiuytyyuuiio.jpg'),scr:require('../assets/cvhbjklmjiuytcvbuukilomn.jpg'),name:'Allenl艾伦伦',number:'1',describe:'柳叶湖畔，寻回向往已久的生活（湖南常德小众度假攻略）'},
                {src:require('../assets/ytuioiouytryvubinio.jpg'),scr:require('../assets/uyhjgvkgfyfcvghkjlm.jpg'),name:'雍容makiori',number:'18',describe:'【雍容makiori】横断北九州~独自行走在记忆里的海市蜃楼'},
                {src:require('../assets/Uuhiuyutdvubiuyfvu.jpg'),scr:require('../assets/iuifyyxfcgvhjllkhjghcvhbjnk.jpg'),name:'yyy旅行种草机',number:'14',describe:'比美西更美西的青海海西8天环线自驾(翡翠湖\东台吉乃尔湖\恶魔之眼\俄博梁干货全攻略)'},
                {src:require('../assets/nklcfgvhkljnhiuyhubhnu.jpg'),scr:require('../assets/oufyxcyvubgbfdgvfdgddgf.jpg'),name:'AKA阿佟木',number:'6',describe:'【自驾G331】穿行东北边境公路，书写北国之夏的童话（230美图+1.2万字东北夏日游玩指南）'},
                {src:require('../assets/dcytvyuhiikiuiytyctvuinikl.jpg'),scr:require('../assets/yiuhjiuyutytyuhiljkhgvhbjknlhgjbjnk.jpg'),name:'麥子游途',number:'41',describe:'极地 永夜 纯白：记一场追逐极光的雪域自驾之旅（北欧极光之优选自驾环线）'}
            ],
             att1:[
                {src:require('../assets/kjhgfjvuhbjnkl.jpg'),scr:require('../assets/tyfugiojoihouytyvuikm.jpg'),name:'茱妮1',number:'50',describe:'完结【穿越河西走廊，共赴一场跨越千年的对话】冬季甘肃旅行全攻略：兰州-张掖-嘉峪关-瓜州-敦煌'},
                {src:require('../assets/ertyvubinoopiuiycgvhjk.jpg'),scr:require('../assets/hjgxgfgfgvjhbjkhh.jpg'),name:'西西里玩不停1',number:'21',describe:'滇藏之路，雪山深处，谱一曲香巴拉的散文诗——香格里拉遛娃之旅'},
                {src:require('../assets/ytuioopiugbn.jpg'),scr:require('../assets/sxcytvyuhikjilnbuycyfgvuh.jpg'),name:'多多熊1',number:'42',describe:'想念如果有声音，大西北给你回应'},
                {src:require('../assets/drtyuiopoiuytyyuuiio.jpg'),scr:require('../assets/cvhbjklmjiuytcvbuukilomn.jpg'),name:'Allenl艾伦伦1',number:'1',describe:'柳叶湖畔，寻回向往已久的生活（湖南常德小众度假攻略）'},
                {src:require('../assets/ytuioiouytryvubinio.jpg'),scr:require('../assets/uyhjgvkgfyfcvghkjlm.jpg'),name:'雍容makiori1',number:'18',describe:'【雍容makiori】横断北九州~独自行走在记忆里的海市蜃楼'},
                {src:require('../assets/Uuhiuyutdvubiuyfvu.jpg'),scr:require('../assets/iuifyyxfcgvhjllkhjghcvhbjnk.jpg'),name:'yyy旅行种草机1',number:'14',describe:'比美西更美西的青海海西8天环线自驾(翡翠湖\东台吉乃尔湖\恶魔之眼\俄博梁干货全攻略)'},
                {src:require('../assets/nklcfgvhkljnhiuyhubhnu.jpg'),scr:require('../assets/oufyxcyvubgbfdgvfdgddgf.jpg'),name:'AKA阿佟木1',number:'6',describe:'【自驾G331】穿行东北边境公路，书写北国之夏的童话（230美图+1.2万字东北夏日游玩指南）'},
                {src:require('../assets/dcytvyuhiikiuiytyctvuinikl.jpg'),scr:require('../assets/yiuhjiuyutytyuhiljkhgvhbjknlhgjbjnk.jpg'),name:'麥子游途1',number:'41',describe:'极地 永夜 纯白：记一场追逐极光的雪域自驾之旅（北欧极光之优选自驾环线）'}
            ],
             att2:[
                {src:require('../assets/kjhgfjvuhbjnkl.jpg'),scr:require('../assets/tyfugiojoihouytyvuikm.jpg'),name:'茱妮2',number:'50',describe:'完结【穿越河西走廊，共赴一场跨越千年的对话】冬季甘肃旅行全攻略：兰州-张掖-嘉峪关-瓜州-敦煌'},
                {src:require('../assets/ertyvubinoopiuiycgvhjk.jpg'),scr:require('../assets/hjgxgfgfgvjhbjkhh.jpg'),name:'西西里玩不停2',number:'21',describe:'滇藏之路，雪山深处，谱一曲香巴拉的散文诗——香格里拉遛娃之旅'},
                {src:require('../assets/ytuioopiugbn.jpg'),scr:require('../assets/sxcytvyuhikjilnbuycyfgvuh.jpg'),name:'多多熊',number:'422',describe:'想念如果有声音，大西北给你回应'},
                {src:require('../assets/drtyuiopoiuytyyuuiio.jpg'),scr:require('../assets/cvhbjklmjiuytcvbuukilomn.jpg'),name:'Allenl艾伦伦2',number:'1',describe:'柳叶湖畔，寻回向往已久的生活（湖南常德小众度假攻略）'},
                {src:require('../assets/ytuioiouytryvubinio.jpg'),scr:require('../assets/uyhjgvkgfyfcvghkjlm.jpg'),name:'雍容makiori2',number:'18',describe:'【雍容makiori】横断北九州~独自行走在记忆里的海市蜃楼'},
                {src:require('../assets/Uuhiuyutdvubiuyfvu.jpg'),scr:require('../assets/iuifyyxfcgvhjllkhjghcvhbjnk.jpg'),name:'yyy旅行种草机2',number:'14',describe:'比美西更美西的青海海西8天环线自驾(翡翠湖\东台吉乃尔湖\恶魔之眼\俄博梁干货全攻略)'},
                {src:require('../assets/nklcfgvhkljnhiuyhubhnu.jpg'),scr:require('../assets/oufyxcyvubgbfdgvfdgddgf.jpg'),name:'AKA阿佟木2',number:'6',describe:'【自驾G331】穿行东北边境公路，书写北国之夏的童话（230美图+1.2万字东北夏日游玩指南）'},
                {src:require('../assets/dcytvyuhiikiuiytyctvuinikl.jpg'),scr:require('../assets/yiuhjiuyutytyuhiljkhgvhbjknlhgjbjnk.jpg'),name:'麥子游途2',number:'41',describe:'极地 永夜 纯白：记一场追逐极光的雪域自驾之旅（北欧极光之优选自驾环线）'}
            ],
             att3:[
                {src:require('../assets/kjhgfjvuhbjnkl.jpg'),scr:require('../assets/tyfugiojoihouytyvuikm.jpg'),name:'茱妮3',number:'50',describe:'完结【穿越河西走廊，共赴一场跨越千年的对话】冬季甘肃旅行全攻略：兰州-张掖-嘉峪关-瓜州-敦煌'},
                {src:require('../assets/ertyvubinoopiuiycgvhjk.jpg'),scr:require('../assets/hjgxgfgfgvjhbjkhh.jpg'),name:'西西里玩不停3',number:'21',describe:'滇藏之路，雪山深处，谱一曲香巴拉的散文诗——香格里拉遛娃之旅'},
                {src:require('../assets/ytuioopiugbn.jpg'),scr:require('../assets/sxcytvyuhikjilnbuycyfgvuh.jpg'),name:'多多熊3',number:'42',describe:'想念如果有声音，大西北给你回应'},
                {src:require('../assets/drtyuiopoiuytyyuuiio.jpg'),scr:require('../assets/cvhbjklmjiuytcvbuukilomn.jpg'),name:'Allenl艾伦伦3',number:'1',describe:'柳叶湖畔，寻回向往已久的生活（湖南常德小众度假攻略）'},
                {src:require('../assets/ytuioiouytryvubinio.jpg'),scr:require('../assets/uyhjgvkgfyfcvghkjlm.jpg'),name:'雍容makiori3',number:'18',describe:'【雍容makiori】横断北九州~独自行走在记忆里的海市蜃楼'},
                {src:require('../assets/Uuhiuyutdvubiuyfvu.jpg'),scr:require('../assets/iuifyyxfcgvhjllkhjghcvhbjnk.jpg'),name:'yyy旅行种草机3',number:'14',describe:'比美西更美西的青海海西8天环线自驾(翡翠湖\东台吉乃尔湖\恶魔之眼\俄博梁干货全攻略)'},
                {src:require('../assets/nklcfgvhkljnhiuyhubhnu.jpg'),scr:require('../assets/oufyxcyvubgbfdgvfdgddgf.jpg'),name:'AKA阿佟木3',number:'6',describe:'【自驾G331】穿行东北边境公路，书写北国之夏的童话（230美图+1.2万字东北夏日游玩指南）'},
                {src:require('../assets/dcytvyuhiikiuiytyctvuinikl.jpg'),scr:require('../assets/yiuhjiuyutytyuhiljkhgvhbjknlhgjbjnk.jpg'),name:'麥子游途3',number:'41',describe:'极地 永夜 纯白：记一场追逐极光的雪域自驾之旅（北欧极光之优选自驾环线）'}
            ]
        }
    },
    methods:{
        dianjione(){
            this.nummm=1;
        },
         dianjitwo(){
            this.nummm=2;
        },
         dianjithree(){
            this.nummm=3;
        },
         dianjifour(){
            this.nummm=4;
        },
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
        jinrur(){
            this.baa=true;
        },
        likair(){
            this.baa=false;
        }
    }

}
</script>

<style  scoped>
    .gaoliang{
        box-shadow:0px 0px 10px #000;
    }
     .gtu{
        box-shadow:0px 0px 10px #000;
    }
     .gaoliang{
        color: green;
    }
    .sbig>div>p:nth-child(5){
        font-weight: bold;
    }
    #yuio{
        width: 1520px;
    }
    h1{
        margin: 15px;
    }
    #iju{
        width:1100px;
        height: 920px;
        margin:0 auto;
    }
    #iju>div:nth-child(2){
        margin-right: 30px;
    }
     #iju>div:nth-child(3){
        margin-right: 30px;
    }
     #iju>div:nth-child(4){
        margin-right: 30px;
    }
     #iju>div:nth-child(6){
        margin-right: 30px;
    }
     #iju>div:nth-child(7){
        margin-right: 30px;
    }
     #iju>div:nth-child(8){
        margin-right: 30px;
    }
    .sbig{
        width: 250px;
        height: 330px;
        float: left; 
        border: 1px solid khaki; 
        position: relative;
        margin-top: 20px;
    }
    .bigg{
        width: 250px;
        height: 200px;
    }
    .smalll{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        padding: 5px;
        background-color: white;
        left: 20px;
        top: 170px;
    }
    .sbig>div>span:nth-child(4){
        position: absolute;
        width: 37px;
        height: 20px;
        right:5px;
        top:172px;
        color: white;
    }
    .sbig>div>span:nth-child(3){
        width: 100px;
        height: 20px;
        text-align: right!important;
        margin-right: -10px;
    }
    .sbig>div>p:last-child{
        margin: 10px;
        font-size: 16px;
        text-align: left;
    }
    #dibuanniu>div{
        width: 50px;
        height:5px ;
        background-color:#339393;
        float: left;
        margin-top: 50px;
        margin-left: 40px;
    }
     #dibuanniu>div:first-child{
         margin-left: 360px;
     }
     #btls{
         width: 230px;
        float: left;
        height: 50px;
        border: 1px solid rgb(73, 67, 67);
        margin-top: 80px;
        margin-left: -240px;
        background-color: white;
        font-size: 20px;
    }
</style>