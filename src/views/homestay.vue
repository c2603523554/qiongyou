/* 民宿 */
<template>
  <div>
    <div id="head">
      <div id="head-nei">
        <div id="head-head">
          <p>特价酒店</p>
          <div>|</div>
          <p>华人旅馆</p>
        </div>
        <div id="head-title">旅途可以多一种可能。</div>
        <div id="head-tab">
          <div class="btn active">海外酒店</div>
          <div class="btn">国内酒店</div>
        </div>
        <div class="input">
          <div class="want">
            <input type="text" placeholder="想去哪里" />
          </div>
          <div class="flex">
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="入住时间"
                end-placeholder="退房时间"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="flex btn-right">
            <i class="el-icon-search"></i>
            搜索酒店
          </div>
        </div>
        <div id="city">
          <ul class="city-ul">
            <li class="city-li" v-for="(item, index) in arr" :key="index">
              {{ item }}
            </li>
          </ul>
          <span>
            <i class="el-icon-s-custom"></i>
            服务承诺
          </span>
        </div>
      </div>
    </div>
    <div id="body">
      <div id="body-head" class="box">
        <div class="first">精选住宿</div>
        <div class="box">
          <ul class="city-ul aa">
            <li class="city-li add" v-for="(item, index) in arr" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="summary">
          <div class="you">
            <div class="you-head">
              <span>曼谷平均数据</span>
            </div>
            <div class="you-body">
                <div class="item">
                    <div class="num"><span>252</span><small>元</small></div>
                    <small>价格</small>
                </div>
                <div class="item">
                    <div class="num"><span>2.8</span></div>
                    <small>星级</small>
                </div>
                <div class="item">
                    <div class="num"><span>7.8</span></div>
                    <small>评分</small>
                </div>
            </div>
          </div>
          <div class="you">
            <div class="you-head zuo">
                <span>穷游用户主流数据</span>
            </div>
            <div class="you-body">
                <div class="item">
                    <div class="num"><span>740</span><small>元</small></div>
                    <small>价格</small>
                </div>
                <div class="item">
                    <div class="num"><span>3.9</span></div>
                    <small>星级</small>
                </div>
                <div class="item">
                    <div class="num"><span>8.5</span></div>
                    <small>评分</small>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jieshao">
          <span>数据结论:</span>
          在曼谷酒店选择上，穷游用户更偏爱星级高、评分高的住宿体验。
      </div>
      <div id="body-body">
            <div class="body-item" v-for="(i,index) in abb" :key="index">
                <img :src="i.img" alt="" srcset="">
                <div class="name">{{i.name}}</div>
                <div class="score">
                    <div class="star-box">
                        <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                        <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                        <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                    </div>
                    <span class="evaluate_score">{{i.dafen}}分</span>
                </div>
                <div class="price">
                    <span>{{i.number}}</span>
                    <span>元起</span>
                </div>
            </div>
      </div>
      <div class="flex add">
                    <div class="gengduo">
                        <span>查看更多曼谷住宿</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
            </div>
            <div id="follow">
               <div class="song_name">跟着电影去旅行</div>
               <div class="song_introduce">
                电影镜头下的异国他乡，永远对旅人有着非凡的吸引力。多瑙河畔的忧郁星期天，罗马街头的阳光与微风，在午夜巴黎寻找黄金时代，到喧闹旺角体会平凡人的英雄梦想，或是干脆放空所有，迷失于东京的霓虹闪烁……
                </div>
            </div>
    </div>
    <div class="zhanshi">
        <a>
            <img src="../assets/jiu1.jpg" alt="" srcset="">
            <div class="zhanshi-meihua">
                <div class="city_card_words_wrapper">
                    <div class="city-card">
                        布达佩斯之恋
                    </div>
                    <div class="city-card-introduce">Budapest</div>
                </div>
            </div>
        </a>
        <a>
            <img src="../assets/jiu2.jpg" alt="" srcset="">
            <div class="zhanshi-meihua">
                <div class="city_card_words_wrapper">
                    <div class="city-card">
                        罗马假日
                    </div>
                    <div class="city-card-introduce">Roma</div>
                </div>
            </div>
        </a>
        <a>
            <img src="../assets/jiu3.jpg" alt="" srcset="">
            <div class="zhanshi-meihua">
                <div class="city_card_words_wrapper">
                    <div class="city-card">
                        午夜巴黎
                    </div>
                    <div class="city-card-introduce">Paris</div>
                </div>
            </div>
        </a>
        <a>
            <img src="../assets/jiu4.jpg" alt="" srcset="">
            <div class="zhanshi-meihua">
                <div class="city_card_words_wrapper">
                    <div class="city-card">
                        旺角卡门
                    </div>
                    <div class="city-card-introduce">Hong Kong</div>
                </div>
            </div>
        </a>
        <a>
            <img src="../assets/jiu5.jpg" alt="" srcset="">
            <div class="zhanshi-meihua">
                <div class="city_card_words_wrapper">
                    <div class="city-card">
                        迷失东京
                    </div>
                    <div class="city-card-introduce">Tokyo</div>
                </div>
            </div>
        </a>
        
    </div>
    <div class="yemian">
        <div class="tit">繁华都市</div>
        <ul>
            <li>
                <div>
                    <img src="../assets/jiuzuo.jpg" alt="">
                    <div class="name">
                        三井花园饭店京都新町别邸
                            <div class="price">
                                <span>￥1296</span>
                                <span>元起</span>
                            </div>
                    </div>
                    <div class="score">
                        <div class="star-box">
                            <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                            <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                            <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                            <img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">
                        </div>
                        <span class="evaluate_score">8.9分</span>
                    </div>
                    
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/jiuyou.jpg" alt="">
                    <div class="name">
                        The Muse Haus I - Black Sheep
                            <div class="price">
                                <span>￥742</span>
                                <span>元起</span>
                            </div>
                    </div>
                    <div class="score">
                        <span class="evaluate_score">独立房间</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div id="didian">
        <div class="first">国外热门酒店预订</div>
        <div class="dimin">
            <ul>
                <li v-for="(i,index) in a" :key="index">{{i}}</li>
            </ul>
        </div>
        <div class="first">热门城市酒店预订</div>
        <div class="dimin">
            <ul>
                <li v-for="(i,index) in b" :key="index">{{i}}</li>
            </ul>
        </div>
    </div>
    <bastmp/>
  </div>
</template>
<script>
import bastmp from '@/components/bastmp.vue'
export default {
  name: "jiudian",
  components:{
    bastmp,
  },
  data() {
    return {
      arr: ["曼谷", "洛杉矶", "纽约", "旧金山", "东京", "大阪"],
      a: ['瑞士','澳大利亚','奥地利','柬埔寨','越南','荷兰','印度尼西亚','梵蒂冈','捷克','俄罗斯','新西兰','比利时','菲律宾','土耳其','加拿大','希腊','阿联酋','匈牙利','瑞典','丹麦'],
      b:['上海','巴塞罗那','洛杉矶','成都','广州','纽约','南京','米兰','杭州','厦门','深圳','伦敦','重庆','珠海','三亚','苏州','慕尼黑','奈良','垦丁','芭提雅'],
      abb:[
          {img:require('../assets/jiudian1.jpg'),name:'今晨旅馆',dafen:'8.7',number:'89'},
          {img:require('../assets/jiudian2.jpg'),name:'曼谷城市酒店',dafen:'7.6',number:'288'},
          {img:require('../assets/jiudian3.jpg'),name:'曼谷廊曼机场阿玛瑞酒店',dafen:'8.5',number:'520'},
          {img:require('../assets/jiudian4.jpg'),name:'乐塔达东怡大酒店',dafen:'8.6',number:'464'},
          {img:require('../assets/jiudian5.jpg'),name:'塔拉广场酒店',dafen:'8.9',number:'273'},
          {img:require('../assets/jiudian6.jpg'),name:'彩虹云霄酒店',dafen:'7.6',number:'556'},
          {img:require('../assets/jiudian7.jpg'),name:'穰南帝景酒店',dafen:'9',number:'354'},
          {img:require('../assets/jiudian8.jpg'),name:'康帕斯酒店集团素坤逸11巷柑橘酒店',dafen:'8.2',number:'421'},
],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>
<style scoped>
/*头部*/
/*#region*/
#head {
  height: 540px;
  overflow: hidden;
  background-color: #50b8ea;
  background-image: linear-gradient(
    -90deg,
    transparent,
    hsla(0, 0%, 100%, 0.4)
  );
}
#head-nei {
  color: #fff;
  height: 500px;
  width: 980px;
  margin: 0 auto;
  font-weight: 400;
}
#head-head {
  padding-top: 20px;
  font-size: 14px;
  float: right;
}
#head-head p {
  display: inline-block;
}
#head-head div {
  display: inline-block;
  margin: 0 1em;
}
#head-title {
  text-align: left;
  font-size: 42px;
  line-height: 60px;
  padding-top: 65px;
  color: #fff;
  font-weight: 300;
}
#head-tab {
  margin-top: 88px;
  float: left;
  height: 60px;
}
#head-tab div {
  display: inline-block;
}
.btn {
  font-size: 20px;
  color: #fff;
  padding-bottom: 5px;
  margin-right: 30px;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid #fff;
  font-weight: 500;
}
.input {
  width: 100%;
  height: 70px;
  margin: 25px auto auto;
  font-size: 0;
  text-align: left;
  position: relative;
  box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
}
.want {
  width: 175px;
  overflow: hidden;
  border-radius: 2px 0 0 2px;
  background: #fff;
  color: #1467b6;
  border: 0;
  margin: 0 2px 0 0;
  font-size: 16px;
  height: 70px;
  box-sizing: border-box;
  display: flex;
}
.want input {
  width: 175px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px 16px 10px 53px;
  text-align: left;
  border-radius: 2px 0 0 2px;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  justify-content: center;
  color: #888;
}
.want input::-webkit-input-placeholder {
  color: #1467b6;
}
.flex {
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 16px;
  width: 628px;
  background: #fff;
  height: 70px;
}
.block {
  align-self: center;
}
.btn-right {
  width: 175px;
  color: #fff;
  line-height: 70px;
  cursor: pointer;
  background: linear-gradient(90deg, #ffb732 0, #ff9e09);
}
.btn-right > i {
  line-height: 70px;
  padding-right: 3px;
}
#city {
  margin-top: 25px;
}
ul {
  float: left;
}
.city-ul {
  list-style: none;
  padding: 0;
  display: inline;
  margin: 0 25px 0 0;
  font-size: 14px;
  color: #fff;
  overflow: hidden;
}
.city-li {
  display: inline;
  list-style: none;
  padding: 0;
  display: inline;
  margin: 0 25px 0 0;
  font-size: 14px;
  color: #fff;
}
#city span {
  float: right;
}
#body {
  width: 980px;
  margin: 0 auto;
  font-weight: 300;
  text-align: left;
}
.box {
  padding-top: 30px;
  overflow: hidden;
}
.first {
  font-size: 18px;
  line-height: 14px;
  padding: 0;
  font-weight: 400;
  cursor: default;
  color: #323232;
  display: block;
  margin-top: 50px;
}
.aa {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 30px;
}
.add {
  color: black;
  font-weight: 500;
  margin-right: 20px;
  padding-bottom: 6px;
}
.summary {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
}
.you {
  width: 482px;
  height: 163px;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
}
.you-head {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  margin: 0;
  color: #4b96de;
  font-weight: 700;
  background-image: linear-gradient(
    -90deg,
    rgba(208, 243, 252, 0.4),
    rgba(164, 226, 247, 0.4) 97%,
    rgba(163, 226, 247, 0.4) 0
  );
}
.zuo {
  color: #41c074;
  background-image: linear-gradient(
    -90deg,
    rgba(240, 248, 227, 0.3),
    rgba(65, 192, 116, 0.072)
  );
}
.you-body {
    display: flex;
    justify-content: space-between;
}
.item {
    text-align: center;
    flex: 1;
}
.num{
    font-size: 34px;
    line-height: 48px;
    font-weight: 100;
    margin: 27px 0 0;
}
.item small{
    font-size: 14px;
    color: #878787;
    line-height: 20px;
    margin: 0;
    font-weight: 400;
}
.jieshao{
    color: #323232;
    background: #fff;
    text-align: left;
    font-size: 14px;
    margin-top: 40px;
}
.jieshao span{
    font-weight: 400;
}
#body-body{
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4,234px);
    grid-column-gap: 15px;
}
.body-item{
    width: 234px;
    height: 285px;
}
.body-item img{
    width: 234px;
    height: 156px;
}
.name{
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 15px;
}
.score{
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    height: 24px;
    display: flex;
}
.star-box{
    display: inline-block;
    border-right: 1px solid rgba(0,0,0,.3);
    padding-right: 10px;
    height: 14px;
    padding-bottom: 5px;
    margin-left: -3px;
}
.star-box img{
    font-weight: 400;
    font-size: 14px;
    height: 14px;
    width: 14px;
    display: inline-block;
    margin-left: 3px;
}
.evaluate_score{
    margin-left: 10px;
    margin-top: -2px;
}
.price>span:first-child{
    font-size: 18px;
    font-weight: 800;
}
.price>span:last-child{
    font-size: 12px;
    margin-left: 5px;
}
.gengduo{
    display: inline-block;
    line-height: 36px;
    color: #000;
    padding: 16px 20px!important;
    border: 1px solid #e5e5e5;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
}
.gengduo i{
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-bottom: -1px;
    margin-left: 5px;
    background-size: 9px 15px;
}
.add{
    width: 980px;
}
#follow{
    margin-top: 80px;
    padding: 40px;
    border-left: 7px solid rgba(72,197,239,.5);
    box-shadow: -1px 0 0 #a3e2f7, 1px 0 0 #a3e2f7, 0 -1px 0 #a3e2f7, 0 1px 0 #a3e2f7;
}
.song_name{
    font-size: 20px;
    font-weight: 500;
    line-height: 14px;
}
.song_introduce{
    font-size: 16px;
    opacity: .6;
    line-height: 29px;
    margin-top: 25px;
}
.zhanshi{
    width: 980px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}
.zhanshi img{
    width: 190px;
    height: 300px;
}
.zhanshi-meihua{
    width: 190px;
    position: relative;
    cursor: pointer;
    margin-top: -300px;
    height: 300px;
    color: #fff;
    background: linear-gradient(180deg,transparent 0,transparent 66%,#000 94%,#000);
}
.city_card_words_wrapper{
    position: relative;
    top: 245px;
    left: 15px;
    text-align: left;
}
.city-card{
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
}
.city-card-introduce{
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
}
.yemian{
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
}
.tit{
    padding: 0;
    color: #323232;
    cursor: default;
    font-size: 18px;
    font-weight: 400;
    margin: 80px 0 20px;
    line-height: 14px;
    text-align: left;
}
.yemian>ul{
    width: inherit;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.yemian li{
    list-style: none;
    display: flex;
    text-align: left;
}
.yemian li img{
    width: 478px;
    height: 310px;
}
.score .star-box img{
    width: 14px;
    height: 14px;
}
li .name>.price{
    display: inline;
    float: right;
}
/* 尾部 */
/*#endregion*/
#didian{
    width: 980px;
    margin: 50px auto auto;
    overflow: hidden;
    text-align: left;
}
#didian .first{
    padding-bottom: 25px;
    border-bottom: 1px solid #e5e5e5;
}
#didian .dimin{
    padding: 46px 0 70px 0;
    overflow: hidden;
}
#didian .dimin li{
    line-height: 44px;
    font-size: 14px;
    width: 11.1%;
    height: 44px;
    overflow: hidden;
    color: #959695;
}
#didian .dimin ul{
    display: flex;
    width: 980px;
    flex-wrap: wrap;
}
</style>