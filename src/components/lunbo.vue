<template>
	<div>
		<div id="yi">
			<img src="../assets/lunbo1.jpg"  style="width: 1520px;height: 429px;">
		</div>
		<div id="er">
			<ul id="san">
				<li class="si">
					<p class="el-icon-office-building"></p>
					<h2>港澳台 国内</h2>
					<p>
						<a>香港</a>
						<a>澳门</a>
						<a>台湾</a>
						<a>三亚</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
				<li class="si">
					<p class="el-icon-s-home"></p>
					<h2>日本</h2>
					<p>
						<a>东京</a>
						<a>大阪</a>
						<a>冲绳</a>
						<a>北海道</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
				<li class="si">
					<p class="el-icon-s-check"></p>
					<h2>东南亚 南亚</h2>
					<p>
						<a>普吉</a>
						<a>清迈</a>
						<a>沙巴</a>
						<a>巴厘岛</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
				<li class="si">
					<p class="el-icon-moon-night"></p>
					<h2>欧洲 美洲</h2>
					<p>
						<a>法国</a>
						<a>土耳其</a>
						<a>英国</a>
						<a>瑞士</a>
						<a>西班牙</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
				<li class="si">
					<p class="el-icon-ship"></p>
					<h2>澳洲 中东非</h2>
					<p>
						<a>悉尼</a>
						<a>新西兰</a>
						<a>迪拜</a>
						<a>肯尼亚</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
				<li class="si">
					<p class="el-icon-s-promotion"></p>
					<h2>个性推荐</h2>
					<p>
						<a>私人订制</a>
						<a>跟团游</a>
						<a>半自助游</a>
						<a>海岛游</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
				<li class="si">
					<p class="el-icon-loading"></p>
					<h2>出行必备</h2>
					<p>
						<a>Wi-Fi</a>
						<a>电话卡</a>
						<a>接送机</a>
						<a>保险</a>
					</p>
					<p class="el-icon-arrow-right"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	#yi {
		position: relative;
	}
	#er{
		position: absolute;
		margin-left: -580px;
		top: 158px;
		right: 65%;
	}
	#san{
		width: 280px;
    	height: 400px;
    	padding: 10px 0;
    	background-color: rgba(0,0,0,.7);
	}
	ul{
		list-style: none;
	}
	.si{
		position: relative;
    	height: 56px;
    	padding-left: 53px;
    	border-top: 1px solid hsla(0,0%,100%,.1);
	}
	.si p:first-child{
		position: absolute;
    	margin-left: -147px;
    	margin-top: 18px;
    	color: #00b081;
    	font-size: 20px;
	}
	.si h2{
		padding-top: 10px;
    	font-size: 18px;
    	line-height: 20px;
    	color: #fff;
		font-weight: 500;
		text-align: left;
	}
	.si>p:nth-child(3){
		text-align: left;
	}
	.si p:nth-child(3) a{
		font-size: 14px;
    	color: silver;
		text-decoration: none;
		padding-right: 3px;
	}
	.si p:last-child{
		position: absolute;
    	right: 12px;
    	top: 20px;
    	color: #fff;
    	opacity: .8;
	}
	.si:hover{
		background-color: white;
	}
	.si:hover h2{
		color: black;
	}
	.si:hover p:last-child{
		color: #00b081;
	}
</style>
