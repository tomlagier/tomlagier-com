import React, { Component, propTypes } from 'react'
import MainSide from '../MainSide'
import PortfolioSide from '../PortfolioSide'
import PortfolioModals from '../PortfolioModals'
import store from '../../store'
import $ from 'jquery'

import './MainContent.scss'

let currentState
function scrollTop() {
  let prevState = currentState
  currentState = store.getState()

  if (prevState && (prevState.portfolioVisible !== currentState.portfolioVisible)) {
    $('html,body').animate({scrollTop: 0})
  }
}

store.subscribe(scrollTop)

export default class MainContent extends Component {

  componentDidMount() {
    setTimeout(() => {
      store.dispatch({
        type: 'ACTIVATE_CONTENT'
      })
    }.bind(this), 500)
  }

  render() {

    let flipperState = this.props.route.path.indexOf('/portfolio') !== -1 ? 'portfolio-side-visible' : 'main-side-visible'

    let portfolioWasShown = (this.props.currentState.portfolioTriggered && this.props.currentState.contentActivated)  ? ' portfolio-triggered' : ''

    let contentState = this.props.currentState.contentActivated ? 'visible' : ''

    console.log(this.props.currentState)

    return (
      <div className="site">
        <div className={'content ' + contentState + portfolioWasShown}>
          <div className={'flipcard-wrapper ' + flipperState}>
            <MainSide links={this.props.content.links}/>
            <PortfolioSide content={this.props.content.portfolioItems}/>
          </div>
        </div>
        <PortfolioModals items={this.props.content.portfolioItems} activeModal={this.props.currentState.currentModal} />
      </div>
    )
  }
}

MainContent.propTypes = {
  content: React.PropTypes.shape({
    links: React.PropTypes.array,
    portfolioItems: React.PropTypes.array
  }).isRequired,
  currentState: React.PropTypes.shape({
    contentActivated: React.PropTypes.bool,
    portfolioVisible: React.PropTypes.bool,
    portfolioTriggered: React.PropTypes.bool,
    currentModal: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  }).isRequired,
  route: React.PropTypes.object.isRequired
}
