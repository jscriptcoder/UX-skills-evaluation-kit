import React, { useContext, useCallback } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { AppContext } from '../Store'
import pieOptions from '../services/pieOptions'

export default function ResultsPage(props) {
  const { state, dispatch } = useContext(AppContext)

  const getChartOptions = useCallback(() => {
    return {
      ...pieOptions,
      // xAxis: {
      //   ...radarOptions.xAxis,
      //   categories: disciplines.map(discipline => discipline.title)
      // },
      // series: [{
      //   ...radarOptions.series[0],
      //   data: disciplines.map(discipline => ratings[discipline.id] || 0)
      // }]
    }
  }, [])

  return (
    <div className="Page ResultsPage">
      <div className="Panel">
        <HighchartsReact
          highcharts={Highcharts}
          options={getChartOptions()} />
      </div>
    </div>)
}
