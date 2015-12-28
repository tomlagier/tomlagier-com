import React, { Component, propTypes } from 'react'
import MainContent from '../MainContent'
import { connect } from 'react-redux'
import content from '../../data/content.json'

import './App.scss'

class App extends Component {
  render() {
    const {currentState} = this.props
    return (
      <div className="container">
        <MainContent content={content} currentState={currentState} />
      </div>
    )
  }
}

function select(state) {
  return {
    currentState: state
  }
}

App.propTypes = {
  currentState: React.PropTypes.shape({
    contentActivated: React.PropTypes.bool,
    portfolioVisible: React.PropTypes.bool,
    portfolioTriggered: React.PropTypes.bool,
    currentModal: React.PropTypes.number
  }).isRequired
}

export default connect(select)(App)
