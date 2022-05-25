<template>
  <div id="app"
       :style="themeColor">
    <Nav @childFun="changeTheme"></Nav>
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
  },
  data () {
    return {
      themeColor: {
        '--color': '#1a242d'
      }
    }
  },
  methods: {
    changeTheme (val) {
      if (val === 'moon') {
        this.themeColor['--color'] = '#1a242d'
      } else {
        this.themeColor['--color'] = ''
      }
    }
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
  min-height: 100vh;
  background-color: var(--color);
}

body {
  margin: 0;
}

.btn-outline-primary {
  color: gray;
}

.btn {
  border: none;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

.btn:hover {
  background-color: #42b983;
}

#app a {
  color: gray;
}

#app a:hover {
  color: #42b983;
}
</style>
