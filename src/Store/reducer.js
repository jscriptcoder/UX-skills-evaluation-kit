export default function reducer(state, action) {
  const { type } = action
  switch(type) {

    case 'userLoaded':
      const { 
        name, 
        email, 

        // They might be undefined in the first use
        research = state.research, 
        design = state.design, 
        content = state.content, 
        product = state.product

      } = action.user

      return { 
        ...state, 
        user: {
          ...state.user,
          name,
          email,
        },
        research,
        design,
        content,
        product
      }

    case 'changeStep':
      const { step } = action
      return { ...state, currentStep: step }
      
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
