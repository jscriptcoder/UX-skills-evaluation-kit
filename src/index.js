import React from 'react'
import ReactDOM from 'react-dom'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'

import './index.less'
import firebaseConfig from './firebaseConfig'
import Store from './Store'
import GetUser from './GetUser'
import App from './App'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Store>
      <SuspenseWithPerf 
        fallback="Loading user..." 
        traceId="loading-user">
          <GetUser render={user => (
            <App user={user} />
          )} />
      </SuspenseWithPerf>
    </Store>
  </FirebaseAppProvider>,
  document.getElementById('root')
)
