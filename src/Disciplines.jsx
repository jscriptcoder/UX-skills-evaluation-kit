import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Table, Slider, Popover, List } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

import './Disciplines.less'
import { AppContext } from './Store'
import radarOptions from './radar-options'

HighchartsMore(Highcharts)

const { Column } = Table
const { Item } = List

export default function Disciplines(props) {
  const { list } = props
  const [_, dispatch] = useContext(AppContext)
  const slideMarks = [0, 1, 2, 3, 4, 5]
    .reduce((marks, val) => {
      marks[val] = val
      return marks
    }, {})

  const chartOptions = {
    ...radarOptions,
    xAxis: {
      ...radarOptions.xAxis,
      categories: list.map(discipline => discipline.title)
    },
    series: [{
      ...radarOptions.series[0],
      data: list.map(discipline => discipline.rating)
    }]
  }

  return (
    <div className="Disciplines">
      <Row gutter={16}>
        <Col span={12}>
          <Table 
            size="small"
            pagination={false} 
            dataSource={list}>
            <Column
              title="Discipline"
              dataIndex="title"
              key="title" 
              width={400} />
            <Column 
              key="info"
              render={item => (
                <Popover 
                  placement="top" 
                  content={item.description}>
                  <InfoCircleTwoTone 
                    style={{ fontSize: 18 }} 
                    twoToneColor="#300084" />
                </Popover>
              )} />
            <Column 
              title="Rating" 
              key="rating"
              render={item => (
                <Slider 
                  value={item.rating}
                  onChange={rating => {
                    dispatch({ 
                      type: 'changeRating',
                      discipline: item.id,
                      rating
                    })
                  }}
                  marks={slideMarks} 
                  min={0} 
                  max={5} />
              )} />
          </Table>
        </Col>
        <Col span={12}>
          <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions} />
        </Col>
      </Row>
    </div>
  )
}

Disciplines.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number
  }))
}
