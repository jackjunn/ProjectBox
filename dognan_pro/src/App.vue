<template>
  <div id="app">
    <Nav></Nav>
    <Search></Search>
    <router-view />
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Search,
    Nav
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;
  margin-top: 0;
  height: 100%;
}
html,
body {
  margin: 0;
  height: 100%;
  background-color: #1a242d;
}
</style>
