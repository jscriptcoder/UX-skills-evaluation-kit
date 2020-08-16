import React, { createContext, useReducer, useMemo } from 'react'

import { getQueryParam } from './utils'

const appInitialState = {
  user: {
    id: getQueryParam('user'),
    name: '',
    email: '',
  },
  currentStep: 0,
  research: {
    qualitativeResearch: 0,
    quantitativeResearch: 0,
    businessNeeds: 0,
    designEvaluation: 0,
    userModeling: 0,
  },
  design: {
    prototyping: 0,
    visualDesign: 0,
    interationDesign: 0,
    collaboration: 0,
    usbilityEngineering: 0,
  },
  content: {
    technicalWriting: 0,
    informationArchitecture: 0,
    contentStrategy: 0,
    localization: 0,
  },
  product: {
    strategy: 0,
    scenarios: 0,
    projectManagement: 0,
    stakeHolderManagement: 0,
  }
}

function appReducer(state, action) {
  const { type } = action
  switch(type) {

    case 'userLoaded':
      const { name, email } = action.user
      return { 
        ...state, 
        user: {
          ...state.user,
          name,
          email,
        }
      }

    case 'changeStep':
      const { step } = action
      return { ...state, currentStep: action.step }
      
    case 'changeRating':
      const { groupId, disciplineId, rating } = action
      return { 
        ...state, 
        [groupId]: {
          ...state[groupId],
          [disciplineId]: rating
        }
      }
    default: 
      return state
  }
}

export const AppContext = createContext(appInitialState)

export default function Store(props) {
  const { children } = props
  const [ state, dispatch ] = useReducer(appReducer, appInitialState)

  const contextValue = useMemo(() => ({ state, dispatch }), [state])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
