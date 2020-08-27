import './Main.less'

import React, { useContext, useRef } from 'react'
import { Steps, Layout, Carousel } from 'antd'
import { useFirestore } from 'reactfire'

import { AppContext } from '../Store'
import StartPage from '../StartPage/StartPage'
import Disciplines from '../Disciplines'
import ResultsPage from '../ResultsPage/ResultsPage'
import { groups } from '../services/content'

const { Step } = Steps

export default function Main() {
  const slides = useRef(null)
  const { state, dispatch } = useContext(AppContext)
  const { currentStep } = state

  const userRef = useFirestore()
    .collection('users')
    .doc(state.user.id)

  return (
    <Layout.Content className="Main">
      <Steps
        type="navigation"
        current={currentStep}
        onChange={step => {
          dispatch({ type: 'changeStep', step }) // changes app state

          // userRef.set({ something: 'new' }, { merge: true }) // stores (all) disciplines in firebase

          slides.current.goTo(step) // moves to next slide
        }}>
          <Step key="starting" title="Start" />
          {groups.map((group, i) => (
            <Step 
              key={group.id} 
              title={group.title} />
          ))}
          <Step key="results" title="Results" />
      </Steps>
      <Carousel dots={false} ref={slides}>
        <StartPage />
        {groups.map(group => (
          <Disciplines 
            key={group.id}
            groupId={group.id} />
        ))}
        <ResultsPage />
      </Carousel>
    </Layout.Content>
  )
}
