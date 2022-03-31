<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="">
    <h3>视频</h3>
    <ul>
      <li><a href="https://www.iqiyi.com/" target="_blank" rel="noopener">爱奇艺</a></li>
      <li><a href="https://v.qq.com/" target="_blank" rel="noopener">腾讯</a></li>
      <li><a href="https://www.youku.com/" target="_blank" rel="noopener">优酷网</a></li>
      <li><a href="https://www.bilibili.com/" target="_blank" rel="noopener">bilibili</a></li>
    </ul>
    <h3>工具</h3>
    <ul>
      <li><a href="https://cloud.tencent.com/" target="_blank" rel="noopener">腾讯云</a></li>
      <li><a href="https://www.csdn.net/" target="_blank" rel="noopener">CSDN</a></li>
      <li><a href="https://www.aliyun.com/" target="_blank" rel="noopener">阿里云</a></li>
      <li><a href="https://github.com/" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://www.bootcss.com/" target="_blank" rel="noopener">Bootstrap中文网</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
