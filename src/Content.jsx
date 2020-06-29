import React, { useContext, useRef } from 'react'
import { Steps, Layout, Carousel } from 'antd'

import './Content.less'
import { AppContext } from './Store'
import Disciplines from './Disciplines'
import appContent from './app-content'

const { Step } = Steps

export default function Content() {
  const slides = useRef(null)
  const [state, dispatch] = useContext(AppContext)
  const { currentStep } = state

  return (
    <Layout.Content className="Content">
      <Steps
        type="navigation"
        current={currentStep}
        onChange={step => {
          dispatch({ type: 'changeStep', step })
          slides.current.goTo(step)
        }}>
          {appContent.groups.map((group, i) => <Step key={i} title={group.title} />)}
      </Steps>
      <Carousel dots={false} ref={slides}>
        {appContent.groups.map(({ disciplines }, i) => (
          <Disciplines 
            key={i}
            list={disciplines.map(discipline => ({
              ...discipline,
              rating: state.disciplines[discipline.id]
            }))} />
        ))}
      </Carousel>
    </Layout.Content>
  )
}
