import React, { Component, propTypes } from 'react'
import MainSide from '../MainSide'
import PortfolioSide from '../PortfolioSide'
import PortfolioArea from '../PortfolioArea'
import PortfolioModals from '../PortfolioModals'

import './MainContent.scss'

export default class MainContent extends Component {
  render() {
    return (
      <div className="content">
        <div className="flipcard-wrapper">
          <MainSide links={this.props.content.links}/>
          <PortfolioSide />
        </div>
        <PortfolioArea items={this.props.content.portfolioItems}/>
        <PortfolioModals items={this.props.content.portfolioItems} />
      </div>
    )
  }
}

MainContent.propTypes = {
  content: React.PropTypes.shape({
    links: React.PropTypes.array,
    portfolioItems: React.PropTypes.array
  })
}
