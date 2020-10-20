<template>
    <div id="big">
        <div id="sbig">
            <div class="mbig">
                <h1>穷游体验馆</h1>
                <div id="hbig">
                    <img src="../assets/ytuibouitycvubniuyvb.jpg" >
                    <p>穿越时空的旅行者 猫王旅行体验官招募</p>
                    <p>价值<span>499</span>元<button>查看详情</button></p>
                    <hr>
                    <div>
                        <div>近期参与</div>
                        <div>
                            <ul>
                                <li v-for="(item,index) in arr" :key="index" @mousemove="jinru" @mouseleave="likai" :class="[aaa==1?'gaoliang':'']"><img :src="item.src"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button>查看往期</button>
            </div>
            <div class="mbig"  >
                <h1>特别策划</h1>
                <img src="../assets/yduvscbfsjdgvgbdsjvdkf.jpg" @mousemove="jinru2">
                <div v-if="isf" @mouseleave="likai2">
                    <img src="../assets/dsyvuhbijkldfljdksla.jpg">
                    <span class="fyy">旅行便利店</span>
                </div>
            </div>
            <div class="mbig">
                <h1></h1>
                <p @mousemove="jinru3"><img src="../assets/vsabdcjnsdkcghasjklcd.jpg" alt=""></p>
                <div v-if="isf2" @mouseleave="likai3" class="mbiggg">
                    <img src="../assets/dvucbsjknklwdjehcsmal22.jpg">
                    <span class="fyy">地球研习社</span>
                </div>
                <p @mousemove="jinru4"><img src="../assets/savgcbhiadshvbjklsskj.jpg" alt=""></p>
                <div v-if="isf3" @mouseleave="likai4" class="mbigggg">
                    <span class="fyy" style="margin-top:80px">地球研习社</span>
                </div>
            </div>
            <div class="mbig">
                 <h1>查看全部 ></h1>
                <p  @mousemove="jinru5" ><img src="../assets/vascbhkjasjcnhuashcjasbc.jpg" alt=""></p>
                <div v-if="isf4" @mouseleave="likai5" class="mbiggg">
                    <img src="../assets/dvucbsjknklwdjehcsmal22.jpg">
                    <span class="fyy">地球研习社</span>
                </div>
                <p  @mousemove="jinru6"><img src="../assets/uysvdcbsfdvbsdvkskd.jpg" alt=""></p>
                <div v-if="isf5" @mouseleave="likai6" class="mbigggg">
                    <img src="../assets/dvucbsjknklwdjehcsmal22.jpg">
                    <span class="fyy">地球研习社</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aaaa:999,
            aaa:999,
            isf:false,
            isf2:false,
            isf3:false,
            isf4:false,
            isf5:false,
            arr:[
                {src:require('../assets/bvrhbnrtjkbhribgrhtb.jpg')},
                {src:require('../assets/erxdtcfgvbhjnioujhgfretygh.jpg')},
                {src:require('../assets/ezrxtcfyvgubhjnklophikg.jpg')},
                {src:require('../assets/fuyvbkhbgjcjjghvblkjk.jpg')},
                {src:require('../assets/giusdbsdvfsdbfvhsdvfs.jpg')},
                {src:require('../assets/kjghldfghlkklyuhbjkn.jpg')},
                {src:require('../assets/qwefghjkjhxcvujhcc.jpg')},
                {src:require('../assets/ruigvrbtgtvrtlkbgrnnbj.jpg')},
                {src:require('../assets/suvbfsufbsibsifskhfssdv.jpg')},
                {src:require('../assets/tyxtrtuyulkjhhdyjkhbh.jpg')},
                {src:require('../assets/ueigvbrjgvbrtrgtbnrj.jpg')},
                {src:require('../assets/ugvbrfvrtbrntbrtibjk.jpg')},
                {src:require('../assets/xtcfygvhjbkhgfxzdfx.jpg')},
                {src:require('../assets/yegrfbhejrvkngrlbjkrgbrg.jpg')},
                {src:require('../assets/yugsdvoefhbhregergtrbt.jpg')}
            ]
        }
    },
     methods:{
        jinru(){
            this.aaa=1;
        },
        likai(){
            this.aaa=999;
        },
        jinru1(){
            this.aaaa=1;
        },
        likai1(){
            this.aaaa=999;
        },
        jinru2(){
            this.isf=!this.isf;
        },
        likai2(){
            this.isf=!this.isf;
        },
        jinru3(){
            this.isf2=!this.isf2;
        },
        likai3(){
            this.isf2=!this.isf2;
        },
        jinru4(){
            this.isf3=!this.isf3;
        },
        likai4(){
            this.isf3=!this.isf3;
        },
        jinru5(){
            this.isf4=!this.isf4;
        },
        likai5(){
            this.isf4=!this.isf4;
        },
        jinru6(){
            this.isf5=!this.isf5;
        },
        likai6(){
            this.isf5=!this.isf5;
        }
    }
}
</script>

<style scoped>
    .fyy{
        display: inline-block;
        width: 150px;
        height: 40px;
        font-size: 25px;
        color: white;
        font-weight: bold;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
    }
    .gaoliang{
       width: 30px;
       height: 30px;
    }
    .gaoliang1{
       color: green;
    }
    h1{
        text-align: left;
        margin-top: 15px;
        height: 45px;
        margin-bottom: 15px;
    }
    hr{
        margin: 5px;
    }
    #big{
        width: 1520px;
        height: 570px;
        background-color: #f5f5f5;
    }
    #sbig{
        width: 1100px;
        height: 500px;
        margin: 0 auto; display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content:space-between;
    }
    .mbig{
        width: 250px;
        height: 500px;
        float: left;
        position: relative;
    }
    .mbig>div{
        position: absolute;
        width: 250px;
        height: 408px;
        top: 75px;
        background-color:rgba(0, 0, 0, 0.7);
    }

    .mbiggg{
        position: absolute;
        width: 250px!important;
        height: 197px!important;
        top: 77px!important;
        background-color:rgba(0, 0, 0, 0.7);
    }
    .mbigggg{
        position: absolute;
        width: 250px!important;
        height: 199px!important;
        top: 280px!important;
        background-color:rgba(0, 0, 0, 0.7);
    }
     .mbigggg>img{
        width: 101px;
        height: 101px;
        margin: 0 auto;
        margin-top: 22px;
    }
     .mbiggg>img{
        width: 101px;
        height: 101px;
        margin: 0 auto;
        margin-top: 22px;
    }
    .mbig:nth-child(2)>div>img{
        width: 150px;
        height: 150px;
        margin: 0 auto;
        padding-top: 120px;
    }
    .mbig:last-child>h1{
        text-align: right;
    }
    .mbig>button{
        width: 252px;
        height: 45px;
        margin-top: 363px;
        font-size: 20px;
        color: green;
        border: 1px solid green;
    }
    .mbig>img{
        width: 250px;
        height: 408px;
    }
    .mbig>p>img{
        width: 250px;
        height: 200px;
    }
    #hbig{
        border: 1px solid black;
        background-color: white;
        height: 340px;
    }
    #hbig>img{
        width: 250px;
        height: 170px;
    }
    #hbig>p:nth-child(2){
        margin: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 21px;
    }
    #hbig>p:nth-child(3){
        margin: 10px;
        text-align: left;
    }
    #hbig>p:nth-child(3)>span{
        font-size: 35px;
        color: red;
    }
    #hbig>p:nth-child(3)>button{
        background-color: rosybrown;
        border: none;
        width: 100px;
        height: 35px;
        float: right;
    }
     #hbig>div>div{
         float: left;
     }
     #hbig>div>div:first-child{
         width: 40px;
         font-size: 14px;
         margin-left: 5px;
         margin-top: 10px;
     }
     #hbig>div>div:last-child{
         float: right;
         width: 200px;
         height: 50px;
        overflow: hidden;
        margin-top: 10px;
        
     }
      #hbig>div>div>ul{
          width: 600px;
          white-space: nowrap;
      }
     #hbig>div>div>ul>li{
         float: left;
         list-style: none;
         margin-right: 5px;
         text-align: center;
     }
    #hbig>div>div>ul>li>img{
        width:27px;
        height: 27px;
        border-radius: 50%;
        margin: 0 auto;
    }
</style>