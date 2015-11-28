import React, { Component, propTypes } from 'react'
import PortfolioItem from '../PortfolioItem'

import './PortfolioArea.scss'

export default class PortfolioArea extends Component {
  render() {
    const portfolioItems = []
    this.props.items.forEach( (portfolioItem, ind) => {
      portfolioItems.push(
        <PortfolioItem key={'portfolio-item' + ind} data={portfolioItem}/>
      )
    })

    return (
      <div className="portfolio-area">
        {portfolioItems}
      </div>
    )
  }
}

PortfolioArea.propTypes = {
  items: React.PropTypes.array
}
