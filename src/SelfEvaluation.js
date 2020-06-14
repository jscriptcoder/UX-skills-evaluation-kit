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

export default function SelfEvaluation(props) {
  const [disciplines, setDisciplines] = useState([
    { key: 'ur', name: 'User Research', rating: 0, description: 'Ethnographic studies, Contextual inquiry, User Interviews and in-context research' },
    { key: 'ca', name: 'Competitive Analysis', rating: 0, description: 'Stakeholders interviews, market reports, identify business needs' },
    { key: 'de', name: 'Design Evaluation', rating: 0, description: 'Studio critique, usability testing, directional testing, usage analysis, evaluative techniques' },
    { key: 'um', name: 'User Modelling', rating: 0, description: 'Personas, user profiles, mental models, user archetypes' },
    { key: 'pum', name: 'Personas, user profiles, mental models, user archetypes', rating: 0, description: 'Concept elicitation, participatory design, exploratory metaphors' },
    { key: 'dm', name: 'Domain modelling', rating: 0, description: 'Task analysis, workflow diagram, card sorts' },
    { key: 'hlr', name: 'High Level Representation', rating: 0, description: 'Wireframes, site maps, storyboards, low-fi designs' },
    { key: 'dd', name: 'Detailed Design', rating: 0, description: 'Mockups, interfaces, high-fi/low-level representations of solutions' },
    { key: 'ip', name: 'Interactive Prototyping', rating: 0, description: 'Axure and other tools of showing and testing high fidelity functionalities' },
    { key: 'tc', name: 'Technical communication', rating: 0, description: 'design spec, briefs, help material, pattern libraries & other written content' },
    { key: 'sc', name: 'Scenarios', rating: 0, description: 'Context scenarios, use cases, user stories, defining solutions or requirements' },
    { key: 'pm', name: 'Project Management', rating: 0, description: 'Managing concurrent projects, meeting deadlines, ...' },
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
              key="name" 
              width={400} />
            <Column render={item => (
                <Popover placement="right" content={item.description}>
                  <InfoCircleTwoTone style={{ fontSize: 18 }} twoToneColor="#2f0084" />
                </Popover>
              )} />
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
              key="rating"
              render={item => (
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
