import React, { useContext, useRef } from 'react'
import { Steps, Layout, Carousel } from 'antd'
import { HomeTwoTone } from '@ant-design/icons'

import './Content.less'
import { AppContext } from './Store'
import StartPage from './StartPage'
import Disciplines from './Disciplines'
import ResultsPage from './ResultsPage'
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
          <Step key="starting" title="Start" />
          {appContent
            .groups
              .map((group, i) => (
                <Step 
                  key={group.id} 
                  title={group.title} />
              ))
          }
          <Step key="results" title="Results" />
      </Steps>
      <Carousel dots={false} ref={slides}>
        <StartPage />
        {appContent.groups.map(group => (
          <Disciplines 
            key={group.id}
            groupId={group.id} />
        ))}
        <ResultsPage />
      </Carousel>
    </Layout.Content>
  )
}
