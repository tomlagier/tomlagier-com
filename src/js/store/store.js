import {createStore} from 'redux'
import initialState from '../data/state'

function updateState(state = initialState, action) {
  let localState = Object.assign({}, state)

  console.log(state, action)

  switch (action.type) {
    case 'TOGGLE_PORTFOLIO':
      localState.portfolioVisible = !state.portfolioVisible
      localState.portfolioTriggered = true
      return localState
    case 'TOGGLE_MODAL':
      if (localState.currentModal >= 0) {
        localState.currentModal = -1
      } else {
        localState.currentModal = action.modal
      }
      return localState
    case 'ACTIVATE_CONTENT':
      localState.contentActivated = !state.contentActivated
      return localState
    default:
      return localState
  }
}

let store = createStore(updateState)

export default store
