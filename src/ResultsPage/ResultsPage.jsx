import React, { useContext, useMemo, useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HC_drilldown from 'highcharts/modules/drilldown'
import HC_exporting from 'highcharts/modules/exporting'

import { AppContext } from '../Store'
import columnOptions, { 
  getDrillupOptions, 
  getDrilldownOptions 
} from '../services/columnOptions'
import { groups } from '../services/content'

HC_drilldown(Highcharts)
HC_exporting(Highcharts)

const chartEvents = {
  drilldown(e) {
    this.update({
      ...getDrilldownOptions(),
      title: { text: `Disciplines in ${e.point.name}` },
    })
  },
  drillup() {
    this.update(getDrillupOptions())
  }
}

export default function ResultsPage() {
  const { state } = useContext(AppContext)

  const chartOptions = useMemo(() => ({
    ...columnOptions,
    chart: {
      ...columnOptions.chart,
      events: chartEvents,
    },

    series: [{
      name: getDrillupOptions().title.text,
      colorByPoint: true,
      data: groups.map(group => {
        const name = group.title
        const disGroup = state[group.id] || {}
        const maxSumRating = group.disciplines.length * 5
        const sumRating = Object
          .values(disGroup)
          .reduce((acc, val) => acc + val, 0)
        const y = parseFloat((sumRating * 100 / maxSumRating).toFixed(2))
        const drilldown = group.id

        return { name, y, drilldown }
      })
    }],
    
    drilldown: {
      series: groups.map(group => {
        const name = group.title
        const id = group.id
        const data = group.disciplines.map(discipline => ([
          discipline.title, 
          state[group.id][discipline.id]
        ]))

        return { name, id, data }
      })
    }
  }), [state])

  return (
    <div className="Page ResultsPage">
      <div className="Panel">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions} />
      </div>
    </div>)
}
