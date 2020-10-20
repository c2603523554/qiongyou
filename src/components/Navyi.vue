<template>
	<div id="yi">
		<div id="er">
			<ul>
				<li>首页</li>
				<li>
					机酒自由行
					<i class="el-icon-caret-bottom"></i>
					<ul class="yi">
						<li>全部</li>
						<li>自由行</li>
						<li>优惠机票</li>
						<li>酒店</li>
						<li>邮轮</li>
						<li>定制游</li>
						<li>马尔代夫<img src="../assets/热.png"></li>
						<li>海岛游</li>
					</ul>
				</li>
				<li>优惠机票</li>
				<li>
					跟团游
					<i class="el-icon-caret-bottom"></i>
					<ul class="yi">
						<li>全部</li>
						<li>跟团游</li>
						<li>半自助游<img src="../assets/热.png"></li>
					</ul>
				</li>
				<li>酒店</li>
				<li>
					当地玩乐
					<i class="el-icon-caret-bottom"></i>
					<ul class="yi">
						<li>全部</li>
						<li>日游小团</li>
						<li>深度体验</li>
						<li>门票票券</li>
						<li>餐饮美食</li>
						<li>WiFi电话卡</li>
						<li>购物</li>
						<li>交通票券</li>
						<li>接送机包车</li>
						<li>保险</li>
						<li>欧洲铁路<img src="../assets/热.png"></li>
					</ul>
				</li>
				<li>签证</li>
				<li>邮轮</li>
				<li>保险</li>
				<li>租车自驾</li>
				<li>
					深度旅行
					<i class="el-icon-caret-bottom"></i>
					<ul class="yi">
						<li>全部</li>
						<li>CityWalk</li>
						<li>特色长线</li>
						<li>Q-Home<img src="../assets/热.png"></li>
					</ul>
				</li>
				<li>私人订制</li>
			</ul>
		</div>
	</div>
</template>

<script></script>

<style scoped>
	#yi{
		width: 100%;
		background-color: #21c298;
		background-image: linear-gradient(180deg,#44c77b,#0fbfa6);

	}
	#er{
		width: 1160px;
		height: 50px;
		margin: 0 auto;
		text-align: center;
	}
	ul{

		line-height: 50px;

	}
	img{
		width: 28px;
		height: 28px;
		background-size: 100%;
		position: absolute;
		top: 50%;
		margin-top: -14px;
		right: -7px;
	}
	li{
		position: relative;
		list-style: none;
		float: left;
		font-size: 16px;
		color: #fff;
		padding: 0 16px;
	}
	li:hover #er>ul>li{
		background-color: #149e82;
	}
	li:hover .yi{
		display: block;
	}
	.yi{
		display: none;
		position: absolute;
		left: 0;
		top: 50px;
		background-color: #ffffff;
		width: 240px;
		height: auto;
		padding: 5px 5px 10px 25px;
		border: 1px solid #E3E3E3;
		z-index: 100;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		box-shadow: 0 0 18px rgba(0,0,0,.2);
	}
	.yi li{
		position: relative;
		display: block;
		height: 14px;
		font-size: 14px;
		line-height: 14px;
		color: #323232;
		margin: 15px 0 10px 0;
		padding: 0 20px 0 0;
	}
	.yi li:hover{
		color: #12AF7E;
	}
</style>
