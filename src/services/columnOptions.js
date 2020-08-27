import { groups } from './content'

const columnOptions = {
  chart: { type: 'column' },
  title: {
    text: 'Stacked column chart'
  },

  legend: { enabled: false },
  credits: { enabled: false },

  xAxis: {
    categories: groups.map(group => group.title)
  },
  series: []
}

export default columnOptions
