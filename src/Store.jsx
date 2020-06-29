import React, { createContext, useReducer } from 'react'

const appInitialState = {
  currentStep: 0,
  disciplines: {
    // Research
    competitiveAnalysis: 0,
    designEvaluation: 0,
    userModelling: 0,
    personas: 0,

    // Design
    highLevelRepresentation: 0,
    detailedDesign: 0,
    interactivePrototyping: 0,

    // Content
    technicalWriting: 0,
    informationArchitecture: 0,
    contentStrategy: 0,

    // Product
    strategy: 0,
    scenarios: 0,
    projectManagement: 0,
  }
}

function appReducer(state, action) {
  const { type } = action

  switch(type) {
    case 'changeStep':
      return { ...state, currentStep: action.step }
    case 'changeRating':
      return { 
        ...state, 
        disciplines: { 
          [action.discipline]: action.rating
        }
      }
  }
}

export const AppContext = createContext(appInitialState)

export default function Store(props) {
  const { children } = props
  const [ state, dispatch ] = useReducer(appReducer, appInitialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}
