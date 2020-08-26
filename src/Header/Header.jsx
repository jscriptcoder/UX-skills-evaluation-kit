import './Header.less'

import React, { useContext } from 'react'
import { Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { AppContext } from '../Store'

export default function Header() {
  const { state } = useContext(AppContext)
  const { name } = state.user

  return (
    <Layout.Header className="Header">
      <div className="Header__logo">
        <img src="user-wizar-logo.png" style={{ height: 32 }} />
      </div>
      <div className="Header__user">
        <UserOutlined /> {name}
      </div>
    </Layout.Header>
  )
}
