import React from 'react'
import { Tabs, Layout } from 'antd'

import './App.css'
import Competency from './Competency'
import SelfEvaluation from './SelfEvaluation'

const { Header, Content, Footer } = Layout
const { TabPane } = Tabs

export default function App() {
  return (
    <Layout className="App">
      <Header />
      <Content className="Content">
        <Tabs className="Tabs" defaultActiveKey="1">
          <TabPane tab="Travis Competency map" key="1">
            <Competency />
          </TabPane>
          <TabPane tab="Bacon's UXD self evaluation" key="2">
            <SelfEvaluation />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Tab Pane 3
          </TabPane>
        </Tabs>
      </Content>
      <Footer/>
    </Layout>
  )
}
