import React, { Component, propTypes } from 'react'

import './PortfolioModal.scss'

export default class PortfolioModal extends Component {
  render() {
    return (
      <div className="portfolio-modal">
        <div className="closeButton"></div>
        <div class="image-wrapper">
          <img src={this.props.data.img} />
        </div>
        <h3>{this.props.data.heading}</h3>
        <p>{this.props.data.description}</p>
        <a href={this.props.data.link}>{this.props.data.linkText}</a>
      </div>
    )
  }
}
