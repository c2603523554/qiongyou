/* 锦囊 */
<template>
	<div>
	<div class="big">
	<p>穷游锦囊</p>
   <div class="headimg">
	<div class="icon1">
		<i class="el-icon-search"></i>
		<input type="text" placeholder="搜索穷游锦囊"/>
	</div> 
   </div>
	<div class="tbody-one">
		<div class="one-left">
			<ul >
					 <li v-for="(item,index) in tabs1" :key="index" :class="{active:nnu===index}" @click="tabsclick(index)">{{item}}</li>
			</ul>
			<div v-show="nnu==0" class="show1">
					<dl v-for="(item,index) in tabs1n" :key="index">
						<dt>{{item.name}}</dt>
						<dd v-for="(item,index) in item.value" :key="index">{{tabs}}</dd>
					</dl>
			</div>
			<div  v-show="nnu==1" class="show1">
					<dl>
						<dt>2的标题</dt>
						<dd>2的内容</dd>
					</dl>
			</div>
			<div class="leftimg">
			<img src="../assets/110cde5db365e93006413274f7cb5ac9_FvkohTFHHz_cr-sle2eyNn3RmEJX.png" />
			<p>穷游锦囊APP</p>
			</div>
			<div class="sspan"><p></p></div>
		</div>
		<div class="one-right">
			<div id="lb">
			  <ul :style="'margin-left:-'+offset+'px'">
			    <li v-for="(item,index) in Img" :key="index" ><img :src='item.src' alt=item.number></li>
			  </ul>
			</div>
		</div>
	</div>
	<div class="tbodytwo">
		<h3>编辑推荐</h3>
		<ul>
			<li v-for="(item,index) in ttabs" :key="index">
				<img :src="item.src" />
				<p>{{item.name}}</p>
				<button>下载阅读</button>
			</li>
		</ul>
	</div>
	<div class="tbodythree">
		<div class="tthreeleft">
			<h3>他们刚刚下载了穷游锦囊</h3>
			<ul v-for="(item,index) in text1" :key="index">
				
				<li v-for="(t1,index) in item.value1" :key="index"><img :src="img" />刚刚下载了<a>{{t1}}</a>穷游锦囊 </li>
				<li v-for="(t2,index) in item.value2" :key="index"><img :src="img" />1分钟前下载了<a>{{t2}}</a>穷游锦囊 </li>
				<li v-for="(t3,index) in item.value3" :key="index"><img :src="img" />2分钟前下载了<a>{{t3}}</a>穷游锦囊 </li>
			</ul>
			<div>
			<p class="lii"><img src="../assets/f63435c74857aaa091c3a8c56190ebd8_9c1a.jpg" /> </p>
		   <p class="lii"><img src="../assets/58e9937a69c77fe23f76a8ab5d4cdc90_bb87.jpg" /> </p>
		</div>
		</div>
		<div class="threeright">
			<div>
			<div class="tt">	
			<h3>全部穷游锦囊</h3>
			<span>按更新时间</span>
			<span>|</span>
			<a>最近7天下载量</a>
			</div>
			<ul v-for="(item,index) in text2" :key="index">
				<li v-for="(t1,index) in item.value1" :key="index">
					<a><img :src="t1.src" />
					<a></a>
					</a>
					<p class="pp">{{t1.name}}</p>
					<p >{{t1.name2}}</p>
					<p >{{t1.name3}}</p>
				</li>
				<li v-for="(t2,index) in item.value2" :key="index">
					<a>
					<img :src="t2.src" />
					<a></a>
					</a>
					<p class="pp">{{t2.name}}</p>
					<p>{{t2.name2}}</p>
					<p>{{t2.name3}}</p>
				</li>
				<li v-for="(t3,index) in item.value3" :key="index">
					<a>
					<img :src="t3.src" />
					<a></a>
					</a>
					<p class="pp">{{t3.name}}</p>
					<p>{{t3.name2}}</p>
					<p>{{t3.name3}}</p>
				</li>
				<li v-for="(t4,index) in item.value4" :key="index">
					<a>
					<img :src="t4.src" />
					<a></a>
					</a>
					<p class="pp">{{t4.name}}</p>
					<p>{{t4.name2}}</p>
					<p>{{t4.name3}}</p>
				</li>
			</ul>
			</div>
			<div class="btnlist">
			<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="190">
		</el-pagination>
		</div>
		</div>
		
	</div>
	
	<div class="bottom-text">
		穷游锦囊是穷游网推出的原创旅游指南，致力于为旅行者提供实用的自助游攻略，包括美食购物、交通住宿、路线推荐、自驾路书、当地特色体验等，是出境游必不可少的旅游攻略
	 </div>
	
 </div>
   <div class="foot">
 	<div class="q-foot"></div>
 	<div class="q-footer">
 		<div class="q-footernav">
			<a v-for="(item,index) in text3" :key="index">{{item}}</a>
		</div>
 		<div class="q-footert">
			<span>
				2004-2020 © 穷游网® qyer.com All rights reserved. Version v5.57 京ICP备12003524号 京公网安备11010102001935号 京ICP证140673号 营业执照 经营许可证
			</span>
		</div>
 		<div class="q-footerl">
			<dl>
				<dt>友情链接</dt>
				<dd v-for="(item,index) in text4" :key="index"><a>{{item}}</a> </dd>
			</dl>
		</div>
 	</div>
 </div>
 </div>
</template>
<style type="text/css" scoped>
	*{
		margin: 0px;
		padding: 0px;
	}
	.big{
		width: 960px;
		margin: 0 auto;
	}
.big>p{
		text-align: left;
		margin: 20px 0;
		font-size: 12px;
	}
 .headimg{
	 position: relative;
	 background-image: url(../assets/57e82c29ac23ac6228c5e3f17106dc9b_FqT8WjBBe6TTRNDm072ITHymvbWW.jpg);
	  background-size:100% 100%;
	  height: 72px;
 }
 .icon1{
	 display: flex;
	 justify-content: space-around;
	 background-color: #fff;
	 width: 265px;
	 position: absolute;
	 height: 30px;
	 line-height: 30px;
	 border-radius: 5px;
	 top: 15px;
	 right: 15px;
 }
 .icon1 i{
	 line-height: 30px;
 }
 .icon1 input{
	 border: none;
 }
 .tbody-one{
	 margin-top: 10px;
	 display: flex;
	 justify-content: space-between;
 }
 .one-left{
	 width: 200px;
	 position: relative;
 }
 .one-left li.active{
	 background-color: #777777;
 }
 
 .show1{
	 position: absolute;
	 width: 200px;
	 z-index: 99;
	 left: 205px;
	 background-color: #f2f2f2;
	 text-align: left;
	 top: 0px;
 }
 .show1 dd{
	 margin: 10px;
 }
 .one-left li{
	    list-style: none;
	     padding: 0px 20px;
	     text-align: left;
	     height: 33px;
	     line-height: 33px;
	     background-color:#f6f6f6;
	     margin-bottom: 1px;
 }
 .leftimg{
	 display: flex;
	 padding: 0px 35px;
	 background-color: #f6f6f6;
	
 }
 .leftimg img{
	 width: 30px;
	 padding: 3px 0px;
 }
 .leftimg p{
	 height: 30px;
	 line-height: 30px;
 }
 .sspan{
	 width: 200px;
	 height:124px ;
	 background-color: #f6f6f6;
 }
.sspan p{
	background-image: url(../assets/c1872e2461c77fb0ad37c4d16cc19557_FkbJZOgshrBmgw4UIQOkS_Yy1qnk.png);
	background-size: 100%;
	width: 120px; 
	height: 120px;
	/* background-color: #f6f6f6; */
	margin: 0px 40px;
 }
 .one-right{
	 width: 750px;
 }
 
#lb{
   width: 750px;
   white-space: nowrap;
   overflow: hidden;
   position: relative;
 }
#lb ul{
   padding: 0;
   width: 6080px;
 }
#lb ul li img{
   width: 750px;
   height: 500px;
 }
#lb ul li{
   float: left;
   list-style: none;
   margin: 0;
 }
.tbodytwo{
	 margin-top: 30px;
	 height: 271px;
 }
 .tbodytwo h3{
	 text-align: left;
	 margin-bottom: 10px;
 }
.tbodytwo ul{
	 padding: 0 3px; 
 }
.tbodytwo li{
	 
	width: 108px;
	list-style: none;
	float: left;
	border-left: 1px dotted #ccc;
	padding: 15px 25px;
	background-color: hsl(0, 0%, 96%);
 }
 .tbodytwo p{
	 text-align: left;
	 font-weight: 700;
	 color: #006aad;
	 padding-top: 10px;
	 font-size: 12px;
 }
 .tbodytwo button{
	 width: 108px;
	 height: 24px;
	 color: #FFF;
	 background-color: #409EFF;
	 border-color: #409EFF;
	 border-radius: 4px;
	 border: 1px solid #DCDFE6;
	 margin-top: 7px;
 }
.tbodytwo li:first-child{
	border-left: none;
 } 
.tbodytwo img{
	 width: 100px;
	 
 }
 .tbodythree{
	 margin-top: 50px;
	 width: 960px;
	 display: flex;
	 justify-content: space-between;
 }
 .tthreeleft{
	 width: 270px;
 }
 .tthreeleft ul img{
	 width: 24px;
	 float: left;
	 border-radius: 50%;
	 margin-right: 10px;
 }
 .tthreeleft li{
	 list-style: none;
	 text-align: left;
	 font-size: 12px;
	 margin-top: 6px;
	 height: 24px;
	 line-height: 28px;
	 color: #666;
	 overflow: hidden;
	
 }
.tthreeleft a{
	color: #1C95DD;
} 
.lii img{
	width: 270px;
	margin-top: 30px;
 }
.threeright{
	width: 670px;
 }
.tt{
	text-align: left;
	margin-bottom: 10px;
} 
.threeright ul{
	height: 240px;
	margin-bottom: 18px;
   border-bottom: 1px dotted #e2e2e2;
} 
.threeright li:first-child{
	padding-left: 0px;
} 
.threeright li{
	list-style: none;
	width: 108px;
	float: left;
	padding-left: 32px; 
 }
.threeright img{
	width: 100px;
	padding: 3px;
	box-shadow: 0 0 2px #281919;
	background-color: #fff;
	border: 1px solid #fff;
}
.threeright li a:first-child{
	position: relative;
	display: block;
}
.threeright li a:first-child:hover a{
	display: block;
}
.threeright li a a{
	display: none; 
	position: absolute;
	top: 4px;
	left: 4px;
	width: 100px;
	height: 150px;
	background-color: #000;
	opacity: .4;
} 
.threeright  p{
	font-size: 12px;
	margin-top: 5px;
	font-weight: normal;
	text-align: left;
 }
.btnlist{
	margin-top: 30px;
	height: 50px; 
 }
.btnlist ul li{
	width: 20px;
} 
.btnlist ul{
	border: none;
}
.pp{
	 color:#006AAD;
 }
 .bottom-text{
	 text-align: center;
	 font-size: 10px;
	 margin-top: 40px;
	 margin-bottom: 20px;
 }
 .foot{
	 width: 1210px;
	 background-color: #323232;
	 padding-bottom: 70px;
 }
 .q-foot{
	 height: 3px;
	 background-color: #25a851;
 }
.q-footer{
	margin: 36px auto 0;
	width: 980px; 
 }
 .q-footernav a{
	border-left: 2px solid #636363;
	 margin-right: 10px;
	 padding-left: 10px;
	 font-size: 14px;
	 line-height: 14px;
	 font-weight: 700;
	 color: silver; 
 }
 .q-footert{
	 margin-top: 18px;
	 font-size: 12px;
	 color: #636363;
 }
.q-footerl{
	color: #636363; 
	float: left;
	padding-left: 65px;
	padding-top: 20px;
 }
.q-footerl dt{
	float: left;
 	 font-size:14px ;
	 font-weight: 700;
  }
  .q-footerl dd{
	float: left;
  	padding-right: 5px;
  	font-size: 12px;
  	line-height: 20px;
	height: 20px;
   }
.q-footerl a{
	border-right: 1px solid #636363;
	height: 12px;
	margin-left: 10px;
	padding-right: 10px;
 }
</style>
<script>
 export default{
	 data(){
		 return{
			 num:0,
			 offset:0,
			 Img:[
			  {number:1,src:require('../assets/daeb911e34ef88c4c196d47faef14732_1000.jpg')},
			  {number:2,src:require('../assets/8eab30750d35bf9e415de692d71580d2_1000.jpg')},
			  {number:3,src:require('../assets/7274e9633a54e1c9fff73a1e6f037195_1000.jpg')},
			  {number:4,src:require('../assets/de5367b04a09b7562e6b5f551f445472_1000.jpg')},
			  {number:5,src:require('../assets/3afe288e40da6e7218976b7ff0c3a738_1000.jpg')},
			 ],
			 tabs1:['亚洲','欧洲','北美洲','南美洲','大洋洲','非洲','南极洲','杂志','专题锦囊','中国'],
			 nnu:-1,
			 img:require("../assets/e2511971bae5d37bcc0f0605dbaf132f_200_v=.jpg"),
			 tabs1n:[
			 				 {name:'伊朗',value:['伊朗','丹麦','哈哈','解决']},
			 				 {name:'法国',value:['零零','意义','品牌','方法']}
			 				 ],
			ttabs:[
				{src:require('../assets/c71defd6b09fe5ecd91fbe21c3b11095_260_390_1597309095.jpg'),name:'夏河'},
				{src:require('../assets/0e36da72ac1f69ae6d39cc90f68772fc_260_390_1590996028.jpg'),name:'新疆天山'},
				{src:require('../assets/9adaf167f53e74d25c4b14897e592ca4_260_390_1553158226.jpg'),name:'巴蜀石窑'},
				{src:require('../assets/324bb77d829a4bb71c96d77459f5359d_260_390_1536561057.jpg'),name:'青藏铁路旅行指南'},
				{src:require('../assets/3619c1478d5f17b2116d2f5d8c9bce43_260_390_1583411882.jpg'),name:'大五台山'},
				{src:require('../assets/ada9d454a91c6841abce36a83bb185b2_260_390_1566292180.jpg'),name:'苏州园林'},
			],	
			text1:[{value1:['海口','三亚','重庆美食','重庆']},{value2:['香港西贡','香港迪尼斯乐园','香港购物','香港离岛徒步']},{value3:['香港美食','香港']}]	,
			text2:[
				{value1:[{src:require('../assets/231552619eec31b2fe46c49095232431_260_390_1584442917.jpg'),name:'秘鲁',name2:'秘鲁',name3:'2020-03-17'},{src:require('../assets/5a3e7138bc54afe374bf39c13d584cab_260_390_1584348236.jpg'),name:'东京动漫',name2:'日本',name3:'2020-03-16'},{src:require('../assets/d22856a0f8263fe5edf57cbeed981f9e_260_390_1583749267.jpg'),name:'东京',name2:'日本',name3:'2020-03-09'},{src:require('../assets/57c7b397c7f1d0ed7621be0cba5e6aec_260_390_1583316151.jpg'),name:'玻利维亚',name2:'玻利维亚',name3:'2020-03-04'},{src:require('../assets/1257b95ad24567930efba35944f58da5_260_390_1583097267.jpg'),name:'纽约',name2:'美国',name3:'2020-03-02'}]},
			{value2:[{src:require('../assets/231552619eec31b2fe46c49095232431_260_390_1584442917.jpg'),name:'秘鲁',name2:'秘鲁',name3:'2020-03-17'},{src:require('../assets/5a3e7138bc54afe374bf39c13d584cab_260_390_1584348236.jpg'),name:'东京动漫',name2:'日本',name3:'2020-03-16'},{src:require('../assets/d22856a0f8263fe5edf57cbeed981f9e_260_390_1583749267.jpg'),name:'东京',name2:'日本',name3:'2020-03-09'},{src:require('../assets/57c7b397c7f1d0ed7621be0cba5e6aec_260_390_1583316151.jpg'),name:'玻利维亚',name2:'玻利维亚',name3:'2020-03-04'},{src:require('../assets/1257b95ad24567930efba35944f58da5_260_390_1583097267.jpg'),name:'纽约',name2:'美国',name3:'2020-03-02'}]},
			{value3:[{src:require('../assets/231552619eec31b2fe46c49095232431_260_390_1584442917.jpg'),name:'秘鲁',name2:'秘鲁',name3:'2020-03-17'},{src:require('../assets/5a3e7138bc54afe374bf39c13d584cab_260_390_1584348236.jpg'),name:'东京动漫',name2:'日本',name3:'2020-03-16'},{src:require('../assets/d22856a0f8263fe5edf57cbeed981f9e_260_390_1583749267.jpg'),name:'东京',name2:'日本',name3:'2020-03-09'},{src:require('../assets/57c7b397c7f1d0ed7621be0cba5e6aec_260_390_1583316151.jpg'),name:'玻利维亚',name2:'玻利维亚',name3:'2020-03-04'},{src:require('../assets/1257b95ad24567930efba35944f58da5_260_390_1583097267.jpg'),name:'纽约',name2:'美国',name3:'2020-03-02'}]},
			{value4:[{src:require('../assets/231552619eec31b2fe46c49095232431_260_390_1584442917.jpg'),name:'秘鲁',name2:'秘鲁',name3:'2020-03-17'},{src:require('../assets/5a3e7138bc54afe374bf39c13d584cab_260_390_1584348236.jpg'),name:'东京动漫',name2:'日本',name3:'2020-03-16'},{src:require('../assets/d22856a0f8263fe5edf57cbeed981f9e_260_390_1583749267.jpg'),name:'东京',name2:'日本',name3:'2020-03-09'},{src:require('../assets/57c7b397c7f1d0ed7621be0cba5e6aec_260_390_1583316151.jpg'),name:'玻利维亚',name2:'玻利维亚',name3:'2020-03-04'},{src:require('../assets/1257b95ad24567930efba35944f58da5_260_390_1583097267.jpg'),name:'纽约',name2:'美国',name3:'2020-03-02'}]},
			],
			text3:['穷游简介','合作伙伴','加入我们','新手上路','使用帮助','网站地图','会员条款','社区指南','版权声明','免责声明','联系我们'],
			text4:['北京小区','留学生公寓网','看了吗视频','游多多旅游攻略','超级自由行','自助游攻略']		 
		 }
	 },
	 methods:{
		 on(){
			 setInterval(()=>{
			   if(this.num<4){
			     this.num++;
			   }else{
			     this.num=0;
			   }
			   this.offset=this.num*750;
			   
			 },3000)
		 },
		 tabsclick(index){
		 			 this.nnu = index;
		 }
	 },
	 mounted(){
	   this.on();
	 
	 }
 }
</script>