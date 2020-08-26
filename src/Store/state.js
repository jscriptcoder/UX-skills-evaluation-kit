import { getQueryParam } from '../services/utils'

const state = {
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

export default state
