import React, { Component, propTypes } from 'react'
import store from '../../store'

import './PortfolioItem.scss'

export default class PortfolioItem extends Component {
  render() {
    let toggleModal = (evt) => {
      const index = parseInt(evt.currentTarget.getAttribute('data-index'))

      store.dispatch({
        type: 'TOGGLE_MODAL',
        modal: index
      })
    }

    let style = {
      backgroundImage: this.props.data.thumbnail
    }

    return (
      <div className="portfolio-item" style={style} onClick={toggleModal} data-index={this.props.index}>
        <h3>{this.props.data.heading}</h3>
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
    linkText: React.PropTypes.string
  }).isRequired,
  index: React.PropTypes.number.isRequired
}
