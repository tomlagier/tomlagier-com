import React, { Component, propTypes } from 'react'
import PortfolioItem from '../PortfolioItem'

import './PortfolioArea.scss'

export default class PortfolioArea extends Component {
  render() {
    const portfolioItems = []
    for(var portfolioItem in this.props.items) {
      portfolioItems.push(
        <PortfolioItem data={portfolioItem}/>
      )
    }
    return (
      <div className="portfolio-area">
        {portfolioItems}
      </div>
    )
  }
}
