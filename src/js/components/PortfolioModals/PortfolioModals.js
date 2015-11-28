import React, { Component, propTypes } from 'react'
import PortfolioModal from '../PortfolioModal'

import './PortfolioModals.scss'

export default class PortfolioModals extends Component {
  render() {
    const portfolioModals = []
    this.props.items.forEach( (portfolioModal, ind) => {
      portfolioModals.push(
        <PortfolioModal key={'portfolio-modal-' + ind} data={portfolioModal}/>
      )
    })

    return (
      <div className="portfolio-modals">
        {portfolioModals}
      </div>
    )
  }
}

PortfolioModals.propTypes = {
  items: React.PropTypes.array
}
