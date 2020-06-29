const radarOptions = {
  chart: { polar: true },

  title: {
      text: 'Disciplines from 1 to 5',
      x: -80
  },

  legend: { enabled: false },
  credits: { enabled: false },

  xAxis: {
      tickmarkPlacement: 'on',
      lineWidth: 0
  },

  yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      max: 5,
  },

  series: [{
      name: 'Rate',
      color: '#300084',
      pointPlacement: 'on'
  }],
}

export default radarOptions
