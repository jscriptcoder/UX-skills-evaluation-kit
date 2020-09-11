export function getDrillupOptions() {
  return {
    title: { text: 'Disciplines Groups' },
    yAxis: { 
      max: 100,
      title: {
        text: 'Strengh %'
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: `
        <span style="color:{point.color}">
          {point.name}
        </span>: 
        <b>{point.y:.2f}%</b> of total
        <br/>
      `
    },
  }
}

export function getDrilldownOptions() {
  return {
    yAxis: { 
      max: 5,
      title: { 
        text: 'Rating from 1 to 5'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: `
        <span style="color:{point.color}">
          {point.name}
        </span>: 
        <b>{point.y}</b> out of 5
        <br/>
      `
    },
  }
}

const columnOptions = {
  ...getDrillupOptions(),
  chart: { type: 'column' },
  xAxis: {type: 'category'},
  legend: { enabled: false },
  credits: { enabled: false },
  series: []
}

export default columnOptions
