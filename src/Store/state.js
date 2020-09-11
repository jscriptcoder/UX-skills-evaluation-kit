import { getQueryParam } from '../services/utils'
import { groups } from '../services/content'

const state = {
  user: {
    id: getQueryParam('user') || 'anonymous',
    name: '',
    email: '',
  },
  currentStep: 0,
}

// Augment state with disciplines
groups.forEach(group => {
  state[group.id] = group.disciplines
    .reduce((acc, discipline) => {
      acc[discipline.id] = 0
      return acc
    }, {})
})

export default state
