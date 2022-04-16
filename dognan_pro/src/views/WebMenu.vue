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
      webSite1: { title: '工具社区', list: [] },
      webSite2: { title: '官方文档', list: [] },
      webSite3: { title: '其它', list: [] }
    }
  },
  created () {
    this.login()
  },
  mounted () {

  },
  methods: {
    getData (webType, dateObj) {
      // 获取数据
      this.$cloudbase.database().collection(webType).where({}).get().then((res) => {
        console.log('获取数据成功')
        dateObj.list = res.data
      }).catch((e) => { console.log('获取失败' + e) })
    },
    async login () {
      // 匿名登录
      const auth = this.$cloudbase.auth({ persistence: 'local' })
      await auth.anonymousAuthProvider().signIn().then(() => {
        console.log('登录成功')
      }).catch((e) => { console.log('登录失败：' + e) })
      const loginState = await auth.getLoginState()
      if (loginState !== null) {
        this.getData('web_devtool', this.webSite1)
        this.getData('web_document', this.webSite2)
        this.getData('web_others', this.webSite3)
      }
    }
  }
}
</script>
