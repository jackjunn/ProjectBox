<template>
  <div id="WebMenu">
    <WebsiteList :title="web_community.title"
                 :list="web_community.list"></WebsiteList>
    <WebsiteList :title="web_devtool.title"
                 :list="web_devtool.list"></WebsiteList>
    <WebsiteList :title="web_document.title"
                 :list="web_document.list"></WebsiteList>
    <WebsiteList :title="web_others.title"
                 :list="web_others.list"></WebsiteList>
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
      web_community: { title: '社区', list: [] },
      web_devtool: { title: '工具', list: [] },
      web_document: { title: '文档', list: [] },
      web_others: { title: '其它', list: [] }
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
        this.getData('web_community', this.web_community)
        this.getData('web_devtool', this.web_devtool)
        this.getData('web_document', this.web_document)
        this.getData('web_others', this.web_others)
      }
    }
  }
}
</script>
