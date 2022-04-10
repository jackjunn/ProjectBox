<template>
  <div id="WebMenu">
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
  name: 'WebMenu',
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
    this.login()
  },
  mounted () {

  },
  methods: {
    getData () {
      // 获取数据
      this.$cloudbase.database().collection('dognan_data').where({}).get().then((res) => {
        console.log('获取成功')
        this.webSite1 = res.data[0].webSite0
        this.webSite2 = res.data[0].webSite1
        this.webSite3 = res.data[0].webSite2
      }).catch((e) => { console.log('获取失败' + e) })
    },
    async login () {
      // 匿名登录
      const auth = this.$cloudbase.auth({ persistence: 'local' })
      await auth.anonymousAuthProvider().signIn().then(() => {
        console.log('登录成功')
      }).catch((e) => { console.log('登录失败：' + e) })
      const loginState = await auth.getLoginState()
      loginState !== null ? this.getData() : console.log('用户未登录' + loginState)
    }
  }
}
</script>
