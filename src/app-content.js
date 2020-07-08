const appContent = {
  groups: [{
    id: 'research',
    title: 'Research',
    disciplines: [{
      id: 'qualitativeResearch',
      title: 'Qualitative Research',
      description: '',
    }, {
      id: 'quantitativeResearch',
      title: 'Quantitative Research',
      description: '',
    }, {
      id: 'businessNeeds',
      title: 'Business Needs Evaluation',
      description: 'Stakeholders interviews, market reports, identify business needs',
    }, {
      id: 'designEvaluation',
      title: 'Design Evaluation',
      description: 'Studio critique, usability testing, directional testing, usage analysis, evaluative techniques'
    }, {
      id: 'userModeling',
      title: 'User Modeling',
      description: 'Personas, user profiles, mental models, user archetypes'
    }]
  }, {
    id: 'design',
    title: 'Design',
    disciplines: [{ 
      id: 'prototyping',
      title: 'Prototyping',
      description: '',
    }, { 
      id: 'visualDesign',
      title: 'Visual Design',
      description: '',
    }, {
      id: 'interationDesign',
      title: 'Interaction Design',
      description: '',
    }, {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Workshop organization and facilitation, design thinking methods'
    }, {
      id: 'usbilityEngineering',
      title: 'Usability Engineering',
      description: 'Usability testing, heuristic evaluations, task analysis',
    }]
  }, {
    id: 'content',
    title: 'Content',
    disciplines: [{
      id: 'technicalWriting',
      title: 'Technical writing',
      description: '',
    }, {
      id: 'informationArchitecture',
      title: 'Information architecture',
      description: '',
    }, {
      id: 'contentStrategy',
      title: 'Content strategy',
      description: '',
    }, {
      id: 'localization',
      title: 'Localization',
      description: 'Translation, localization, transcreation',
    }]
  }, {
    id: 'product',
    title: 'Product',
    disciplines: [{
      id: 'strategy',
      title: 'Strategy',
      description: '',
    }, {
      id: 'scenarios',
      title: 'Scenarios',
      description: 'Context scenarios, use cases, user stories, defining solutions or requirements',
    }, {
      id: 'projectManagement',
      title: 'Project Management',
      description: 'Managing concurrent projects, meeting deadlines, ...',
    }, {
      id: 'stakeHolderManagement',
      title: 'Stakeholder Management',
      description: '',
    }]
  }],
  ratings: [
    'I don’t understand this competence or it is non-existent',
    'Novice: I have a basic understanding of this competence',
    'Advanced beginner: I can demonstrate this competence under supervision',
    'Competent: I can demonstrate this competence independently',
    'Proficient: I can supervise other people in this competence',
    'Expert: I develop new ways of applying this competence',
  ]
}

export default appContent
