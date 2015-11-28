import {createStore} from 'redux'
import initialState from '../data/state'

function updateState(state = initialState, action) {
  let localState = Object.assign({}, state)

  console.log(state, action)

  switch (action.type) {
    case 'TOGGLE_PORTFOLIO':
      localState.portfolioVisible = !state.portfolioVisible
      return localState
    case 'TOGGLE_MODAL':
      if (state.modalVisible) {
        localState.modalVisible = null
      } else {
        localState.modalVisible = action.modal
      }
      return localState
    case 'ACTIVATE_CONTENT':
      localState.portfolioVisible = !state.portfolioVisible
      return localState
    default:
      return localState
  }
}

let store = createStore(updateState)

export default store
