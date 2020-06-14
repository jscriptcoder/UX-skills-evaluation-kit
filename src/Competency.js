import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Row, Col, Table, Slider } from 'antd'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import FormItemInput from 'antd/lib/form/FormItemInput';

HighchartsMore(Highcharts)

const { Column } = Table

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
      min: 0
  },

  series: [{
      name: 'Rate',
      pointPlacement: 'on'
  }],
}

export default function Competency(props) {
  const [disciplines, setDisciplines] = useState([
    { key: 'uxl', name: 'UX Leadership', rating: 0 },
    { key: 'unr', name: 'User needs research', rating: 0 },
    { key: 'ue', name: 'Usability Evaluation', rating: 0 },
    { key: 'p', name: 'Prototyping', rating: 0 },
    { key: 'id', name: 'Interaction Design', rating: 0 },
    { key: 'vd', name: 'Visual Design', rating: 0 },
    { key: 'ia', name: 'Information Architecture', rating: 0 },
    { key: 'tw', name: 'Technical Writing', rating: 0 },
  ])

  const { xAxis, series } = radarOptions
  
  xAxis.categories = disciplines.map(discipline => discipline.name)
  series[0].data = disciplines.map(discipline => discipline.rating || 0)

  return (
    <div className="Competency">
      <Row gutter={16}>
        <Col span={12}>
          <Table
            size="small"
            pagination={false}
            dataSource={disciplines}>
            <Column
              title="Discipline"
              dataIndex="name"
              key="name" width={400} />
            <Column
              title="Rating"
              dataIndex="rating"
              key="rating"
              render={(_, item) => (
                <Slider 
                  key={item.key}
                  value={item.rating}
                  onChange={rating => {
                    item.rating = rating
                    setDisciplines(disciplines.slice(0))
                  }}
                  marks={
                    [0, 1, 2, 3, 4, 5].reduce((marks, val) => {
                      marks[val] = val
                      return marks
                    }, {})
                  } 
                  min={0} 
                  max={5} />
              )} />
          </Table>
        </Col>
        <Col span={12}>
          <HighchartsReact
            highcharts={Highcharts}
            options={radarOptions} />
        </Col>
      </Row>
    </div>
  )
}
