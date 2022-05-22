<template>
  <div id="WebsiteList">
    <h3>{{title}}</h3>
    <ul>
      <li v-for="item in list"
          :key="item.id">
        <a :href="item.url"
           target="_blank">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WebsiteList',
  props: {
    title: String,
    list: Array
  }
}
</script>

<style>
#WebsiteList h3 {
  margin-top: 40px;
  margin-bottom: 5px;
}
#WebsiteList ul {
  list-style-type: none;
  padding: 0;
  max-width: 900px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
#WebsiteList li {
  display: inline-block;
  margin: 10px 10px;
}
#WebsiteList li a {
  text-decoration: none;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 5px;
}
</style>
