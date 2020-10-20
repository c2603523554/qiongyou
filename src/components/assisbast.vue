<template>
    <div id="ione">
        <div id="itwo">
            <h2>热门国家路线</h2>
            <ul>
                <li v-for="(i,index) in arrr1" :key="index" @mousemove="jinru(index)"  @mouseleave="likai(index)" :class="[aaaa==index?'gtu':'']">{{i}}</li>
            </ul>
            <h2>热门主题路线</h2>
            <ul>
                <li v-for="(i,index) in arrr2" :key="index" @mousemove="jinru1(index)"  @mouseleave="likai1(index)" :class="[aaab==index?'gtu':'']">{{i}}</li>
            </ul>
            <h2>热门季节路线</h2>
            <ul>
                <li v-for="(i,index) in arrr3" :key="index" @mousemove="jinru2(index)"  @mouseleave="likai2(index)" :class="[aaac==index?'gtu':'']">{{i}}</li>
            </ul>
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
            arrr1:['泰国旅游线路','日本旅游线路','法国旅游线路','美国旅游线路','韩国旅游线路','马来西亚旅游线路','意大利旅游线路','新加坡旅游线路','德国旅游线路','西班牙旅游线路','英国旅游线路','瑞士旅游线路','澳大利亚旅游线路','奥地利旅游线路','柬埔寨旅游线路','越南旅游线路','荷兰旅游线路','印度尼西亚旅游线路','梵蒂冈旅游线路','捷克旅游线路','俄罗斯旅游线路','新西兰旅游线路','比利时旅游线路','菲律宾旅游线路','土耳其旅游线路','加拿大旅游线路','希腊旅游线路','阿联酋旅游线路','匈牙利旅游线路','瑞典旅游线路'],
            arrr2:['美食旅游线路','人文旅游线路','购物旅游线路','游园观光旅游线路','沙滩海岛旅游线路','自然风光旅游线路','自驾旅游线路','蜜月旅游线路','亲子旅游线路'],
            arrr3:['一月出发旅游线路','二月出发旅游线路','三月出发旅游线路','四月出发旅游线路','五月出发旅游线路','六月出发旅游线路','七月出发旅游线路','八月出发旅游线路','九月出发旅游线路','十月出发旅游线路','十一月出发旅游线路','十二月出发旅游线路','新年出发旅游线路','春节出发旅游线路','清明出发旅游线路','劳动节出发旅游线路','端午出发旅游线路','中秋出发旅游线路','国庆出发旅游线路'],
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
        }
    }
}
</script>

<style scoped>
 .gtu{
        color: blue;
    }
#ione{
    width: 1520px;
    height: 500px;
    background-color: #f8f8f8;
}
#itwo{
    width: 1100px;
    height: 500px;
    margin: 0 auto;
    text-align: left;
}
ul{
    padding: 0 ;
}
li{
    list-style: none;
    float: left;
    width: 137px;
    font-size: 12px;
    color: #9d9d9d;
    margin-right: 20px;
    padding: 10px 0;
}
h2{
    font-weight: normal;
}
h2:nth-child(3){
    margin-top: 192px;
}
h2:nth-child(5){
    margin-top: 80px;
}
</style>