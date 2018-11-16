<template>
  <div id="app">
    moduleA
    <!-- <img src="@/assets/logo.png"> -->
    <HelloWorld/>
    <Com />
    <div class="a-app"></div>
    <router-view />
    abc
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Com from '@/components/Com'
import { comXXX } from '@/common/com.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Com
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a-app {
  height: 50px;
  background-image: url("../../assets/logo1.png")
}
</style>
