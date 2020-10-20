/* 目的地 */
<template>
	<div>
		<div class="headerimg">
		<div> <p class="h1">你好,世界!</p></div>
		<div class="s">
		<input type="text" placeholder="搜索国家、城市、目的地" /> 
		<button class="btn">搜索</button>
		</div>
		</div> 
		
		<div class="body-one">
			<span>实时热门TOP10</span>
			<div class="title">
				<div>
					<h3>国家TOP10</h3>
					<ul>
						<li v-for="(item,index) in num1">{{index+1}} {{item.name}}<i v-show="item.nn" class="el-icon-top"></i> </li>
					</ul>
				</div>
				<div>
					<h3>境外城市TOP10</h3>
					<ul>
						<li v-for="(item,index) in num2">{{index+1}}    {{item}}</li>
					</ul>
				</div>
				<div>
					<h3>国内TOP10</h3>
					<ul>
						<li v-for="(item,index) in num3">{{index+1}}    {{item}}</li>
					</ul>
				</div>
				<div>
					<h3>景点TOP10</h3>
					<ul>
						<li v-for="(item,index) in num4">{{index+1}}    {{item}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="body-two">
		   <h2>热门城市推荐</h2>
			<ul class="tabs">
			<li v-for="(tab,index) in tabs" :class="{active:num===index}" @click="tabsSwitch(index)"><a href="javascript:">{{tab.name}}</a></li>
			</ul>
			<div class="tabs-con" v-show="num===0">
				<dl v-for="item in tabs11">
				<dt >{{item.name}}</dt> 
				<dd v-for="ddd in item.value">{{ddd}}</dd>
				</dl>
			</div>
			<div class="tabs-con" v-show="num===1">
			<p>内容2</p>
			</div>
			<div class="tabs-con" v-show="num===2">
			<p>内容3</p>
			</div>
			<div class="tabs-con" v-show="num===3">
			<p>内容4</p>
			</div>
			<div class="tabs-con" v-show="num===4">
			<p>内容5</p>
			</div>
			<div class="tabs-con" v-show="num===5">
			<p>内容6</p>
			</div>
		</div>
		
		<div class="body-three">
			<h3>月度推荐</h3>
			<ul class="tabs month">
				<li :class="{active:uu==index}" v-for="(item,index) in tabs2" @click="on(index)">{{item}}</li>
			</ul>
			<div class="mlist">
				<ul v-for="(item,index) in textt" v-show="index==uu">
					<li v-for="ii in item.value" v-bind:style="{'background-image':'url('+ii.src+')','background-repeat':'no-repeat','background-size':'100%','height':'300px','width':'190px'}"><a>
					<h3>{{ii.text}}</h3>
					<p>{{ii.text2}}</p>
					</a> </li>
				</ul>
			</div>
		</div>
		<div class="cool">
				 <dl v-for="item in text7">
					 <dt>{{item.name}}</dt>
					 <dd v-for="d in item.value" class="lines">{{d}}</dd>
				 </dl>
				 <dl v-for="item in text8">
					 <dt>{{item.name}}</dt>
					 <dd v-for="d2 in item.value">{{d2}}</dd>
				 </dl>
		</div>
	<div id="bignav" v-show="scrolls" class="sshow">
		<div>
		<span>穷游目的地</span>
		<span>|</span>
		<span>你好，世界！</span>
		</div>
		<input type="text" placeholder="搜国家/城市/目的地"/>
	</div>
	</div>
</template>

 
<script>
	
	
	export default{
		data(){
			return{
			num1:[{name:'美国',nn:false},{name:'日本',nn:false},{name:'德国',nn:false},{name:'法国',nn:false},{name:'泰国',nn:false},{name:'意大利',nn:false},{name:'英国',nn:false},{name:'马来西亚',nn:false},{name:'澳大利亚',nn:false}, {name:'西班牙',nn:false}],
			num2:['东京，日本','大阪，日本','曼谷，泰国','汉堡，德国','加拿大，西班牙','加拿大，美国','洛杉矶，美国','京都，日本','慕尼黑，德国','巴黎，法国'],
			num3:['北京','三亚','重庆','成都','苏州','上海','长沙','西安','广州','杭州'],
			num4:['稻城亚丁，稻城','蜈支洲岛，三亚','黄山，黄山市','九寨沟风景区，九寨沟','玉龙雪山，丽江','成都大熊猫繁育研究基地，成都','洱海，大理','毕棚沟，理县','呼伦贝尔大草原，呼伦贝尔','西溪国家湿地公园，杭州'],
			tabs: [
						  {name:'热门推荐'},
						  {name:'日韩 港澳台'},
						  {name:'东南亚及亚洲其他'},
						  {name:'欧洲'},
						  {name:'大洋洲 北美'},
						  {name:'非洲 南美'}
						 ],
			num: 0,
			uu:'',
			scrolls:false,
			tabs1:['全球Top 10 城市','免签及落地签最热旅行地','热门海岛'],
			tabs11:[
				{name:'全球Top 10 城市',value:['东京','曼谷','香港'] },
				{name:'免签及落地签最热旅行地',value:['济州岛','印度尼西亚','泰国','塞班岛','摩洛哥','卡塔尔','毛里求斯','柬埔寨','厄瓜多尔']},
				{name:'热门海岛',value:['济州岛','印度尼西亚','泰国','塞班岛','摩洛哥','卡塔尔','毛里求斯','柬埔寨','厄瓜多尔']},
				],
				tabs2:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
				textt:[
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
					{value:[{src:require('../assets/66db0b38532d3bb038987dfed488cd3b_1_imageslim.jpg'),text:'新西兰',text2:'新西兰是个好地方'},{src:require('../assets/15eefae738e809f6e41560a9325470d1_1_imageslim.jpg'),text:'韩国•江原道',text2:'韩国•江原道是个好地方'},{src:require('../assets/3dc91392fec5b3a779455e1edc7c4ec4_1_imageslim.jpg'),text:'美国•夏威夷',text2:'美国•夏威夷是个好地方'},{src:require('../assets/d4592af7e9f7b0d41416962e4228435a_1_imageslim.jpg'),text:'泰国•苏梅岛',text2:'泰国•苏梅岛是个好地方'},{src:require('../assets/fc0e4c2a4ec71c273a9267fd48034487_1_imageslim.jpg'),text:'俄罗斯•贝加尔湖',text2:'俄罗斯•贝加尔湖是个好地方'},]},
				 ],
				 text7:[{name:'相关目的地',value:['清迈','东京','贾奈特','贾拉拉巴德','亚的斯亚贝巴','里士满','班斯科','科普里夫什蒂察','梅尔尼克','卢基约','华沙','卡尔帕奇','卢布林','蒙加尔','马拉博','埃斯比约','朗厄兰岛','法兰克福','摩泽尔河谷','俄罗斯萨马拉','塔佩门','清曼寺','三和','许留山','富士电视台','东京大学','日本科学未来馆','三平']},],
				 text8:[{name:'相关Biu',value:[' 墨尔本周边休闲生态去处推荐🏯 Dandenong Ranges 丹顿农山脉位于墨','青海旅游2020最新推荐：青海湖 茶卡盐湖 水上雅丹 东台吉乃尔湖 敦煌 张掖七','来武功山看日出星空云海｜体验第一次住帐篷📍目的地: #金顶[地点]# #武功山','[东寺历史东寺是位于京都市南区九条町，东寺是真言宗的总本山。 该寺供奉本尊是药师如','幽鹤国家公园的绝对明星——Lake O’Hara欧哈拉湖（图1）是落基山中一颗耀行程甘青大环线 ','行程时间一个星期左右 行程距离两千七百公里 主要景点青海湖 茶卡']}]
				 
		};
		},
		mounted:function(){
			window.addEventListener('scroll',this.handleScroll)
				this.num1.forEach((item,index)=>{
					if(index==4||index==7||index==9){
						item.nn=true
					}
				})
			
		},
		methods: {
			handleScroll(){
				let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
				console.log(scrollTop)
				var bignav  = document.getElementById("bignav");
				if( scrollTop> 30){  
				   this.scrolls=true;
					
				}else{ 
				    // bignav.style.position = 'static';
					 this.scrolls=false;
					 
				}
			},
		     tabsSwitch(index) {
		       //用到的变量要加上this，表示使用上面构造函数app1的对象num
		       this.num = index;
		      } ,
				on(index){
				this.uu=index
	       // alert(index.currentTarget.innerHTML );
				}
		    },
			 destroyed () {
			   window.removeEventListener('scroll', this.handleScroll)
			 }
	};
	
</script>

<style scoped>
	*{
		padding: 0px;
		margin: 0px;
	}
	.headerimg{
		width: 100%;
		display: inline-table;
		background-image: url(../assets/d08a051f7da145248c061bd751a05639.gif) ;
		background-repeat:no-repeat;
	   background-size:100% 100%;
		height: 500px;
	}
	.h1{
		color: white;
		font-size: 56px;
		font-weight: bolder;
		position: relative;
		top: 180px;
	}
	.s{
		width: 620px;
		height: 60px;
		display: flex;
		margin: 200px 270px;
		/* background-color: #fff; */
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	.s input{
		 outline: none;
		 height: 20px;
		 padding: 20px 0;
		 width: 100%;
		 border: none;
		 font-size: 18px;
		 text-indent: 31px;
		 background-color: #fff;
		 -webkit-font-smoothing: antialiased;
	}
	.s button{
		    display: block;
		    width: 138px;
		    height: 60px;
		    line-height: 58px;
		    text-align: center;
		    font-size: 18px;
		    color: #fff;
		    background-color: #28b76c;
		    border: 1px solid #27ad66;
		    text-decoration: none;
		    border-top-right-radius: 4px;
		    border-bottom-right-radius: 4px;
		
	}
	.body-one{
		width: 980px;
		display: inline-block;
		margin-top: 40px;
	}
	.body-one span{
		font-size: 24px;
	}
	.title{
		display: flex;
		margin-top: 30px;
		justify-content: space-around;
	}
	.title h3{
		text-align: left;
	}
	.title ul{
		margin-top: 22px;
	}
	.title li{
		text-align: left;
		list-style: none;
		margin-bottom: 8px;
	}
	.title li:hover{
		color: #27AD66;
	}
	.body-two{
		display: inline-block;
		margin-top: 30px;
	}
a {
	text-decoration: none;
	color: #777;
 }
.tabs {
	overflow: auto;
	display: flex;
	width: 980px;
	margin: 20px 150px;
	justify-content: space-around;
}
	.tabs li {
	float: left;
	list-style: none;
}
.tabs li a {
	display: block;
	padding: 10px 15px;
	color: #bbb;
	font-size: 18px;
}
.tabs li.active {
	border-bottom: 1px solid #27AD66;
	}
.tabs li.active a {
	color: #333;
	}
.tabs-con {
	    margin: 20px 150px;
	    padding: 15px;
	    text-align: left;
	   
	    width: 990px;
	}
	
	.tabs-con dl{
		width: 300px;
		margin-right: 30px;
		float: left;
		 
	}
	.tabs-con  dd{
		margin-right: 10px;
		float: left;
		margin-top: 6px;
		font-size: 15px;
	}
	.tabs-con  dd:hover{
		color: #27AD66;
	}
.body-three{
	margin-top: 35px;
}
.body-three h3{
	margin-bottom: 35px;
}	
.month li{
	width: 50px;
	height: 50px;
	line-height: 50px;
}	
.month li.active{
	background-color: #10B041;
	color: white;
	border-radius: 50%;
}	
.mlist ul{
	list-style: none;
	width: 980px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.mlist li:hover a{
	margin-top: -300px;
	background-color: rgba(0,0,0,.5);
 }
.mlist li a{
	
	color: #FFFFFF;
	text-align: left;
	 overflow: hidden;
	 padding: 0 14px;
	 position: relative;
	 top: 100%;
	 margin-top: -54px;
	 transition: margin-top .5s;
	 -webkit-transition: margin-top .5s;
	 -moz-transition: margin-top .5s;
	 -ms-transition: margin-top .5s;
	 z-index: 11;
	 height: 200%;
	 display: block;
	 text-decoration: none;
}
.mlist li{
	    background-color: #efefef;
	    overflow: hidden;
	    position: relative;
}
.mlist li a h3{
	padding: 10px;
}
.mlist li a p{
	padding: 10px;
}
.cool{
	margin-top: 50px;
	text-align: left;
	background: #f8f8f8;
	display: flow-root;
	
}
.cool dl{
	display: block;
	width: 1160px;
	margin: 0 auto;
}
.cool dt{
	font-size: 18px;
	height: 50px;
	line-height: 50px;
	color: #636363;
	clear: both;
	padding-top: 10px;
}
.cool dd.lines {
	width: auto;
}
.cool dd{
	color: #9d9d9d;
	font-size:13px ;
	width: 210px;
	margin-right: 20px;
	height: 30px;
	overflow: hidden;
	float: left;
	line-height: 30px;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.sshow{
	position: fixed;
	top: 0px;
	height: 40px;
	align-items: center;
	display: flex;
	justify-content: space-between;
	background-color: white;
	width: 100%;
}
.sshow div{
	color: #10B041;
	text-align: left;
	background-color: white;
	margin-left: 50px;
}
.sshow input{
	color: #636363;
	margin-right: 50px;
	padding: 0 20px;
	outline: none;
	width: 240px;
	height: 30px;
	border: 1px solid rgba(0,0,0,0.05);
}
</style>