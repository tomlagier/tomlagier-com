import {createStore, combineReducers} from 'redux'
import initialState from '../data/state'
import { routeReducer, UPDATE_PATH } from 'redux-simple-router'

function appState(state = initialState, action) {
  let localState = Object.assign({}, state)

  switch (action.type) {
    case UPDATE_PATH:
      if (action.payload.path.indexOf('/portfolio') !== -1 ) {
        localState.portfolioTriggered = true
      }

      let modalRegex = new RegExp('\/portfolio\/(.*)')

      const matches = modalRegex.exec(action.payload.path)

      let slug
      if (matches) {
        slug = matches[1]
      }

      if (slug) {
        localState.currentModal = slug
      } else {
        localState.currentModal = -1
      }
      return localState

    case 'ACTIVATE_CONTENT':
      localState.contentActivated = !state.contentActivated
      return localState
    default:
      return localState
  }
}

const reducer = combineReducers({appState,
  routing: routeReducer})
let store = createStore(reducer)

export default store
