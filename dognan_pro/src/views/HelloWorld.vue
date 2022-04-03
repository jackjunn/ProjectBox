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
              class="btn">Search</button>
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
    this.webSite1 = {
      title: 'DEVTOOLS',
      list: [
        { dns: 'https://github.com/', name: 'GitHub' },
        { dns: 'https://www.csdn.net/', name: 'CSDN' },
        { dns: 'https://cloud.tencent.com/', name: '腾讯云' },
        { dns: 'https://www.aliyun.com/', name: '阿里云' }
      ]
    }
    this.webSite2 = {
      title: 'DOCUMENTS',
      list: [
        { dns: 'https://cn.vuejs.org/index.html', name: 'VUE官网' },
        { dns: 'https://www.bootcss.com/', name: 'Bootstrap中文网' },
        { dns: 'http://v1.iviewui.com/', name: 'ViewUi' },
        { dns: 'https://element.eleme.cn/#/zh-CN', name: 'ElementUi' }
      ]
    }
    this.webSite3 = {
      title: 'VIDEOS',
      list: [
        { dns: 'https://www.bilibili.com/', name: 'BILIBILI' },
        { dns: 'https://www.iqiyi.com/', name: '爱奇艺' },
        { dns: 'https://v.qq.com/', name: '腾讯视频' },
        { dns: 'https://www.youku.com/', name: '优酷网' },
        { dns: 'https://tv.cctv.com/live/cctv13', name: 'CCTV新闻频道' }
      ]
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
