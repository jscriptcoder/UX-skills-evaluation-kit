import React, { useContext, useCallback } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { AppContext } from '../Store'
import columnOptions from '../services/columnOptions'
import { groups } from '../services/content'

export default function ResultsPage(props) {
  const { state, dispatch } = useContext(AppContext)

  const getChartOptions = useCallback(() => {
    return {
      ...columnOptions,
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
