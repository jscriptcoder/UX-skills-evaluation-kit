import React, { createContext, useReducer, useMemo } from 'react'

import initialState from './state'
import reducer from './reducer'

export const AppContext = createContext(initialState)

export default function Store(props) {
  const { children } = props
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => ({ state, dispatch }), [state])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
