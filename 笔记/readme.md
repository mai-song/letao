# 中国地图配置

+ 引入文件

```js
// 文件路径 @/lib/echarts.js 自行配置
import 'echarts/map/js/china'
const echarts = equire([
  // 写上你需要的
  'bar',
  'title',
  'map',
])

export default echarts
```

+ 配置

```js
// 指定图表数据
const option = {
  // 配置map
  series: [
    {
      type: 'map',
      map: 'china',
      label: {
        show: true,
      },
    },
  ],
}
```

