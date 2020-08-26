import './styles/index.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'

import firebaseConfig from './services/firebaseConfig'
import Store from './Store'
import App from './App'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Store>
      <SuspenseWithPerf 
        fallback="Loading user..." 
        traceId="loading-user">
          <App />
      </SuspenseWithPerf>
    </Store>
  </FirebaseAppProvider>,
  document.getElementById('root')
)
