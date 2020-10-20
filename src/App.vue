<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Q穷游</router-link>
      <router-link to="/bourn">目的地</router-link>
      <router-link to="/kit">锦囊</router-link>
      <router-link to="/community">社区</router-link>
      <router-link to="/assistant">行程助手</router-link>
      <router-link to="/stor">商城</router-link>
      <router-link to="/homestay">酒店民宿</router-link>
      <router-link to="/hotel">特价酒店</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/sign">注册</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
a {
  text-decoration: none;
}
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  text-align: left;
  background-color: dimgrey;
  line-height: 30px;
  padding-left: 50px;
}

#nav a {
  font-weight: bold;
  color: white;
  margin-right: 40px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
