<template>
	<div id="yi">
		<div id="er">
			<div id="er-left"><span>穷游商城</span></div>
			<div id="er-butten">
				<div>
					<el-input placeholder="搜索国家、城市、产品" v-model="input">
						<template slot="append" style="background-color: #13af7e;">
							<i class="el-icon-search"></i>
						</template>
					</el-input>
				</div>
			</div>
			<div id="er-right">
				<img src="../assets/qyerlogo.png"/>
				<div class="title-box">
                    <p class="title">手机下单活动多多</p>
                    <p class="slogan">尽在穷游App</p>
                </div>
				<a>下载</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
  data() {
    return {
      input: '',
    }
  }
}
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
}
#yi {
	width: 100%;
}
#er {
	width: 1160px;
	height: 100%;
	margin: 0 auto;
}
#er-left {
	float: left;
	width: 162px;
	height: 70px;
}
#er-butten {
	float: left;
	margin-top: 15px;
	width: 500px;
	border: 1px solid #13af7e;
	border-radius: 3px;
}
#er-right{
	position: relative;
    top: 3px;
    float: right;
    width: 325px;
    height: 64px;

}
#er-right img{
	float: left;
    margin: 12px 12px 12px 20px;
    width: 40px;
    height: 40px;
}
span {
	color: #13af7e;
	font-size: 28px;
	line-height: 70px;
}
.title-box{
	float: left;
    margin: 14px 0;
}
.title{
	color: #444;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
}
.slogan{
	color: rgba(31,32,35,.5);
    font-size: 12px;
    line-height: 17px;	
}
#er-right a{
	position: absolute;
    top: 16px;
    right: 20px;
    width: 77px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 32px;
    border-radius: 4px;
    background-color: #4dc075;
}
</style>
