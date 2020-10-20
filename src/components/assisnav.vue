<template>
  <div id="ppy">
    <img src="../assets/xgvhjkljhgfdzxfghijj.png" />
    <ul>
      <li><a href="">使用帮助</a></li>
      <li><a href="">APP下载</a></li>
      <li><a href="">免费私人定制</a></li>
      <li><a href="">企业版</a></li>
    </ul>
    <div>
      <p><span>一分钟搞定</span>你的攻略<a href="">播放视频介绍</a></p>
      <p>共有 1572 万穷游客，创建了 {{ ap }}个行程</p>
      <span class="doodle">
        <img class="no_moon" src="../assets/lkhxfdghjknmkljhgxfh1.png" />
        <img class="no_hill" src="../assets/xcvbjnkljghgdgfgvhb2.png" />
        <img class="no_road" src="../assets/ghjlkkjcvijkl3.png" />
        <img class="no_cloud" src="../assets/gvhbjknlmvfghkjhgbuj4.png" />
        <img class="no_tree" src="../assets/cvuhbkjnlkjvhcxdfghjkl6.png" />
        <img class="no_stone  isg?'trans':''" src="../assets/xcyvuhkjlxcvbikljhgfy7.png" />
        <img
          class="no_plan_sd home-doodle-sd"
          src="../assets/cvbjklkjnbhgtdxfcgv8.png"
        />
        <img
          class="no_plan home-doodle"
          src="../assets/cvuikolkljohiuuytrxctyyuio.png"  :class="{'trans':isg}"
        />
      </span>
      <span id="euu" @mouseleave="likai">
        <button @mousemove="jinru">+ 创建新的行程</button>
        <button v-if="isshow">自己制定</button>
        <button v-if="isshow">帮我制定</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isg:true,
      ap: 0,
      app:34756010,
      isshow: false,
    };
  },
  methods: {
    jinru() {
      this.isshow = true;
    },
    likai() {
      this.isshow = false;
    },
    jisuan() {
      this.ap=this.app;
      let auth_timetimer = setInterval(() => {
        this.app++;
        this.ap=this.app;
        this.ap=this.ap.toString().replace(/(\d)(?=(?:\d{3})+$)/g,'$1,');
        }, 3000);
      let auth_timetimee = setInterval(() => {
        this.isg=!this.isg;
      }, 500);  
      }
    },
  beforeMount: function () {
    setInterval(this.jisuan(), 10000);
  },
};
</script>
<style scoped>
.trans{
  transform: translateY(-10px)!important;
}
#ppy > ul > li:hover {
  background-color: burlywood;
}
li {
  list-style: none;
  float: left;
}
#ppy {
  text-align: left;
  color: white;
}
#ppy > img {
  margin-left: 40px;
}
#ppy > ul {
  float: right;
  margin-right: 20px;
  height: 60px;
}
#ppy > ul > li {
  width: 150px;
  text-align: center;
  line-height: 50px;
}
#ppy > div {
  margin-top: 10px;
  width: 1520px;
  height: 448px;
  text-align: center;
  background-image: url("../assets/vgsdhkjncffsedbhhhhh.png");
  padding-top: 50px;
}
#ppy > div > p:nth-child(1) {
  font-size: 34px;
  font-weight: lighter;
  color: white;
  padding-bottom: 20px;
}
#ppy > div > p:nth-child(1) > span {
  color: white;
  font-weight: bold;
}
#ppy > div > p:nth-child(1) > a {
  display: inline-block;
  font-size: 12px;
  width: 100px;
  height: 20px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  margin-left: 20px;
}
.doodle {
  transition: 2s;
  width: 466px;
  height: 209px;
  top: 160px;
  margin: auto;
  position: relative;
  display: block;
  margin-top: -135px;
}
.doodle:hover {
  transition: 2s;
  transform: translate(20px, 10px);
}
.doodle img.no_moon {
  width: 45px;
  height: 45px;
  left: 147px;
  top: 7px;
  transform: translateZ(80px);
}
.doodle img.no_hill {
  width: 353px;
  height: 117px;
  left: 56px;
  bottom: 85px;
  transform: translateZ(30px);
}
.doodle img.no_road {
  width: 466px;
  height: 90px;
  left: 0;
  bottom: 0;
  transform: translateZ(50px);
}
.doodle img.no_cloud {
  width: 415px;
  height: 58px;
  left: 36px;
  top: 22px;
  transform: translateZ(100px);
}
.doodle img.no_tree {
  width: 379px;
  height: 48px;
  left: 43px;
  bottom: 80px;
  transform: translateZ(70px);
}
.doodle img.no_stone {
  width: 350px;
  height: 23px;
  left: 18px;
  bottom: 48px;
  transform: translateZ(20px);
}
.doodle img.no_plan_sd {
  width: 23px;
  height: 7px;
  left: 226px;
  bottom: 62px;
  transform: translateZ(100px);
}
.doodle img.no_plan {
  width: 49px;
  height: 62px;
  left: 213px;
  bottom: 65px;
  transform: translateZ(120px);
}
.doodle img {
  position: absolute;
}
#euu {
  position: absolute;
  width: 250px;
  height: 60px;
  margin-left: -130px;
  margin-top: 183px;
}
#euu > button {
  width: 250px;
  height: 35px;
  border: none;
  color: green;
}
#euu > button:nth-child(2) {
  color: white;
  border: 1px solid white;
  background-color: green;
}
#euu > button:nth-child(3) {
  color: white;
  border: 1px solid white;
  background-color: green;
}
</style>