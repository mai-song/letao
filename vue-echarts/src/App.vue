<template>
  <div class="app data">
    <div class="data-title">
      <div class="title-center">疫情大数据看板</div>
    </div>
    <div class="data-content">
      <div class="con-left fl">
        <div class="right-top boxstyle">
          <div class="title">报表1</div>
          <div id="echarts_1" class="charts"></div>
        </div>
        <div class="right-center boxstyle">
          <div class="title">报表2</div>
          <div id="echarts_2" class="charts"></div>
        </div>
        <div class="right-bottom boxstyle">
          <div class="title">报表3</div>
          <div id="echarts_3" class="charts"></div>
        </div>
      </div>
      <div class="con-center fl">
        <div class="map-num">
          <p>感染总人数</p>
          <div class="num">
            <span>1</span>
            <span>5</span>
            <span>4</span>
            <span>9</span>
            <span>2</span>
            <span>6</span>
          </div>
        </div>
        <div class="cen-top map">
          <Map></Map>
        </div>
        <div class="cen-bottom boxstyle">
          <div class="title">车辆充电高峰时间</div>
          <div id="echarts_3" class="charts"></div>
        </div>
      </div>
      <div class="con-right fr">
        <div class="right-top boxstyle">
          <div class="title">报表4</div>
          <div id="echarts_4" class="charts"></div>
        </div>
        <div class="right-center boxstyle">
          <div class="title">报表5</div>
          <div id="echarts_5" class="charts"></div>
        </div>
        <div class="right-bottom boxstyle">
          <div class="title">报表6</div>
          <div id="echarts_6" class="charts"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from './components/Map.vue'
export default {
  components: {
    Map,
  },
}
</script>

<style></style>
