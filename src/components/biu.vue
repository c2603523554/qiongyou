<template>
    <div id="iop">
        <div id="bid">
            <h1>Biu!Biu!</h1>
            <img v-for="(item,index) in img" :key="index" :src="item.src">
            <p id="piuy"><img src="../assets/svgcfbhsjkgvldlfjld.jpg" ></p>
            <div id="hdjdkjs">
                <div>
                    <h2>穷游APP</h2>
                    <span>
                        <img src="../assets/Fit8-iYIp4nTLKIxL8eCsC0jJi1f.jpg" alt="">穷游app
                    </span>
                     <span>
                        <img src="../assets/vcbdsnidsfdgbifsjk[p.png" alt="">行程助手
                    </span>
                     <span>
                        <img src="../assets/giubonkbhdvskfjdls.png" alt="">穷游锦囊
                    </span>
                </div>
                <div>
                    <h2>微信号</h2>
                     <span>
                        <img src="../assets/Fuqj_wFiabczfvhrTD8ciLNmgES4.png" alt="">穷游网
                    </span>
                     <span>
                        <img src="../assets/Fk9OCTSYnotcck1f_06yVegUqTW-.png" alt="">穷游最世界
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
         return{
             img:[
                 {src:require('../assets/fgsyvdfgbuiniohndbsvdbg.gif')},
                 {src:require('../assets/fc1ea7509cc8c6fcc8c9dadb09250135.jpg')},
                 {src:require('../assets/ygvuhjknhdxrtcfyghbj.gif')},
                 {src:require('../assets/f1d75860dafcd962a30071f4828f4980.png')},
                 {src:require('../assets/c02bd0db047c7c0828e1eba95edfa799.jpg')},
                 {src:require('../assets/e60c863545de6db9c7f672df7a9881f6.jpg')},
                 {src:require('../assets/bee3edfd28f83dc227d7bd8ad33be616.jpg')},
                 {src:require('../assets/ubvdfoigkndfjigrgjnht.gif')},
                 {src:require('../assets/58bb59c2a4eb88621eb6d3b641f9d6a3.png')},
                 {src:require('../assets/2d2df324d10f3f1a0725c43aca6d76fd.jpg')},
                 {src:require('../assets/d92e557a2da9799625a92dfbd8f54eb1.jpg')},
                 {src:require('../assets/3c78312abef7509f0d5216a2fa657216.jpg')},
                 {src:require('../assets/879bdd2b81b7bcb2f9537949c5762b5b.jpg')},
                 {src:require('../assets/3febb6445e26a091506fd3649724841f.png')},
                 {src:require('../assets/4311427ec9390e7a5c83211b3df25d19.jpg')},
                 {src:require('../assets/gfucfyibsdigvorigbvehrj.gif')},
                 {src:require('../assets/0aefccafc07520943a3f5ee90e7444f8.png')},
                 {src:require('../assets/273fafd6c797e5206476ff4e5d402def.png')},
                 {src:require('../assets/04b03ac530e5b649a65a4727709cb9f3.jpg')},
                 {src:require('../assets/dd6c3eacee4839de4f0b4585ea8db344.png')}
             ]
         }
    }
}
</script>

<style scoped>
    #iop{
        width: 1520px;
    }
    #bid{
        width: 1100px;
        height: 1700px;
        margin: 0 auto;
    }
    h1{
        text-align: left;
        padding: 10px;
    }
    #bid>img{
        width: 250px;
        height: 250px;
        float: left;
        border-radius:10px ;
        margin-right: 15px;
        margin-left: 10px;
        margin-top: 15px;
    }
    #piuy>img{
        width: 250px;
        height: 100px;
        margin: 0 auto;
        float: none;
        padding: 22px;
    }
    #hdjdkjs>div{
        width: 500px;
        float: left;
    }
    #hdjdkjs>div:last-child{
        float: right;
    }
    #hdjdkjs>div>span{
        width: 100px;
        height: 120px;
        float: left;
        text-align: center;
        margin: 10px;
    }
    #hdjdkjs>div>span>img{
        width: 100px;
        height: 100px;
    }
    #hdjdkjs h2{
        width: 100px;
        float: left;
        line-height: 140px;
    }
</style>
 