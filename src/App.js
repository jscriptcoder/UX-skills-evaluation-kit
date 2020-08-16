import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import { AppContext } from './Store'
import Header from './Header'
import Content from './Content'

export default function App(props) {
  const { user } = props
  const { dispatch } = useContext(AppContext)

  // useEffect(() => {
  //   if (user) {
  //     dispatch('userLoaded', user)
  //   }
  // }, [user])

  return (
    <Layout className="App">
      <Header />
      <Content />
    </Layout>
  )
}

App.propTypes = {
  user: PropTypes.object
}
