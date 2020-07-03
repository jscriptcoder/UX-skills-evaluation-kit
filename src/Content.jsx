import React, { useContext, useRef } from 'react'
import { Steps, Layout, Carousel } from 'antd'

import './Content.less'
import { AppContext } from './Store'
import Disciplines from './Disciplines'
import appContent from './app-content'

const { Step } = Steps

export default function Content() {
  const slides = useRef(null)
  const { state, dispatch } = useContext(AppContext)
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
          {appContent.groups.map(group => <Step key={group.id} title={group.title} />)}
      </Steps>
      <Carousel dots={false} ref={slides}>
        {appContent.groups.map(group => (
          <Disciplines 
            key={group.id}
            groupId={group.id} />
        ))}
      </Carousel>
    </Layout.Content>
  )
}
