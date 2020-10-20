<template>
    <div id="lp">
        <div>
            <ul>
                <li v-for="(i,index) in arr" :key="index">{{i}}</li>
            </ul>
            <p>2004-2020 © 穷游网® qyer.com All rights reserved. Version v5.57 <img src="../assets/FpDv3ta6ot3lmanWsTh5c-jmSSPq.jpg"/>京ICP备12003524号 京公网安备11010502041090 京ICP证140673号 营业执照 经营许可证</p>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:['穷游简介','合作伙伴','加入我们','新手上路','使用帮助','网站地图','会员条款','社区指南','版权声明','免责声明','联系我们']
        }
    }
}
</script>
<style scoped>
#lp{
    width: 1520px;
    height: 140px;
    background-color: #323232;
    border-top: 2px solid green;
}
#lp>div{
    width: 1100px;
    height: 60px;
    margin: 0 auto;
    text-align: left;
    padding-top: 20px;
}
ul>li{
    width: 85px;
    list-style: none;
    float: left;
    color: white;
    border-left: 1px solid #aaaaaa;
    padding-left:10px ;
}
li:nth-child(1){
    border-left: 2px solid green;
}
p{
    margin-left: 40px;
    margin-top: 40px;
    font-size: 14px;
    color: white;
}
img{
    width: 15px;
}
</style>