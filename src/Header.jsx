import React, { useContext } from 'react'
import { Layout } from 'antd'

import { AppContext } from './Store'

export default function Header() {
  const { state } = useContext(AppContext)

  return (
    <Layout.Header className="Header">
      <img src="user-wizar-logo.png" style={{ height: 32 }} />
    </Layout.Header>
  )
}
