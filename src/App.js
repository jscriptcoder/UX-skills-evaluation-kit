import React, { useRef } from 'react'
import { Layout } from 'antd'

import Store from './Store'
import Header from './Header'
import Content from './Content'

export default function App() {
  const slides = useRef(null)

  return (
    <Store>
      <Layout className="App">
        <Header />
        <Content />
      </Layout>
    </Store>
  )
}
