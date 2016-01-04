import React, { Component, propTypes } from 'react'
import MainContent from '../MainContent'
import { connect } from 'react-redux'
import content from '../../data/content.json'

import './App.scss'

class App extends Component {
  render() {
    const {currentState, route} = this.props
    return (
      <div className="container">
        <MainContent content={content} currentState={currentState} route={route} />
      </div>
    )
  }
}

function select(state) {
  return {
    currentState: state.appState,
    route: state.routing
  }
}

App.propTypes = {
  currentState: React.PropTypes.shape({
    contentActivated: React.PropTypes.bool,
    portfolioVisible: React.PropTypes.bool,
    portfolioTriggered: React.PropTypes.bool,
    currentModal: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  }).isRequired,
  route: React.PropTypes.object.isRequired
}

export default connect(select)(App)
