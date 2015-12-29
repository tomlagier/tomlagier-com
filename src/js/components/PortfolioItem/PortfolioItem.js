import React, { Component, propTypes } from 'react'
import store from '../../store'

import './PortfolioItem.scss'

export default class PortfolioItem extends Component {
  render() {
    let toggleModal = (evt) => {
      const index = parseInt(evt.currentTarget.getAttribute('data-index'), 10)

      store.dispatch({
        type: 'TOGGLE_MODAL',
        modal: index
      })
    }

    let animDelay = 500 + (this.props.index) * 150

    let style = {
      backgroundImage: `url(${this.props.data.thumbnail})`,
      transition: `opacity 0.3s ${animDelay}ms ease-out`,
      animationDelay: `${animDelay}ms`
    }

    return (
      <div className={'portfolio-item-outer ' + this.props.data.className}>
        <div className="portfolio-item" style={style} onClick={toggleModal} data-index={this.props.index}>
          <h4>{this.props.data.heading}</h4>
        </div>
      </div>
    )
  }
}

PortfolioItem.propTypes = {
  data: React.PropTypes.shape({
    img: React.PropTypes.string,
    thumbnail: React.PropTypes.string,
    heading: React.PropTypes.string,
    description: React.PropTypes.string,
    link: React.PropTypes.string,
    linkText: React.PropTypes.string,
    className: React.PropTypes.strng
  }).isRequired,
  index: React.PropTypes.number.isRequired
}
