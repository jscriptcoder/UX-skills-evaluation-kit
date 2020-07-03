import React, { useContext, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Table, Slider, Popover, List } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

import './Disciplines.less'
import { AppContext } from './Store'
import appContent from './app-content'
import radarOptions from './radar-options'

HighchartsMore(Highcharts)

const { Column } = Table
const { Item } = List

const slideMarks = [0, 1, 2, 3, 4, 5]
  .reduce((marks, val) => {
    marks[val] = val
    return marks
  }, {})

export default function Disciplines(props) {
  const { groupId } = props
  const { state, dispatch } = useContext(AppContext)
  const { disciplines } = appContent.groups.find(group => group.id === groupId)
  const ratings = state[groupId]

  const getChartOptions = useCallback(() => {
    return {
      ...radarOptions,
      xAxis: {
        ...radarOptions.xAxis,
        categories: disciplines.map(discipline => discipline.title)
      },
      series: [{
        ...radarOptions.series[0],
        data: disciplines.map(discipline => ratings[discipline.id] || 0)
      }]
    }
  }, [disciplines, ratings])

  return (
    <div className="Disciplines">
      <Row gutter={16}>
        <Col span={12}>
          <div className="columnPanel">
            <Table
              size="small"
              rowKey="id"
              pagination={false}
              dataSource={disciplines}>
              <Column
                title="Discipline"
                dataIndex="title"
                key="title"
                width={400} />
              <Column
                key="info"
                render={item => (
                  <Popover
                    key={item.id}
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
                    value={ratings[item.id]}
                    onChange={rating => {
                      dispatch({
                        type: 'changeRating',
                        groupId,
                        disciplineId: item.id,
                        rating
                      })
                    }}
                    marks={slideMarks}
                    min={0}
                    max={5} />
                )} />
            </Table>
          </div>
        </Col>
        <Col span={12}>
          <div className="columnPanel">
            <HighchartsReact
              highcharts={Highcharts}
              options={getChartOptions()} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

Disciplines.propTypes = {
  groupId: PropTypes.string,
}
