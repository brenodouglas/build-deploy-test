<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>{{ teste }}</h2>
    <HelloWorld msg="Welcome to Your Test Build App in github v2 without cache.."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import config from './config';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    teste: config.teste,
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
