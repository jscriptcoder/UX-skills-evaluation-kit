import './styles/index.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'

import { config as firebaseConfig } from './services/firebase'
import Store from './Store'
import App from './App'
import Loading from './Loading'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Store>
      <SuspenseWithPerf 
        fallback={<Loading />}
        traceId="loading-user">
          <App />
      </SuspenseWithPerf>
    </Store>
  </FirebaseAppProvider>,
  document.getElementById('root')
)
