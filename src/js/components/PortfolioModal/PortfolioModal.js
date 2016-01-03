import React, { Component, propTypes } from 'react'
import store from '../../store'
import {pushPath} from 'redux-simple-router'

import './PortfolioModal.scss'

export default class PortfolioModal extends Component {

  toggleModal() {
    store.dispatch(pushPath('/portfolio'))
  }

  render() {
    let className = `${this.props.data.className} ${(this.props.activeModal === this.props.slug) ? 'active' : ''}`;

    let style = {
      backgroundImage: `url(${this.props.data.img})`
    }

    let ctas = []
    this.props.data.ctas.forEach((cta, ind) => {
      ctas.push(<a href={cta.link} target="_blank" key={ind}>{cta.linkText}</a>)
    })

    return (
      <div className={'portfolio-modal ' + className} data-slug={this.props.slug} >
        <div className="portfolio-modal-inner">
          <div className="close-button icon-android-close" onClick={this.toggleModal}></div>
          <div className="image-wrapper">
            <div className="portfolio-image" style={style}></div>
          </div>
          <div className="text-wrapper">
            <h3>{this.props.data.heading}</h3>
            <div className="description" dangerouslySetInnerHTML={{__html:this.props.data.description}} />
            <div className="ctas">{ctas}</div>
          </div>
        </div>
      </div>
    )
  }
}

PortfolioModal.propTypes = {
  data: React.PropTypes.shape({
    img: React.PropTypes.string,
    className: React.PropTypes.string,
    thumbnail: React.PropTypes.string,
    heading: React.PropTypes.string,
    description: React.PropTypes.string,
    ctas: React.PropTypes.array
  }).isRequired,
  slug: React.PropTypes.string.isRequired,
  activeModal: React.PropTypes.number.isRequired,
}
