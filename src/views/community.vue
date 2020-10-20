/* 社区 */
 
<template>
 <div>
	 <div class="blank"></div>
	 <div class="headers">
		 <div>
		 <div class="heads">
			 
			 <div class="headersl">
				 <h1>穷游论坛</h1>
				 <span v-for="item in text1">{{item}}</span>
			 </div>
			 <div class="headerr">
				 <p @click="pclick" v-bind:class="{aa:aa}" class="pfirst">版面列表</p>
				 
				 <p>发新帖</p>
			 </div>
		 </div>
		  <div v-show="isshow" class="isshow">
			  <dl v-for="item in text9">
				  <dt>{{item.name}}</dt>
				 <div class="ddt"> <dd v-for="ddt in item.value">{{ddt}}</dd></div>
			  </dl>
			  
			  </div>
		  </div>
	 </div>
	
	 <div class="bbig">
		 <div class="lun">
			 <ul :style="'margin-left:-'+off+'px'">
				 <li v-for="(item,index) in images"><img :src="item.src" /></li>
			 </ul>
		 </div>
		<div class="imgclick"><p class="mm" v-for="(item,index) in images"><img :src="item.src" @click="imgclickk(index)"/></p></div>
	 </div>
	 <div class="ttb">
		 <div class="ttbleft">
			 <ul class="uul">
				 <li v-for="(item,index) in text2" :class="{active:nu===index}" @click="clicktext(index)">{{item.name}}</li>
			 </ul>
			 <div v-show="nu==0" class="shows">
				 <ul>
					 <li v-for="item in text3">
						 <div>
						 <img :src="item.src" class="immg"/>
						 </div>
						 <div>
						 <div class="sleft">
							 <span>{{item.span1}}</span>
							 <span>在{{item.span2}}发布的游记</span>
							 <span>{{item.span3}}</span>
							 <span>{{item.span4}}</span>
						 </div>
						 <div class="textn">
							 <div>
							 <h3>{{item.h}}</h3>
							 <span>{{item.pp}}</span>
							 </div>
							<div> <img :src="item.ss"/></div>
						 </div>
						 </div>
					 </li>
				 </ul>
			 </div>
			 <div v-show="nu==1" class="shows">
				<ul><li v-for="item in text4">
			 	<div><img :src="item.src" class="immg"/> </div>
				<div>
					<div class="showsth">
						<span>{{item.span1}}</span>
						<span>{{item.span2}}</span>
						<span>{{item.span3}}</span>
						<span>{{item.span4}}</span>
					</div>
					<div><p>{{item.p1}}</p> </div>
					<div class="end">
						<div><p>出发{{item.span5}}</p><p>返程{{item.span6}}</p> </div>
						<div>{{item.span7}}</div>
					</div>
				</div>
				</li> </ul>
			 </div>
			 <div v-show="nu==2" class="shows">
			 	<div v-for="item in text5" class="ll">
					<h3>{{item.name}}</h3>
					<ul>
						<li v-for="ta in item.value" >
							<img :src="ta.src" />
							<div>
							<p>{{ta.text}}</p>
							<p>{{ta.text2}}</p>
							</div>
						</li>
					</ul>
				</div>
			 </div>
		 </div>
		 <div class="ttbright">
			 <div class="tr">
				<p v-for="item in text6" >{{item}}</p>
				<a>注册穷游</a>
				<p>已有账号？立即登录</p>
				<p>或通过第三方登录</p>
			 </div>
			 <div class="td">
				 <p>在手机上看帖结伴</p>
				 <p><a>iphone</a><a>Android</a> </p>
			 </div>
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
 </div>
</template>

<script>
export default {
    data(){
		 return{
			text1:['分享','结伴','找攻略'],
			text2:[{numm:1,name:'游记攻略'},{numm:2,name:'伙伴同游'},{numm:3,name:'版面列表'}],
			images:[
				{src:require('../assets/d566de203f53ff50a69eb04048faf3bb_680x400.jpg')},
				{src:require('../assets/f07c4d2a565903fd464fcffe7a89bcbb_680x400.jpg')},
				{src:require('../assets/ba8bf435c0faa86727bb2d260e08cba0_680x400.jpg')},
				{src:require('../assets/6ebb07f8069dc257212f5b0a4c5eba1d_680x400.jpg')},
				{src:require('../assets/bf599d42916598c198d3f770561362c7_680x400.jpg')},
			] ,
			off:0,
			numbers:0,
			isshow:false,
			aa:false,
			nu:'',
			text3:[
				{src:require('../assets/4e319be5da2327071518e78e84601c7e_200_v=1553491876.jpg'),span1:'桃花源中人',span2:'缅甸',span3:'1015人赞',span4:'最后回复于11小时前',h:'〔深度游天下 第6章〕缅甸：梵音缭绕，佛塔森森',pp:'“我住江之头，君住江之尾。彼此情无限，共饮一江水。我吸川上流，君喝川下水。川流永不息，彼此共甘美。” ——陈毅《赠缅甸友人》序对于国...',ss:require('../assets/eef03cf5842982a01d25600350cc52b1_161x107.jpg')},
				{src:require('../assets/4e319be5da2327071518e78e84601c7e_200_v=1553491876.jpg'),span1:'桃花源中人',span2:'缅甸',span3:'1015人赞',span4:'最后回复于11小时前',h:'〔深度游天下 第6章〕缅甸：梵音缭绕，佛塔森森',pp:'“我住江之头，君住江之尾。彼此情无限，共饮一江水。我吸川上流，君喝川下水。川流永不息，彼此共甘美。” ——陈毅《赠缅甸友人》序对于国...',ss:require('../assets/eef03cf5842982a01d25600350cc52b1_161x107.jpg')},
				{src:require('../assets/4e319be5da2327071518e78e84601c7e_200_v=1553491876.jpg'),span1:'桃花源中人',span2:'缅甸',span3:'1015人赞',span4:'最后回复于11小时前',h:'〔深度游天下 第6章〕缅甸：梵音缭绕，佛塔森森',pp:'“我住江之头，君住江之尾。彼此情无限，共饮一江水。我吸川上流，君喝川下水。川流永不息，彼此共甘美。” ——陈毅《赠缅甸友人》序对于国...',ss:require('../assets/eef03cf5842982a01d25600350cc52b1_161x107.jpg')},
				{src:require('../assets/4e319be5da2327071518e78e84601c7e_200_v=1553491876.jpg'),span1:'桃花源中人',span2:'缅甸',span3:'1015人赞',span4:'最后回复于11小时前',h:'〔深度游天下 第6章〕缅甸：梵音缭绕，佛塔森森',pp:'“我住江之头，君住江之尾。彼此情无限，共饮一江水。我吸川上流，君喝川下水。川流永不息，彼此共甘美。” ——陈毅《赠缅甸友人》序对于国...',ss:require('../assets/eef03cf5842982a01d25600350cc52b1_161x107.jpg')},
				{src:require('../assets/4e319be5da2327071518e78e84601c7e_200_v=1553491876.jpg'),span1:'桃花源中人',span2:'缅甸',span3:'1015人赞',span4:'最后回复于11小时前',h:'〔深度游天下 第6章〕缅甸：梵音缭绕，佛塔森森',pp:'“我住江之头，君住江之尾。彼此情无限，共饮一江水。我吸川上流，君喝川下水。川流永不息，彼此共甘美。” ——陈毅《赠缅甸友人》序对于国...',ss:require('../assets/eef03cf5842982a01d25600350cc52b1_161x107.jpg')},
				{src:require('../assets/4e319be5da2327071518e78e84601c7e_200_v=1553491876.jpg'),span1:'桃花源中人',span2:'缅甸',span3:'1015人赞',span4:'最后回复于11小时前',h:'〔深度游天下 第6章〕缅甸：梵音缭绕，佛塔森森',pp:'“我住江之头，君住江之尾。彼此情无限，共饮一江水。我吸川上流，君喝川下水。川流永不息，彼此共甘美。” ——陈毅《赠缅甸友人》序对于国...',ss:require('../assets/eef03cf5842982a01d25600350cc52b1_161x107.jpg')},
				],
				text4:[
					{src:require('../assets/ba28b661bf4afd15037053211834e3ca_200_v=1518410593.jpg'),span1:'嚯嚯嚯哈嘿',span2:'1人浏览',span3:'0人回复',span4:'最后回复于5小时前',p1:'9.25环洱海电动车骑行，有没一起？',span5:'2020-09-25',span6:'2020-09-25',span7:'中国、大理、洱海'},
				{src:require('../assets/ba28b661bf4afd15037053211834e3ca_200_v=1518410593.jpg'),span1:'嚯嚯嚯哈嘿',span2:'1人浏览',span3:'0人回复',span4:'最后回复于5小时前',p1:'9.25环洱海电动车骑行，有没一起？',span5:'2020-09-25',span6:'2020-09-25',span7:'中国、大理、洱海'},
				{src:require('../assets/ba28b661bf4afd15037053211834e3ca_200_v=1518410593.jpg'),span1:'嚯嚯嚯哈嘿',span2:'1人浏览',span3:'0人回复',span4:'最后回复于5小时前',p1:'9.25环洱海电动车骑行，有没一起？',span5:'2020-09-25',span6:'2020-09-25',span7:'中国、大理、洱海'},
				{src:require('../assets/ba28b661bf4afd15037053211834e3ca_200_v=1518410593.jpg'),span1:'嚯嚯嚯哈嘿',span2:'1人浏览',span3:'0人回复',span4:'最后回复于5小时前',p1:'9.25环洱海电动车骑行，有没一起？',span5:'2020-09-25',span6:'2020-09-25',span7:'中国、大理、洱海'},
				{src:require('../assets/ba28b661bf4afd15037053211834e3ca_200_v=1518410593.jpg'),span1:'嚯嚯嚯哈嘿',span2:'1人浏览',span3:'0人回复',span4:'最后回复于5小时前',p1:'9.25环洱海电动车骑行，有没一起？',span5:'2020-09-25',span6:'2020-09-25',span7:'中国、大理、洱海'},
				{src:require('../assets/ba28b661bf4afd15037053211834e3ca_200_v=1518410593.jpg'),span1:'嚯嚯嚯哈嘿',span2:'1人浏览',span3:'0人回复',span4:'最后回复于5小时前',p1:'9.25环洱海电动车骑行，有没一起？',span5:'2020-09-25',span6:'2020-09-25',span7:'中国、大理、洱海'},
				],
				text5:[
					{name:'穷游兴趣小组',value:[{text:'结伴同游',text2:'一起穷游到老',src:require('../assets/7252257061291ff2f00adbd32ec5f80d_2.jpg')},{text:'签证',text2:'出境旅行的第一步',src:require('../assets/6db085efc86ad42fd3a644b25586e945_3.jpg')},{text:'保险',text2:'旅行保险交流',src:require('../assets/2ef7b1ae292251858682905865431d85_148.jpg')},{text:'旅行购物',text2:'喜刷刷喜刷刷',src:require('../assets/51ec1929b88a6577af70cb155cde28fb_100.jpg')},{text:'穷游折扣',text2:'旅行特价聚散地',src:require('../assets/90ce8108d5d12318ce7a19d3e8a41813_121.jpg')},{text:'睡遍全球',text2:'带你免费体验全球酒店',src:require('../assets/4050455b0be16662ef72eebf03f59065_154.jpg')},{text:'邮轮',text2:'慢游的享受',src:require('../assets/8d3eda89ccdb14ae8641036245d98438_94.jpg')},{text:'航空',text2:'追求高性价比的机票和航程',src:require('../assets/98611213cad8044f68842fa95940b570_62.jpg')},{text:'自驾',text2:'心有多宽路就有多宽',src:require('../assets/516f1b2228630d709af431cbc877f3d9_33.jpg')},]},
				{name:'穷游欧洲',value:[{text:'保险',text2:'旅行保险交流',src:require('../assets/2ef7b1ae292251858682905865431d85_148.jpg')},{text:'旅行购物',text2:'喜刷刷喜刷刷',src:require('../assets/51ec1929b88a6577af70cb155cde28fb_100.jpg')},{text:'穷游折扣',text2:'旅行特价聚散地',src:require('../assets/90ce8108d5d12318ce7a19d3e8a41813_121.jpg')},{text:'睡遍全球',text2:'带你免费体验全球酒店',src:require('../assets/4050455b0be16662ef72eebf03f59065_154.jpg')},{text:'邮轮',text2:'慢游的享受',src:require('../assets/8d3eda89ccdb14ae8641036245d98438_94.jpg')},{text:'航空',text2:'追求高性价比的机票和航程',src:require('../assets/98611213cad8044f68842fa95940b570_62.jpg')},{text:'自驾',text2:'心有多宽路就有多宽',src:require('../assets/516f1b2228630d709af431cbc877f3d9_33.jpg')},]},
				{name:'穷游亚洲',value:[{text:'保险',text2:'旅行保险交流',src:require('../assets/2ef7b1ae292251858682905865431d85_148.jpg')},{text:'旅行购物',text2:'喜刷刷喜刷刷',src:require('../assets/51ec1929b88a6577af70cb155cde28fb_100.jpg')},{text:'穷游折扣',text2:'旅行特价聚散地',src:require('../assets/90ce8108d5d12318ce7a19d3e8a41813_121.jpg')},{text:'睡遍全球',text2:'带你免费体验全球酒店',src:require('../assets/4050455b0be16662ef72eebf03f59065_154.jpg')},{text:'邮轮',text2:'慢游的享受',src:require('../assets/8d3eda89ccdb14ae8641036245d98438_94.jpg')},{text:'航空',text2:'追求高性价比的机票和航程',src:require('../assets/98611213cad8044f68842fa95940b570_62.jpg')},{text:'自驾',text2:'心有多宽路就有多宽',src:require('../assets/516f1b2228630d709af431cbc877f3d9_33.jpg')},]},
				{name:'穷游美洲',value:[{text:'保险',text2:'旅行保险交流',src:require('../assets/2ef7b1ae292251858682905865431d85_148.jpg')},{text:'旅行购物',text2:'喜刷刷喜刷刷',src:require('../assets/51ec1929b88a6577af70cb155cde28fb_100.jpg')},{text:'穷游折扣',text2:'旅行特价聚散地',src:require('../assets/90ce8108d5d12318ce7a19d3e8a41813_121.jpg')},{text:'睡遍全球',text2:'带你免费体验全球酒店',src:require('../assets/4050455b0be16662ef72eebf03f59065_154.jpg')},{text:'邮轮',text2:'慢游的享受',src:require('../assets/8d3eda89ccdb14ae8641036245d98438_94.jpg')},{text:'航空',text2:'追求高性价比的机票和航程',src:require('../assets/98611213cad8044f68842fa95940b570_62.jpg')},{text:'自驾',text2:'心有多宽路就有多宽',src:require('../assets/516f1b2228630d709af431cbc877f3d9_33.jpg')},]},
				{name:'穷游大洋洲',value:[{text:'保险',text2:'旅行保险交流',src:require('../assets/2ef7b1ae292251858682905865431d85_148.jpg')},{text:'旅行购物',text2:'喜刷刷喜刷刷',src:require('../assets/51ec1929b88a6577af70cb155cde28fb_100.jpg')},{text:'穷游折扣',text2:'旅行特价聚散地',src:require('../assets/90ce8108d5d12318ce7a19d3e8a41813_121.jpg')},{text:'睡遍全球',text2:'带你免费体验全球酒店',src:require('../assets/4050455b0be16662ef72eebf03f59065_154.jpg')},{text:'邮轮',text2:'慢游的享受',src:require('../assets/8d3eda89ccdb14ae8641036245d98438_94.jpg')},{text:'航空',text2:'追求高性价比的机票和航程',src:require('../assets/98611213cad8044f68842fa95940b570_62.jpg')},{text:'自驾',text2:'心有多宽路就有多宽',src:require('../assets/516f1b2228630d709af431cbc877f3d9_33.jpg')},]},
				{name:'穷游非洲',value:[{text:'穷游折扣',text2:'旅行特价聚散地',src:require('../assets/90ce8108d5d12318ce7a19d3e8a41813_121.jpg')},{text:'睡遍全球',text2:'带你免费体验全球酒店',src:require('../assets/4050455b0be16662ef72eebf03f59065_154.jpg')},{text:'邮轮',text2:'慢游的享受',src:require('../assets/8d3eda89ccdb14ae8641036245d98438_94.jpg')},{text:'航空',text2:'追求高性价比的机票和航程',src:require('../assets/98611213cad8044f68842fa95940b570_62.jpg')},{text:'自驾',text2:'心有多宽路就有多宽',src:require('../assets/516f1b2228630d709af431cbc877f3d9_33.jpg')},]},
				],
				text6:['加入穷游社区','和80,000,000穷游er在一起','发现最世界'],
				text7:[{name:'相关目的地',value:['清迈','东京','贾奈特','贾拉拉巴德','亚的斯亚贝巴','里士满','班斯科','科普里夫什蒂察','梅尔尼克','卢基约','华沙','卡尔帕奇','卢布林','蒙加尔','马拉博','埃斯比约','朗厄兰岛','法兰克福','摩泽尔河谷','俄罗斯萨马拉','塔佩门','清曼寺','三和','许留山','富士电视台','东京大学','日本科学未来馆','三平']},],
				text8:[{name:'相关Biu',value:[' 墨尔本周边休闲生态去处推荐🏯 Dandenong Ranges 丹顿农山脉位于墨','青海旅游2020最新推荐：青海湖 茶卡盐湖 水上雅丹 东台吉乃尔湖 敦煌 张掖七','来武功山看日出星空云海｜体验第一次住帐篷📍目的地: #金顶[地点]# #武功山','[东寺历史东寺是位于京都市南区九条町，东寺是真言宗的总本山。 该寺供奉本尊是药师如','幽鹤国家公园的绝对明星——Lake O’Hara欧哈拉湖（图1）是落基山中一颗耀行程甘青大环线 ','行程时间一个星期左右 行程距离两千七百公里 主要景点青海湖 茶卡']}],
				text9:[
					{name:'穷游兴趣小组',value:['结伴同游','签证','保险','旅行购物','穷游折扣','睡遍全球','邮轮','旅行视频','旅行摄影','户外运动','潜水俱乐部','明信片']},
					{name:'欧洲',value:['环游欧洲','德国','瑞士','奥地利','捷克','西班牙/葡萄牙','土耳其','东南欧地区','欧洲交通','外高加索三国','希腊','意大利','英国/爱尔兰','荷兰','波兰','挪威','俄罗斯']}
				]
		 }
	 },
	  methods:{
		  go(){
			  setInterval(()=>{
				if(this.numbers<4){
					this.numbers++;
				}
				 else{
					  this.numbers=0;
				 }
				  this.off=this.numbers*680;
			  },1000)
		  },
		  clicktext(index){
			  this.nu=index;
		  },
		  imgclickk(index){
			this.numbers=index-1;
		  },
		  pclick(){
			  this.isshow=!this.isshow;
			  this.aa=!this.aa;
		  }
	  },
	  mounted(){
	  	this.go()
		this.imgclickk( )
	  }
}
</script>

<style scoped>
.blank{
	height: 15px;
}	
.headers{
	width: 100%;
	top: 0px;
	position: sticky;
	z-index: 99;
	height: 70px;
	line-height: 70px;
	background-color:white;
}	
.heads{
	width: 980px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.headersl{
	/* float: left; */
	display: flex;
	color: #147850;
}
.headerr {
	width: 300px;
	display: flex;
}
.aa{
	background-color:#3f9f5f ;
	color: white;
}
.pfirst{
	width: 123px;
	line-height: 38px;
	height: 38px;
	color: #3f9f5f;
	border-radius: 3px;
	border: 1px solid #3f9f5f;
	cursor: pointer;
}
.isshow dl{
	display: inline-block;
	margin-bottom: 30px;
	text-align: left;
}
.isshow dt{
	height: 30px;
}
.ddt dd{
	font-size: 12px;
	height: 30px;
	width: 50%;
	float: left;
	margin-bottom: 2px;
}
.isshow{
	background-color: white;
	border-top: 1px solid #10B041;
 }
.headerr p:last-child{
	width: 125px;
	margin-left: 20px;
	line-height: 40px;
	height: 40px;
	color: #fff;
	border-radius: 3px;
	background-color: #1c95dd;
	cursor: pointer;	
	}
.bbig{
	position: relative;
}	
.lun{
	margin: 0 100px;
	width: 680px;
	overflow: hidden;
}	
.lun ul{
	width: 3400px;
}
.lun li{
	float: left;
}
 .lun ul li img{
	 width: 680px;
 }
 .mm img{
	 width: 48px;
	 height: 48px;
 }
 .bbig p{
	 float: left;
	 margin-left: 5px;
  }
.imgclick{
	position: absolute;
	 top: 100px;
	 right: 130px;
  }
.ttb{
	width: 980px;
	margin: 0 auto;
	display: inline-block;
	padding-top: 50px;
} 
.ttbleft{
	width: 680px;
	float: left;
} 
.ttbleft .uul{
	width:680px;
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #cfd3d9;
}
.ttbleft .uul li{
	list-style: none;
	width: 220px;
}
.ttbleft .uul li.active{
	
	border-bottom: 1px solid #147850;
	color: #147850;
	margin-bottom: -1px;
}
.shows ul{
	width: 680px;
	list-style: none;
}
.shows li{
	float: left;
	justify-content: space-between;
	display: flex;
	text-align: left;
	margin-bottom: 10px;
}
.immg{
	width: 48px;
	border-radius: 50%;
	float: left;
}
.shows .sleft span{
	margin: 0 10px;
	font-size: 12px;
} 
.sleft{
	height: 52px;
	line-height: 52px;
}
.textn{
	display: flex;
}
.textn h3{
	margin-bottom: 22px;
}
.textn span{
	font-size: 13px;
}
.showsth{
	height: 52px;
	line-height: 52px;
}
.showsth span{
	margin-right: 10px;
}
.end{
	margin-top: 30px;
	height: 60px;
	
	border: 1px solid gainsboro;
}
.end div:first-child{
	float: left;
	line-height: 30px;
}
.end div:last-child{
	float: left;
	margin-left: 20px;
	line-height: 60px;
}
.ll{
	width: 680px;
	float: left;
 }
.ll h3{
	text-align: left;
	margin: 20px 0;
} 
.ll li{
	width: 226px;
	margin-bottom: 20px;
}
.ll div{
	width: 168px;
}
.ll div p:last-child{
	font-size: 12px;
}
.ll img{
	width:48px ;
} 
.ttbright{
	margin-left: 25px;
	width: 270px;
	float: left;
	border: 1px solid #ececec;
	border-radius: 2px;
	
}
.tr{
	background-image: url(../assets/1.jpg);
	width: 270px;
	height: 260px;
	background-size: 100% auto;
}
.td{
	padding: 21px 0 21px 23px;
}
.tr p{
	padding-top: 12px;
	margin-left: 20px;
	color: white;
	font-size: 18px;
	text-align: left;
}
.tr a{
	display: block;
	margin: 16px 0 0 22px;
	width: 104px;
	line-height: 34px;
	border: 1px solid #fff;
	border-radius: 3px;
	text-align: center;
	font-size: 16px;
	color: #fff;
	
}
.tr a:hover{
	background-color: #fff;
	color: #10b041;
}
.cool{
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
</style>
