import React, { useState } from 'react';
import { Row, Col, Table, Slider, Popover, List } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

HighchartsMore(Highcharts)

const { Column } = Table
const { Item } = List

const DEFAULT_RADAR = {

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

export default function Competency(props) {
  const [disciplines, setDisciplines] = useState([
    { key: 'uxl', name: 'UX Leadership', rating: 0 },
    { key: 'unr', name: 'User needs research', rating: 0 },
    { key: 'ue', name: 'Usability Evaluation', rating: 0 },
    { key: 'pr', name: 'Prototyping', rating: 0 },
    { key: 'id', name: 'Interaction Design', rating: 0 },
    { key: 'vd', name: 'Visual Design', rating: 0 },
    { key: 'ia', name: 'Information Architecture', rating: 0 },
    { key: 'tw', name: 'Technical Writing', rating: 0 },
  ])

  const radarOptions = {...DEFAULT_RADAR}
  radarOptions.xAxis.categories = disciplines.map(discipline => discipline.name)
  radarOptions.series[0].data = disciplines.map(discipline => discipline.rating || 0)

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
              title={(
                <div className="ColumnRating">
                  <span>Rating</span>
                  <Popover 
                    title="Points description"
                    placement="topRight" 
                    content={(
                      <List size="small">
                        <Item>0 - I don’t understand this competence or it is non-existent</Item>
                        <Item>1 - Novice: I have a basic understanding of this competence</Item>
                        <Item>2 - Advanced beginner: I can demonstrate this competence under supervision</Item>
                        <Item>3 - Competent: I can demonstrate this competence independently</Item>
                        <Item>4 - Proficient: I can supervise other people in this competence</Item>
                        <Item>5 - Expert: I develop new ways of applying this competence</Item>
                      </List>
                    )}>
                    <InfoCircleTwoTone style={{ fontSize: 18 }} twoToneColor="#2f0084" />
                  </Popover>
                </div>
              )}
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
