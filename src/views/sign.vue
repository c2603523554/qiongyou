/* 注册 */
<template>
  <div id="big">
    <p>
      <img
        src="../assets/41bd0a522fbeb024a41208a408ca73ec.png"
        alt="穷游"
      />注册
    </p>
    <div id="small">
      <p></p>
      <p>
        <label for="sex"></label>
        <select>
          <option>阿尔巴尼亚</option>
          <option>阿尔及利亚</option>
          <option>阿富汗</option>
          <option>阿根廷</option>
          <option>爱尔兰</option>
        </select>
        <input type="text" placeholder="输入用于登录的手机号码" v-model="txt" />
      </p>
      <p>
        <input type="text" placeholder="图中识别码" v-model="val" />
        <span @click="yanzhengma">{{ num }}</span>
      </p>
      <p>
        <input type="text" placeholder="输入短信中的验证码" />
        <button @click="iii && getCode()">
          <span v-if="iii">{{ a }}</span>
          <span v-else>({{ kkk }}秒)重新发送</span>
        </button>
      </p>
      <p>
        <input
          type="text"
          placeholder="起一个具有辨识度的用户名"
          v-model="name"
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="输入8-16位密码，需包含字母及数字"
          v-model="ttat"
        />
      </p>
      <button @click="tatt">注册</button>
      <p>
        已有穷游账号?<a @click="denglu">登录</a>
        <span>同意<a href="#">会员条款</a>和<a href="#">免责声明</a></span>
      </p>
    </div>
    <div id="biggg">
      <ul>
        <li
          v-for="(item, index) in ftt"
          :key="index"
          @mousemove="jinru(index)"
          @mouseleave="likai(index)"
          :class="[aaaa == index ? 'gtu' : '']"
        >
          {{ item }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(item, index) in ftt1"
          :key="index"
          @mousemove="jinru1(index)"
          @mouseleave="likai1(index)"
          :class="[aaab == index ? 'gtu' : '']"
        >
          {{ item }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(item, index) in ftt2"
          :key="index"
          @mousemove="jinru2(index)"
          @mouseleave="likai2(index)"
          :class="[aaac == index ? 'gtu' : '']"
        >
          {{ item }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(item, index) in ftt3"
          :key="index"
          @mousemove="jinru3(index)"
          @mouseleave="likai3(index)"
          :class="[aaad == index ? 'gtu' : '']"
        >
          {{ item }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(item, index) in ftt4"
          :key="index"
          @mousemove="jinru4(index)"
          @mouseleave="likai4(index)"
          :class="[aaae == index ? 'gtu' : '']"
        >
          {{ item }}
        </li>
      </ul>
      <img src="../assets/tvuybivfnokiibeygh.png" alt="" />
    </div>
    <div>
      <div>
        <span>
          <h2>Q穷游</h2>
          <span>
            <p>
              2004-2020 © 穷游网® qyer.com All rights reserved. Version v5.57
              京ICP备12003524号 京公网安备11010502041090 京ICP证140673号
              营业执照 经营许可证
            </p>
            <p>
              穷游网为旅行者提供原创实用的出境游旅行指南和旅游攻略、旅行社区和问答交流平台，并提供签证、保险、机票、酒店预订、租车等服务。
            </p>
          </span>
          <img src="../assets/vucbwjhvjbjkvjfd.jpg" alt="" />
          <img src="../assets/trustutn_large.jpg" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaaa: 999,
      aaab: 999,
      aaac: 999,
      aaad: 999,
      aaae: 999,
      name: "",
      txt: "",
      ttat: "",
      ftt: ["关于我们", "加入穷游", "网站条款", "帮助中心"],
      ftt1: ["穷游简介", "联系我们", "合作伙伴"],
      ftt2: ["招聘职位"],
      ftt3: ["会员条款", "社区指南", "版权声明", "免责声明"],
      ftt4: ["新手上路", "使用帮助", "网站地图", "旅行工具"],
      num: 0,
      a: "发送验证码",
      val: "", //接收输入的验证码进行验证
      kkk: 60,
      iii: true,
    };
  },
  methods: {
    tatt() {
      let reg = new RegExp(
        "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"
      );
      let txt = this.txt;
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(txt) && !reg.test(txt)) {
        alert("手机号码有误，请重填");
        return false;
      }
      if (this.ttat == "") {
        alert("密码为空，请重填");
        return false;
      }
      if (this.val != this.num) {
        alert("识别码错误，请重填");
        this.yanzhengma();
        return false;
      }
      if (this.name == "") {
        alert("用户名为空，请重填");
        return false;
      }
      this.$router.push("/login");
    },
    yanzhengma() {
      let ni = Math.floor(Math.random() * 10000);
      if (ni < 1000) {
        this.yanzhengma();
      } else {
        this.num = ni;
      }
    },
    getCode() {
      this.iii = false;
      this.kkk = 60;
      var auth_timetimer = setInterval(() => {
        this.kkk--;
        if (this.kkk <= 0) {
          this.iii = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    denglu() {
      this.$router.push("/login");
    },
    jinru(index) {
      this.aaaa = index;
    },
    likai(index) {
      this.aaaa = 999;
    },
    jinru1(index) {
      this.aaab = index;
    },
    likai1(index) {
      this.aaab = 999;
    },
    jinru2(index) {
      this.aaac = index;
    },
    likai2(index) {
      this.aaac = 999;
    },
    jinru3(index) {
      this.aaad = index;
    },
    likai3(index) {
      this.aaad = 999;
    },
    jinru4(index) {
      this.aaae = index;
    },
    likai4(index) {
      this.aaae = 999;
    },
  },
  beforeMount: function () {
    this.yanzhengma();
  },
};
</script>

<style scoped>
*{
  margin: 0;
}
.gtu {
  color: #10b041;
}
a {
  text-decoration: none;
}
hr {
  margin: 10px;
}
#big {
  width: 1520px;
  height: 1028px;
  background-size: cover;
  background-image: url("../assets/ecb39528d488b6c520f7ddd3898379d6.jpg");
}
#big > p > img {
  width: 170px;
}
#big > p {
  color: white;
  font-size: 20px;
  padding-top: 60px;
}
#small {
  width: 340px;
  height: 430px;
  background-color: white;
  margin: 0 auto;
  padding: 50px;
}
#small > p:nth-child(2) > select {
  float: left;
  width: 80px;
  height: 35px;
  font-size: 10px;
}
#small > p:nth-child(2) > input {
  margin-left: 20px;
  width: 200px;
  height: 30px;
}
#small > p:nth-child(3) > input {
  margin-top: 20px;
  width: 170px;
  height: 30px;
  float: left;
}
#small > p:nth-child(3) > span {
  display: inline-block;
  width: 120px;
  height: 35px;
  margin-top: 20px;
  background-color: grey;
  line-height: 35px;
}
#small > p:nth-child(4) > input {
  float: left;
  margin-top: 20px;
  width: 170px;
  height: 30px;
}
#small > p:nth-child(4) > button {
  width: 120px;
  height: 35px;
  margin-top: 20px;
  background-color: grey;
  border: none;
}
#small > p:nth-child(5) > input {
  float: left;
  width: 302px;
  height: 30px;
  margin-top: 30px;
}
#small > p:nth-child(6) > input {
  float: left;
  width: 302px;
  height: 30px;
  margin-top: 30px;
}
#small > p:nth-child(8) {
  float: left;
  margin-top: 30px;
  text-align: left;
  font-size: 13px;
  width: 320px;
}
#small > p:nth-child(8) > span {
  float: right;
}
#small > button {
  float: left;
  width: 310px;
  height: 40px;
  color: white;
  font-size: 20px;
  background-color: green;
  border: none;
  margin-top: 30px;
}

li {
  list-style: none;
}
#biggg {
  width: 1318px;
  height: 200px;
  padding-left: 200px;
  margin: 0 auto;
  color: #959595;
  background-color: #363636;
}
#biggg > img {
  height: 150px;
  float: left;
  margin-left: 114px;
  margin-top: -35px;
}
#biggg > ul:first-child {
  margin-top: 100px;
  padding: 0;
  float: none;
  width: 100%;
  height: 50px;
}
#biggg > ul {
  padding: 0;
  float: left;
}
#biggg > ul > li {
  width: 100px;
  text-align: center;
  font-size: 13px;
  margin-right: 30px;
  margin-top: 10px;
}
#biggg > ul:first-child > li {
  width: 100px;
  float: left;
  text-align: center;
  margin-right: 30px;
  margin-top: 20px;
  font-size: 14px;
}

#biggg + div {
  width: 1520px;
  margin: 0 auto;
  height: 100px;
  text-align: left;
  color: #959595;
  background-color: #363636;
  position: relative;
}
#biggg + div > div {
  width: 1100px;
  margin: 0 auto;
  padding-top: 25px;
}
#biggg + div > div > span > h2 {
  width: 100px;
  float: left;
}
#biggg + div > div > span > span {
  float: left;
  width: 700px;
  font-size: 12px;
}
#biggg + div > div > span > img {
  width: 100px;
  height: 35px;
  float: left;
  margin: 5px;
}
#biggg + div > div > spav > h2 {
  position: absolute;
  left: 210px;
  top: 104px;
}
#biggg + div > div > spav > ul {
  margin-left: 60px;
  margin-top: 80px;
}
#biggg + div > div > spav > ul > li {
  float: left;
  font-size: 13px;
}
</style>
