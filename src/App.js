import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import {
  useFirestoreDocData,
  useFirestore
} from 'reactfire'

import { AppContext } from './Store'
import Header from './Header'
import Main from './Main'

export default function App() {
  const { state, dispatch } = useContext(AppContext)

  const userRef = useFirestore()
    .collection('users')
    .doc(state.user.id)
  
  const user = useFirestoreDocData(userRef)

  useEffect(() => {
    if (user) {
      dispatch({ type: 'userLoaded', user })
    }
  }, [user])

  return (
    <Layout className="App">
      <Header />
      <Main />
    </Layout>
  )
}

App.propTypes = {
  user: PropTypes.object
}
