import React, { Component, propTypes } from 'react'
import PortfolioModal from '../PortfolioModal'

import './PortfolioModals.scss'

export default class PortfolioModals extends Component {
  render() {
    const portfolioModals = []
    for (var portfolioModal in this.props.items) {
      portfolioModals.push(
        <PortfolioModal data={portfolioModal}/>
      )
    }
    return (
      <div className="portfolio-modals">
        {portfolioModals}
      </div>
    )
  }
}
