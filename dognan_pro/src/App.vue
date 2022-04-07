<template>
  <div id="app">
    <canvas id="space"
            ref="space"></canvas>
    <div id="app2">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      canvas: '',
      c: '',
      numStars: 1900,
      radius: '',
      focalLength: '',
      warp: 0,
      centerX: '',
      centerY: '',
      stars: [],
      star: '',
      i: 0,
      animate: true
    }
  },
  mounted: function () {
    this.canvas = this.$refs.space
    this.c = this.canvas.getContext('2d')
    this.radius = '0.' + Math.floor(Math.random() * 9) + 1
    this.focalLength = this.canvas.width * 2
    this.initializeStars()
    this.executeFrame()
    console.log(this.canvas)
  },
  methods: {
    executeFrame: function () {
      if (this.animate) { window.requestAnimationFrame(this.executeFrame) }
      this.moveStars()
      this.drawStars()
    },

    initializeStars: function () {
      this.centerX = this.canvas.width / 2
      this.centerY = this.canvas.height / 2

      this.stars = []
      for (this.i = 0; this.i < this.numStars; this.i++) {
        this.star = {
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          z: Math.random() * this.canvas.width,
          o: '0.' + Math.floor(Math.random() * 99) + 1
        }
        this.stars.push(this.star)
      }
    },

    moveStars: function () {
      for (this.i = 0; this.i < this.numStars; this.i++) {
        this.star = this.stars[this.i]
        this.star.z--

        if (this.star.z <= 0) {
          this.star.z = this.canvas.width
        }
      }
    },

    drawStars: function () {
      var pixelX, pixelY, pixelRadius

      // Resize to the screen
      if (this.canvas.width !== window.innerWidth || this.canvas.width !== window.innerWidth) {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.initializeStars()
      }
      if (this.warp === 0) {
        this.c.fillStyle = 'rgba(0,10,20,1)'
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
      }
      this.c.fillStyle = 'rgba(209, 255, 255, ' + this.radius + ')'
      for (this.i = 0; this.i < this.numStars; this.i++) {
        this.star = this.stars[this.i]

        pixelX = (this.star.x - this.centerX) * (this.focalLength / this.star.z)
        pixelX += this.centerX
        pixelY = (this.star.y - this.centerY) * (this.focalLength / this.star.z)
        pixelY += this.centerY
        pixelRadius = 1 * (this.focalLength / this.star.z)

        this.c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius)
        this.c.fillStyle = 'rgba(209, 255, 255, ' + this.star.o + ')'
        // c.fill();
      }
    }
  }
}
</script>

<style>
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: beige;
  margin-top: 0;
}
html,
body {
  margin: 0;
}
#space {
  position: fixed;
  z-index: -9;
}
</style>
