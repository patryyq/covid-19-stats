import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById("root")
);

serviceWorkerRegistration.register()
reportWebVitals()