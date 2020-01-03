export const directionOptions = {
  angleAxis: {
      type: 'category',
      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        formatter: function (value) { return (value) + "\u00B0"; }
      },
  },
  itemStyle: {
      color: '#e67078',
    },
  radiusAxis: {
  },
  tooltip: {

  },
  polar: {
  },
  series: [{
      type: 'bar',
      data: [],
      coordinateSystem: 'polar',
      name: 'A',
      stack: 'a'
  }],
};

export const directionOptions2 = {};
