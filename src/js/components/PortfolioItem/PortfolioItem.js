import React, { Component, propTypes } from 'react'

import './PortfolioItem.scss'

export default class PortfolioItem extends Component {
  render() {
    let style = {
      backgroundImage: this.props.data.thumbnail
    }

    return (
      <div className="portfolio-item" style={style}>
        <h3>{this.props.data.heading}</h3>
      </div>
    )
  }
}
