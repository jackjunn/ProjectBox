<template>
  <div id="Nav">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active"
           target="_blank"
           href="https://dognan-1gxuq1k5eaee817b-1310565908.tcloudbaseapp.com/tcb-cms/index"><STRong>toocoding.com</STRong></a>
      </li>
    </ul>
    <b-button variant="outline-primary"
              @click="changeIcon">
      <b-icon :icon="iconType"></b-icon>
    </b-button>
  </div>
</template>

<script>
import TypcnWeatherNight from '../icons/TypcnWeatherNight.vue'
export default {
  components: {
    TypcnWeatherNight
  },
  data () {
    return {
      iconType: 'moon'
    }
  },
  methods: {
    changeIcon () {
      if (this.iconType === 'moon') {
        this.iconType = 'brightness-high'
      } else {
        this.iconType = 'moon'
      }
      this.$emit('childFun', this.iconType)
    }
  }
}
</script>

<style>
#Nav {
  padding: 10px;
  box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 25%),
    inset 0 -1px 5px rgb(0 0 0 / 25%);
  overflow: hidden;
}

#Nav ul {
  float: left;
}

#Nav a {
  color: gray;
}

#Nav button {
  float: right;
}
</style>
