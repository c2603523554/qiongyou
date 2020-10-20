<template>
<div>
    <div id="kpp">
        <p>关于穷游网将实行<a>手机绑定实名制的说明</a></p>
        <p><input type="text" placeholder="手机号/邮箱/用户名" v-model="txt"></p>
        <P><input type="password" placeholder="密码" v-model="ttxt"></P>
        <p>忘记密码</p>
        <button @click="taxt">登录</button>
        <p>
            <img src="../assets/bscihbsdvjndslk.jpg">
            <img src="../assets/vudcbhjndfbvdklf.png">
            <img src="../assets/weixin.jpg">
            <img src="../assets/weibo.jpg">
        </p>
        <p>没有穷游账号?<a @click="zhuce">立即注册</a><a href="#">境外手机登录</a></p>
    </div>
   
</div>
    
    
</template>


<script>
export default {
     data(){
        return{  
            txt:'',
            ttxt:''
        }
    },
    methods:{
        taxt(){
            console.log("1");
            let reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
            let txt =this.txt;
            if((!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(txt)))&&(!reg.test(txt))){ 
                alert("手机号码有误，请重填");  
                return false; 
            }
            else{
                if(this.ttxt==''){
                    alert("密码为空，请重填");  
                    return false; 
                }
            }
            this.$router.push('/')
        },
        zhuce(){
            this.$router.push('/sign')
        }
    }
}
</script>


<style  scoped>
     a{
        text-decoration: none
    }
    #kpp>p{
        text-align: left;
        color: rgb(67, 71, 67);
        margin: 10px;
    }
     #kpp>p>a{
         color: green;
     }
    div{
        color: black;
    }
    #kpp>p:nth-child(1){
        font-size: 13px;
        margin-top: 16px;
    }
    #kpp>p:nth-child(2)>input{
        width: 95%;
        height: 40px;
        margin-top: 20px;
        border-radius: 1px;
        border: 1px solid #cccccc;
    }
     #kpp>p:nth-child(3)>input{
        width: 95%;
        height: 40px;
        margin-top: 20px;
        border-radius: 1px;
        border: 1px solid #cccccc;
    }
    #kpp>p:nth-child(4){
        text-align: right;
        font-size: 12px;
        color: lightseagreen;
        margin: 10px;
    }
    #kpp>button{
        width: 95%;
        height: 40px;
        border: none;
        border-radius: 2px;
        background-color: green;
        color: white;
        font-size: 16px;
    }
    #kpp>p:nth-child(6)>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 40px;
    }
    #kpp>p:nth-child(7){
        margin-top: 40px;
    }
    #kpp>p:nth-child(7)>a:last-child{
        float: right;
    }




    
</style>