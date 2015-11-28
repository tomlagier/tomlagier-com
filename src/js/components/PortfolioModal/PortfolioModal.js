import React, { Component, propTypes } from 'react'

import './PortfolioModal.scss'

export default class PortfolioModal extends Component {
  render() {
    return (
      <div className="portfolio-modal"f>
        <div className="closeButton"></div>
        <div className="image-wrapper">
          <img src={this.props.data.img} />
        </div>
        <h3>{this.props.data.heading}</h3>
        <p>{this.props.data.description}</p>
        <a href={this.props.data.link}>{this.props.data.linkText}</a>
      </div>
    )
  }
}

PortfolioModal.propTypes = {
  data: React.PropTypes.shape({
    img: React.PropTypes.string,
    thumbnail: React.PropTypes.string,
    heading: React.PropTypes.string,
    description: React.PropTypes.string,
    link: React.PropTypes.string,
    linkText: React.PropTypes.string
  })
}
