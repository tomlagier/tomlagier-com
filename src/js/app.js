import 'babel-core/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'

import App from 'components/App'

import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

const history = createHistory()
syncReduxAndRouter(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="*" component={App} />
    </Router>
  </Provider>, document.getElementById('app'))
