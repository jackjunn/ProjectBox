<template>
  <div id="Nav">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active"
           href="#"><STRong>ToCoding</STRong></a>
      </li>
    </ul>
  </div>
</template>

<script>
import ShowDate from './ShowDate.vue'
export default {
  components: { ShowDate }
}
</script>

<style>
#Nav {
  padding: 10px;
  background-color: #563d7c;
  box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 25%),
    inset 0 -1px 5px rgb(0 0 0 / 25%);
}
</style>
