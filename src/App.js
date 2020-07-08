import React from 'react'
import { Layout } from 'antd'

import Store from './Store'
import Header from './Header'
import Content from './Content'

export default function App() {
  return (
    <Store>
      <Layout className="App">
        <Header />
        <Content />
      </Layout>
    </Store>
  )
}
