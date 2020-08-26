const linkElizabethBacon = 'http://elizabethbacon.com/the-ux-sundial-model-iterated-now-including-a-0/the-ux-sundial-model-iterated-now-including-an-ixd-sundial-2/'
const linkDavidTravis = 'https://www.userfocus.co.uk/pdf/competency-map.pdf'
const linkIndustry = 'https://www.userfocus.co.uk/articles/ux_job_title_generator.html'

export const startPage = `
<p>
  Welcome to your private self-assessment area. This tool has been inspired by 
  <a href="${linkElizabethBacon}" target="_blank">Elizabeth Bacon’s UX Sundial Model</a> and 
  <a href="${linkDavidTravis}" target="_blank">David Travis’ Competency Map</a>. Before 
  you jump into the core of this activity, take a moment to reflect on your 
  career path, on your motivations to transition to UX and on what you have 
  to offer to your future employer.
</p>

<h3>Why make  a self assessment of your skills?</h3>

<p>
  Having experienced a career transition myself and after working with a few 
  very talented persons who engaged in a transition to a UX career, I came to 
  the conclusion that the biggest difficulty one may encounter on this journey 
  is to evaluate and highlight transferable skills and knowledge. UX comes in 
  many flavors and opens many career paths and titles as 
  <a href="${linkIndustry}" target="_blank">the industry requires</a>. 
  To put it short, if you have the proper motivation and will to do what it takes 
  to make the shift to UX, <u>if you are willing to build on your foundations</u> and are 
  open to learn, there is a place for you in the UX scene. Each company, each team, 
  has different requirements and can benefit from different skills. Find out where 
  your strengths are and where you can make the largest impact - start with defining 
  your profile.
</p>

<h3>More than a job title</h3>

<p>
  While the unicorn job description remains an utter nonsense, UX-lers are by definition 
  touching on more than one discipline. This assessment is all about helping you discover 
  your profile, which might be more eclectic than you first thought, and not about having 
  to check ALL the skills for each step. In fact, there is not one profile for the UX 
  Researcher and a UX Designer is most likely to develop research skills, while the UX 
  Writer shares skills with the UX Product Owner. 
</p>

<h3>How does this work?</h3>

<p>
  This assessment tool is articulated around 4 disciplines: Research, Design, Content and 
  Product. Each discipline displays a series of skills - these are not strictly related to 
  the discipline under which they appear but are most likely to be shared among a few of 
  them. Ultimately, you will be able to visualize your skillset and the skills you may want 
  to build upon. Once you are done with your assessment, we will go through your results 
  together and review your skillset and the opportunities it can open for a UX career.
</p>

In the meantime feel free to get in touch if you have any question and drop a message at 
<a href="mailto:info@user-wizard.com">info@user-wizard.com</a>
`

export const groups = [{
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
    title: 'Product Strategy',
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
  }, {
    id: 'leadership',
    title: 'Leadership',
    description: '',
  }]
}]

export const ratings = [
  'I don’t understand this competence or it is non-existent',
  'Novice: I have a basic understanding of this competence',
  'Advanced beginner: I can demonstrate this competence under supervision',
  'Competent: I can demonstrate this competence independently',
  'Proficient: I can supervise other people in this competence',
  'Expert: I develop new ways of applying this competence',
]
