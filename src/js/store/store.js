import {createStore, combineReducers} from 'redux'
import defaultState from '../data/state'
import { routeReducer, UPDATE_PATH } from 'redux-simple-router'

let initialState = Object.assign({}, defaultState)

function checkPortfolioState(path, state) {
  if (path.indexOf('/portfolio') !== -1 ) {
    state.portfolioTriggered = true
  }

  return state
}

function checkPortfolioModalState(path, state) {
  let modalRegex = new RegExp('\/portfolio\/([^/]*)(\/)?')

  const matches = modalRegex.exec(path)

  let slug
  if (matches) {
    slug = matches[1]
  }

  if (slug) {
    state.currentModal = slug
  } else {
    state.currentModal = -1
  }
  return state
}

initialState = checkPortfolioState(window.location.pathname, initialState)
initialState = checkPortfolioModalState(window.location.pathname, initialState)

function appState(state = initialState, action) {
  let localState = Object.assign({}, state)

  switch (action.type) {
    case UPDATE_PATH:
      localState = checkPortfolioState(action.payload.path, localState)
      localState = checkPortfolioModalState(action.payload.path, localState)
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
