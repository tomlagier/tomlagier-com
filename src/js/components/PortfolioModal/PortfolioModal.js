import React, { Component, propTypes } from 'react'

import './PortfolioModal.scss'

export default class PortfolioModal extends Component {
  render() {
    let className = (this.props.activeModal === this.props.index) ? 'active' : ''

    return (
      <div className={'portfolio-modal ' + className} data-index={this.props.index}>
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
  }).isRequired,
  index: React.PropTypes.number.isRequired,
  activeModal: React.PropTypes.number.isRequired
}
