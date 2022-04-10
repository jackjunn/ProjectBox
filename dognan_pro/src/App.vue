<template>
  <div id="app">
    <Nav></Nav>
    <Search></Search>
    <router-view />
    <ShowDate></ShowDate>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Nav from './components/Nav.vue'
import ShowDate from './components/ShowDate.vue'
export default {
  name: 'App',
  components: {
    Search,
    Nav,
    ShowDate
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: beige;
  margin-top: 0;
  height: 100%;
}
html,
body {
  margin: 0;
  height: 100%;
  background-color: #343a40;
}
</style>
