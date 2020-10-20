<template>
    <div id="ioo">
        <p>关于穷游网将实行<a>手机绑定实名制的说明</a></p>
        <p><label for="sex"></label>
            <select>
                <option>阿尔巴尼亚</option>
                <option>阿尔及利亚</option>
                <option>阿富汗</option>
                <option>阿根廷</option>
                <option>爱尔兰</option>
            </select>
            <input type="text" placeholder="手机号" v-model="txt"></p>
        <p><input type="text" placeholder="图中识别码" v-model="val"> <span @click='yanzhengma'>{{num}}</span></p>
        <p><input type="text" placeholder="输入短信中的验证码"><button @click='iii&&getCode()'><span v-if="iii">{{a}}</span><span v-else>({{kkk}}秒)重新发送</span></button></p>
        <button @click="taxt">登录</button>
         <p>
            <img src="../assets/bscihbsdvjndslk.jpg">
            <img src="../assets/vudcbhjndfbvdklf.png">
            <img src="../assets/weixin.jpg">
            <img src="../assets/weibo.jpg">
        </p>
        <p>没有穷游账号?<a @click="zhuce">立即注册</a></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            txt:'',
            num:0,
            a:'发送验证码',
            val:'',//接收输入的验证码进行验证
            kkk:60,
            iii:true
        }
    },
    methods:{
        taxt(){
            let reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
            let txt =this.txt;
            if((!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(txt)))&&(!reg.test(txt))){ 
                alert("手机号码有误，请重填");  
                return false; 
            }
            this.$router.push('/')
        },
        getCode() {
            this.iii = false;
            this.kkk = 60;
            var auth_timetimer = setInterval(() => {
                this.kkk--;
                if (this.kkk <= 0) {
                    this.iii = true;
                    clearInterval(auth_timetimer);
                    }
                }, 1000);
        },
        yanzhengma(){
            let ni=Math.floor(Math.random()*10000);
            if(ni<1000){
                this.yanzhengma();
            }else{
                this.num=ni;
            }
        },
        zhuce(){
            this.$router.push('/sign')        
        }
    },
    beforeMount : function(){
        this.yanzhengma();
	},
}
</script>

<style scoped>
    #ioo>p{
        margin:10px
    }
    #ioo>p:nth-child(1){
        text-align: left;
        font-size: 13px;
    }
    #ioo>p:nth-child(1)>a{
        color: green;
    }
    #ioo>p:nth-child(2){
        margin-top:30px;
    }
     #ioo>p:nth-child(2)>select{
        float: left;
        width: 80px;
        height: 35px;
        font-size:10px;
     }
     #ioo>p:nth-child(2)>input{
        margin-left: 20px;
        float: left;
        width: 200px;
        height: 30px;
    }
    #ioo>p:nth-child(3)>input{
        margin-top: 20px;
        width: 170px;
        height: 30px;
        float: left;
     }
    #ioo>p:nth-child(3)>span{
        display: inline-block;
        width:120px;
        height: 35px;
        margin-top: 20px;
        background-color: grey;
        line-height: 35px;
    }
    #ioo>p:nth-child(4)>input{
        float: left;
        margin-top: 20px;
        width: 170px;
        height: 30px;
    }
    #ioo>p:nth-child(4)>button{
        width:120px;
        height: 35px;
        margin-top: 20px;
        background-color: grey;
        border: none;
    }
    #ioo>p:nth-child(7){
        float:left;
        margin:10px
    }
    #ioo>button{
        margin: 10px;
        float: left;
        width: 300px;
        height: 40px;
        margin-top: 20px;
        font-size: 20px;
        background-color: green;
        color: white;
        border: none;
    }
    #ioo>p:nth-child(6)>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 40px;
    }
</style>