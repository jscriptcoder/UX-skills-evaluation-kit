import React, { useState, useRef } from 'react'
import { Steps, Layout, Carousel } from 'antd'

import './App.css'
import Competency from './Competency'
import SelfEvaluation from './SelfEvaluation'

const { Header, Content, Footer } = Layout
const { Step } = Steps

export default function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const slides = useRef(null)

  return (
    <Layout className="App">
      <Header className="Header">
        <img src="/user-wizar-logo.png" style={{ height: 32 }} />
      </Header>
      <Content className="Content">
        <Steps
          type="navigation"
          current={currentStep}
          onChange={step => {
            setCurrentStep(step)
            slides.current.goTo(step)
          }}>
            <Step title="Travis Competency map" />
            <Step title="Bacon's UXD self evaluation" />
            <Step title="Step 3" />
        </Steps>
        <Carousel dots={false} ref={slides}>
          <div className="Slide">
            <Competency />
          </div>
          <div className="Slide">
            <SelfEvaluation />
          </div>
          
          <div className="Slide">Step 3</div>
        </Carousel>
      </Content>
      <Footer/>
    </Layout>
  )
}
