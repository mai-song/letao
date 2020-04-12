<template>
  <div class="china-map" ref="map">
    <!-- 渲染地图组件 -->
  </div>
</template>

<script>
// 指定图表数据
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.$store.dispatch('getAllCity')
  },
  computed: {
    ...mapState(['cityList']),
    data() {
      return this.cityList.map((item) => ({
        name: item.provinceShortName,
        value: item.confirmedCount,
        curedCount: item.curedCount,
        deadCount: item.deadCount,
      }))
    },
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      this.$myChart = this.$echarts.init(this.$refs.map)
      this.$myChart.setOption({
        // 配置map
        series: [
          {
            type: 'map',
            map: 'china',
            label: {
              show: true,
              color: '#fff',
            },
            itemStyle: {
              borderColor: '#fff',
            },
            emphasis: {
              itemStyle: {
                areaColor: '#006be4',
              },
              label: {
                color: '#000',
              },
            },
            data: this.data,
          },
        ],
        tooltip: {
          formatter: function(params) {
            return `
              地区：${params.name}<br/>
              确诊人数：${params.value || 0}<br>
              治愈人数：${params?.data?.curedCount || 0}<br>
              死亡人数：${params?.data?.deadCount || 0}<br>
            `
          },
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 10000 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 1000, max: 9999 },
            { min: 100, max: 999 },
            { min: 10, max: 99 },
            { min: 0, max: 9 },
          ],
        },
      })
    },
  },
  watch: {
    // 监听data的变化，重新渲染地图
    data() {
      this.draw()
    },
  },
}
</script>

<style lang="less" scoped>
.china-map {
  width: 100%;
  height: 90%;
}
</style>
