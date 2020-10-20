<template>
    <div id="oth">
        <h1>不想自己做行程，为什么不看看别人的？</h1>
        <div>
            <ul>
                <li v-for="(i,index) in arrt" :key="index" @mousemove="jinru1(index)" @mouseleave="likai1(index)" :class="[aaaa==index?'gaoliang':'']"><span v-if="index==13">{{ye}}</span>{{i}}</li>
                <div v-if="isushow">
                </div>
            </ul>
            <hr>
            <ul>
                <li v-for="(i,index) in arrt1" :key="index" @mousemove="jinru2(index)" @mouseleave="likai2(index)" :class="[aaab==index?'gaoliang':'']"><span v-if="index==14">{{ye}}</span>{{i}}</li>
            </ul>
            <hr>
            <ul>
                <li v-for="(i,index) in arrt2" :key="index" @mousemove="jinru3(index)" @mouseleave="likai3(index)" :class="[aaac==index?'gaoliang':'']">{{i}}</li>
            </ul>
            <hr>
            <ul>
                <li v-for="(i,index) in arrt3" :key="index" @mousemove="jinru4(index)" @mouseleave="likai4(index)" :class="[aaad==index?'gaoliang':'']">{{i}}</li>
            </ul>
            <hr>
            <ul>
                <li v-for="(i,index) in arrt4" :key="index" @mousemove="jinru5(index)" @mouseleave="likai5(index)" :class="[aaae==index?'gaoliang':'']"><span v-if="index==12">{{yy}}</span>{{i}}</li>
            </ul>
            <hr>
            <ul>
                <li v-for="(i,index) in arrt5" :key="index" @mousemove="jinru6(index)" @mouseleave="likai6(index)" :class="[aaaf==index?'gaoliang':'']">{{i}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isushow:true,
            ye:'*',
            yy:'+',
            aaaa:999,
            aaab:999,
            aaac:999,
            aaad:999,
            aaae:999,
            aaaf:999,
            arrt:['目的地：','中国','泰国','日本','法国','美国','韩国','马来西亚','意大利','新加坡','德国','西班牙','英国','更多'],
            arrt1:['出行时间：','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月','新年','更多'],
            arrt2:['出行天数：','3天及以下','4天至7天','8天至14天','14天至20天','20天以上',],
            arrt3:['出发城市：','北京','上海','广州','深圳','重庆','成都','杭州','香港'],
            arrt4:['行程主题：','美食','人文','购物','游园观光','娱乐休闲','沙滩海岛','户外','自然风光','自驾','蜜月','亲子','多选'],
            arrt5:['精华等级：','一级精华','二级精华','三级精华'],

        }
    },
    methods:{
        jinru1(index){
            if(index>0){
                this.aaaa=index
            }
        },
        jinru2(index){
            if(index>0){
                this.aaab=index
            }
        },
        jinru3(index){
            if(index>0){
                this.aaac=index
            }
        },
        jinru4(index){
            if(index>0){
                this.aaad=index
            }
        },
        jinru5(index){
            if(index>0){
                this.aaae=index
            }
        },
        jinru6(index){
            if(index>0){
                this.aaaf=index
            }
        },
        likai1(index){
            this.aaaa=999
        },
        likai2(index){
            this.aaab=999
        },
        likai3(index){
            this.aaac=999
        },
        likai4(index){
            this.aaad=999
        },
        likai5(index){
            this.aaae=999
        },
        likai6(index){
            this.aaaf=999
        }
    }
}
</script>

<style scoped>
.gaoliang{
    color: blue;
}
hr{
    border:1 dashed #f5f5f5;
}
#oth{
    width: 1100px;
    height: 450px;
    margin: 0 auto;
    
}
#oth>div{
    height: 365px;
    border: 1px solid #666666;
}
#oth>h1{
    font-size: 30px;
    font-weight: normal;
    margin: 25px;
}
ul{
    float: left;
    width: 100%;
    line-height: 60px;
    padding: 0px;
}
ul>li:nth-child(1){
    width: 80px;
    text-align: right;
    margin-left: 60px;
}
li{
    list-style: none;
    text-align: left;
    float: left;
    margin-right: 20px;
}
#oth>div>ul:nth-child(1)>li:nth-child(14){
    float: right;
    margin-right: 60px;
}
#oth>div>ul:nth-child(3)>li:last-child{
    float: right;
    margin-right: 60px;
}
#oth>div>ul:nth-child(9)>li:last-child{
    float: right;
    margin-right: 60px;
}
</style>