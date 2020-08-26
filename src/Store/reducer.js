export default function reducer(state, action) {
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
