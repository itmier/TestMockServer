<!--
 * @Author: Tmier
 * @Date: 2020-08-04 09:57:16
 * @LastEditTime: 2020-08-04 10:14:35
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
//import x from ''
export default {
  name: "App",
  components: {},
  data() {
    return {
      userInfo:{}
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>



