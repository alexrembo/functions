import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ data }) => {
  const filteredData = data.filter(item => item.isActive);
  const formatedData = filteredData.map(({ name, x, y, color }) => {
    let dataPoints = [];
    for (let i = 0; i < x.length; i++) {
      dataPoints.push({ x: x[i], y: y[i] })
    }
    return {
      name,
      dataPoints,
      showInLegend: true,
      type: "spline",
      color,
    }
  });
  const options = {
    animationEnabled: true,
    axisX : {
      title: "axis X",
    },
    axisY : {
      title: "axis Y",
    },
    toolTip: {
      shared: true
    },
    data: formatedData,
  };

  return (
    <CanvasJSChart options = {options} />
  );
}

export default Chart;