import React, { Component, propTypes } from 'react'
import MainSide from '../MainSide'
import PortfolioSide from '../PortfolioSide'
import PortfolioArea from '../PortfolioArea'
import PortfolioModals from '../PortfolioModals'
import store from '../../store'

import './MainContent.scss'

export default class MainContent extends Component {

  componentDidMount() {
    setTimeout(() => {
      store.dispatch({
        type: 'ACTIVATE_CONTENT'
      })
    }.bind(this), 500)
  }

  render() {

    let flipperState = this.props.currentState.portfolioVisible ? 'portfolio-side-visible' : 'main-side-visible'

    let contentState = this.props.currentState.contentActivated ? 'visible' : ''

    return (
      <div className={'content ' + contentState}>
        <div className={'flipcard-wrapper ' + flipperState}>
          <MainSide links={this.props.content.links}/>
          <PortfolioSide />
        </div>
        <PortfolioArea items={this.props.content.portfolioItems}/>
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
    currentModal: React.PropTypes.number
  }).isRequired
}
