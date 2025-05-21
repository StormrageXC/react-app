41;
import * as echarts from "echarts";
import React, { useEffect } from "react";
export default function Identify() {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  });
  return <div id="main" style={{ width: "100%", height: "100%" }}></div>;
}
