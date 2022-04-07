<template>
  <div class="hello">
    <img src=""
         alt="">
    <form class="form-inline"
          action="https://www.baidu.com/baidu"
          target="_blank">
      <input type="text"
             class="form-control"
             name=word>
      <button type="submit"
              class="btn">
        <b-icon-search>
        </b-icon-search>
      </button>
    </form>
    <WebsiteList :title="webSite1.title"
                 :list="webSite1.list"></WebsiteList>
    <WebsiteList :title="webSite2.title"
                 :list="webSite2.list"></WebsiteList>
    <WebsiteList :title="webSite3.title"
                 :list="webSite3.list"></WebsiteList>
  </div>
</template>

<script>
import WebsiteList from '../components/WebsiteList.vue'
// import Cloudbase from '@cloudbase/vue-provider'
export default {
  name: 'HelloWorld',
  components: {
    WebsiteList
  },
  data () {
    return {
      webSite1: {},
      webSite2: {},
      webSite3: {}
    }
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  methods: {
    getData () {
      this.$cloudbase.auth({ persistence: 'local' }).anonymousAuthProvider().signIn()
      this.$cloudbase.database().collection('dognan_data').where({}).get().then((res) => {
        if (res) {
          this.webSite1 = res.data[0].webSite0
          this.webSite2 = res.data[0].webSite1
          this.webSite3 = res.data[0].webSite2
        } else {
          console.log('数据库连接失败')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-top: 20px;
  margin-bottom: 20px;
}
button,
.form-control {
  color: #42b983;
}
.form-control {
  width: 300px;
  display: inline-block;
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
}
input:-webkit-autofill {
  box-shadow: 0 0 0 1000px inset !important;
  -webkit-text-fill-color: #42b983 !important;
  caret-color: #42b983;
}
</style>
