/* 特价酒店 */
<template>
  <div>
    <div id="nei">
      <div id="title">
        <h1>
          <strong>穷游·Real便宜</strong>
          今日酒店特惠
          <h2>帮你筛选全网特价酒店</h2>
        </h1>
      </div>
      <div id="input">
        <div class="input">
          <div class="zuo add add1">
            <input type="text" placeholder="香港" />
          </div>
          <div class="zhong add add1">
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="monthrange"
                align="right"
                unlink-panels
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </div>
          <button class="you add add1">
            <i class="el-icon-search"></i>
            特惠搜索！
          </button>
        </div>
      </div>
      <div id="chengshi">
        <p>
          热门特价城市
          <a>香港</a><a>京都</a><a>曼谷</a><a>巴黎</a><a>纽约</a><a>大阪</a
          ><a>伦敦</a><a>旧金山</a>
        </p>
      </div>
    </div>
    <div id="body">
        <div class="suoyin">

        </div>
        <div class="neirong">
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/1.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港名乐居星空</h4>
                    <h5>Mingle With The Star</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 |
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.83km
                        
                    </p>
                    <span>
                        ￥<strong>322</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/2.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港南洋酒店</h4>
                    <h5>South Pacific Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好极了 | 四级高端
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.85km
                    </p>
                    <span>
                        ￥<strong>717</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/1.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港名乐居星空</h4>
                    <h5>Mingle With The Star</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 |
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.83km
                    </p>
                    <span>
                        ￥<strong>234</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/3.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港客舍酒店</h4>
                    <h5>Hotel Hart</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 | 三级舒适
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.56km
                    </p>
                    <span>
                        ￥<strong>483</strong>起
                    </span>
                </div>
            </div>
        </div>
        
        <div class="neirong">
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/4.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港紫珀酒店</h4>
                    <h5>The Perkin Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好极了 | 三级舒适
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.92km
                    </p>
                    <span>
                        ￥<strong>958</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/5.jpg" alt="">
                </div>
                <div class="san">
                    <h4>太阳旅馆</h4>
                    <h5>Sun Guest House</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好 | 一级实惠
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.41km
                    </p>
                    <span>
                        ￥<strong>421</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/6.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港富荟湾仔酒店</h4>
                    <h5>iclub Wan Chai Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 | 四级高端
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.75km
                    </p>
                    <span>
                        ￥<strong>598</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/7.jpg" alt="">
                </div>
                <div class="san">
                    <h4>OM Guest House</h4>
                    <h5>Om Guest House</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                             | 一级实惠
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.4km
                    </p>
                    <span>
                        ￥<strong>188</strong>起
                    </span>
                </div>
            </div>
        </div>
        <div class="neirong">
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/1.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港名乐居星空</h4>
                    <h5>Mingle With The Star</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 |
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.83km
                        
                    </p>
                    <span>
                        ￥<strong>322</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/2.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港南洋酒店</h4>
                    <h5>South Pacific Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好极了 | 四级高端
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.85km
                    </p>
                    <span>
                        ￥<strong>717</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/1.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港名乐居星空</h4>
                    <h5>Mingle With The Star</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 |
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.83km
                    </p>
                    <span>
                        ￥<strong>234</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/3.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港客舍酒店</h4>
                    <h5>Hotel Hart</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 | 三级舒适
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.56km
                    </p>
                    <span>
                        ￥<strong>483</strong>起
                    </span>
                </div>
            </div>
        </div>
        
        <div class="neirong">
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/4.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港紫珀酒店</h4>
                    <h5>The Perkin Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好极了 | 三级舒适
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.92km
                    </p>
                    <span>
                        ￥<strong>958</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/5.jpg" alt="">
                </div>
                <div class="san">
                    <h4>太阳旅馆</h4>
                    <h5>Sun Guest House</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好 | 一级实惠
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.41km
                    </p>
                    <span>
                        ￥<strong>421</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/6.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港富荟湾仔酒店</h4>
                    <h5>iclub Wan Chai Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 | 四级高端
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.75km
                    </p>
                    <span>
                        ￥<strong>598</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/7.jpg" alt="">
                </div>
                <div class="san">
                    <h4>OM Guest House</h4>
                    <h5>Om Guest House</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                             | 一级实惠
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.4km
                    </p>
                    <span>
                        ￥<strong>188</strong>起
                    </span>
                </div>
            </div>
        </div>
        <div class="neirong">
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/1.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港名乐居星空</h4>
                    <h5>Mingle With The Star</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 |
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.83km
                        
                    </p>
                    <span>
                        ￥<strong>322</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/2.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港南洋酒店</h4>
                    <h5>South Pacific Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好极了 | 四级高端
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.85km
                    </p>
                    <span>
                        ￥<strong>717</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/1.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港名乐居星空</h4>
                    <h5>Mingle With The Star</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 |
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.83km
                    </p>
                    <span>
                        ￥<strong>234</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/3.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港客舍酒店</h4>
                    <h5>Hotel Hart</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 | 三级舒适
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.56km
                    </p>
                    <span>
                        ￥<strong>483</strong>起
                    </span>
                </div>
            </div>
        </div>
        
        <div class="neirong">
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/4.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港紫珀酒店</h4>
                    <h5>The Perkin Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好极了 | 三级舒适
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.92km
                    </p>
                    <span>
                        ￥<strong>958</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/5.jpg" alt="">
                </div>
                <div class="san">
                    <h4>太阳旅馆</h4>
                    <h5>Sun Guest House</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            好 | 一级实惠
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.41km
                    </p>
                    <span>
                        ￥<strong>421</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/6.jpg" alt="">
                </div>
                <div class="san">
                    <h4>香港富荟湾仔酒店</h4>
                    <h5>iclub Wan Chai Hotel</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                            非常好 | 四级高端
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道1.75km
                    </p>
                    <span>
                        ￥<strong>598</strong>起
                    </span>
                </div>
            </div>
            <div class="yi scale-img">
                <div class="er">
                    <img src="../assets/7.jpg" alt="">
                </div>
                <div class="san">
                    <h4>OM Guest House</h4>
                    <h5>Om Guest House</h5>
                    <p>
                        <span>
                            <strong>8.8</strong>
                             | 一级实惠
                        </span>
                    </p>
                    <p class="el-icon-location-information">
                        距离星光大道0.4km
                    </p>
                    <span>
                        ￥<strong>188</strong>起
                    </span>
                </div>
            </div>
        </div>
    </div>
     <bastmp/>
  </div>
</template>
<script>

import bastmp from '@/components/bastmp.vue'
export default {
  components:{
    bastmp,
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            },
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
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
#nei {
  width: 980px;
  overflow: hidden;
  margin: 0 auto;
}
#title {
  padding-top: 70px;
  padding-bottom: 27px;
}
#title h1 {
  display: inline-block;
  font-size: 30px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: #000;
  line-height: 42px;
}
#title h1 strong {
  color: #704dff;
  text-shadow: 0 6px 20px rgba(109, 84, 255, 0.3);
  position: relative;
  background: linear-gradient(270deg, #704dff, #5390fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
#title h1 h2 {
  padding-top: 9px;
  font-size: 18px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
}
#input {
  padding-bottom: 22px;
}
#input .input {
  height: 74px;
  background: #704dff;
  background: linear-gradient(270deg, #704dff, #5390fa);
  box-sizing: border-box;
  position: relative;
  z-index: 99;
}
.zuo {
  left: 10px;
  width: 240px;
  position: relative;
}
.add {
  background-color: #fff;
  margin-right: 10px;
}
.add1 {
  display: block;
  top: 10px;
  height: 54px;
  border-radius: 6px;
  text-align: center;
}
.zuo input {
  display: block;
  width: 170px;
  height: 22px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 22px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #636363;
}
.zhong {
  left: 260px;
  width: 520px;
  position: absolute;
}
.block > div {
  width: 520px;
  height: 54px;
}
.you {
  right: 0px;
  width: 180px;
  border: none;
  background: linear-gradient(110deg, #ff168f, #ff5854);
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  position: absolute;
}
#chengshi{
    text-align: left;
    padding-bottom: 22px;
}
#chengshi p{
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: #000;
    line-height: 22px;
}
#chengshi a{
    margin-left: 38px;
    font-weight: 400;
    color: rgba(0,0,0,.4);
    cursor: pointer;
}
/* 尾部 */
/*#endregion*/
#body{
    width: 1160px;
    margin: 0 auto;
    overflow: hidden;
}
.suoyin{
    position: relative;
    width: 100%;
    height: 40px;
}
.neirong{
    padding-top: 19px;
    display: flex;

}
.neirong .yi{
    width: 275px;
    height: 316px;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 40px;
    margin-right: 20px;
}
.neirong .yi .er{
    width: 100%;
    height: 185px;
    overflow: hidden;
}
.neirong .yi .er img{
    width: 100%;
    height: 185px;
}
.neirong .yi .san{
    width: 100%;
    height: 131px;
    position: relative;
    text-align: left;
}
.neirong .yi .san h4{
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    padding-top: 20px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #000;

}
.neirong .yi .san h5{
    padding-top: 7px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0,0,0,.8);
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
}
.neirong .yi .san p{
    padding-top: 15px;
    line-height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0,0,0,.8);
}
.neirong .yi .san p strong{
    font-weight: 700;
    font-size: 22px;
}
.neirong .yi .san p:last-child{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0,0,0,.4);
    line-height: 14px;
    width: 175px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
}
.neirong .yi .san>span{
    float: right;
}
.neirong .yi .san>span strong{
    font-size: 30px;
    font-family: DINCondensed-Bold;
    font-weight: 700;
    color: #ff3e6a;
    line-height: 32px;
}
.scale-img{overflow: hidden;}
.scale-img img{
    width: 100%;
    height: 100%;
    -webkit-object-fit: cover;
    object-fit: cover;    
    transition: .5s all linear;
    -ms-transition: .5s all linear; /* IE 9 */
    -moz-transition: .5s all linear; /* Firefox */
    -webkit-transition: .5s all linear; /* Safari 和 Chrome */
    -o-transition: .5s all linear; /* Opera */
}
.scale-img:hover img{
    transform: scale3d(1.1,1.1,1.1);
    -ms-transform: scale3d(1.1,1.1,1.1);
    -moz-transform: scale3d(1.1,1.1,1.1);
    -webkit-transform: scale3d(1.1,1.1,1.1);
    -o-transform: scale3d(1.1,1.1,1.1);
}
</style>