<template>
  <div id="ShowDate">
    <span id="clock">{{datavalue}}</span>
  </div>
</template>

<script>
export default {
  name: 'ShowDate',
  data () {
    return {
      datavalue: '',
      nyear: '',
      nmonth: '',
      nday: -1,
      nwday: '',
      nhrs: '',
      nmin: '',
      nsec: '',
      // 农历参数
      lmonth: '',
      lday: '',
      lleap: '',
      hzWeek: ['日', '一', '二', '三', '四', '五', '六', '日'],
      lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
        0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
        0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
        0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
        0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
        0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
        0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
        0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
        0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
        0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990
        0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
        0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
        0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
        0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
        0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
        0x14b63],
      nStr1: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      nStr2: ['初', '十', '廿', '卅', '□']
    }
  },
  created () {
    // 显示开始
    this.Draw()
  },
  methods: {
    NewTick () {
      const noww = new Date()
      if (noww.getDate() !== this.nday) {
        this.nyear = noww.getFullYear()
        this.nmonth = noww.getMonth() + 1
        this.nwday = noww.getDay()
        this.nday = noww.getDate()

        this.getlunar() // 获取农历
      }
      this.nhrs = noww.getHours()
      this.nmin = noww.getMinutes()
      this.nsec = noww.getSeconds()
    },
    Draw () {
      this.NewTick()

      // 显示时间
      var s = this.nyear + '年' + this.nmonth + '月' + this.nday + '日 ' + '星期' + this.cweekday(this.nwday) + ' ' + this.shapetime(this.nhrs, this.nmin, this.nsec)
      s += ' 农历' + this.lmonth + '月' + this.lday // 农历
      this.datavalue = s
      setTimeout(this.Draw, 500)
    },

    // 辅助函数
    cweekday (wday) { return this.hzWeek[wday] },

    shapetime (vhrs, vmin, vsec) {
      if (vsec <= 9) vsec = '0' + vsec
      if (vmin <= 9) vmin = '0' + vmin
      if (vhrs <= 9) vhrs = '0' + vhrs
      return vhrs + ':' + vmin + ':' + vsec
    },

    // 农历函数开始
    lYearDays (y) {
      var i
      var sum = 348
      for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0
      }
      return (sum + this.leapDays(y))
    },

    leapDays (y) {
      if (this.leapMonth(y)) {
        return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29)
      } else return (0)
    },

    leapMonth (y) { return (this.lunarInfo[y - 1900] & 0xf) },

    monthDays (y, m) { return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29) },

    Lunar (y, m, d, self) {
      var i
      var leap = 0
      var temp = 0
      var offset = (Date.UTC(y, m, d) - Date.UTC(1900, 0, 31)) / 86400000
      for (i = 1900; i < 2050 && offset > 0; i++) {
        temp = self.lYearDays(i)
        offset -= temp
      }
      if (offset < 0) {
        offset += temp
        i--
      }
      this.year = i
      leap = self.leapMonth(i)
      this.isLeap = false; for (i = 1; i < 13 && offset > 0; i++) {
        if (leap > 0 && i === (leap + 1) && this.isLeap === false) {
          --i
          this.isLeap = true
          temp = self.leapDays(this.year)
        } else { temp = self.monthDays(this.year, i) }
        if (this.isLeap === true && i === (leap + 1)) this.isLeap = false
        offset -= temp
      }
      if (offset === 0 && leap > 0 && i === leap + 1) {
        if (this.isLeap) { this.isLeap = false } else { this.isLeap = true; --i }
      }
      if (offset < 0) { offset += temp; --i } this.month = i
      this.day = offset + 1
    },

    GetcDay (d) {
      var s
      switch (d) {
        case 10:
          s = '初十'; break
        case 20:
          s = '二十'; break
        case 30:
          s = '三十'; break
        default:
          s = this.nStr2[Math.floor(d / 10)]
          s += this.nStr1[d % 10]; break
      } return (s)
    },

    GetcMon (m) {
      if (m === 1) return '正'
      else return this.nStr1[m]
    },

    getlunar () {
      var self = this
      var lObj = new this.Lunar(this.nyear, this.nmonth - 1, this.nday, self)
      this.lmonth = this.GetcMon(lObj.month)
      this.lday = this.GetcDay(lObj.day)
      this.lleap = lObj.isLeap
      if (this.lleap === 1) { this.lmonth = '闰' + this.lmonth }
    }
    // 农历函数结束
  }

}
</script>

<style>
#ShowDate {
  width: 100%;
  background-color: #563d7c;
  box-shadow: 0 -0.15rem 0.25rem rgb(0 0 0 / 25%),
    inset 0 1px 5px rgb(0 0 0 / 25%);
  color: beige;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
</style>
