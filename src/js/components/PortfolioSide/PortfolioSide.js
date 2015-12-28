import React, { Component, propTypes } from 'react'
import PortfolioArea from '../PortfolioArea'
import store from '../../store'

import './PortfolioSide.scss'

function portfolioFlip(evt) {
  store.dispatch({
    type: 'TOGGLE_PORTFOLIO'
  })
}

export default class PortfolioSide extends Component {
  render() {
    return (
      <div className="portfolio-side">
        <div className="back-button icon-android-arrow-back" onClick={portfolioFlip}></div>
        <div className="upper-text">
          <h3>I am a JavaScript and front-end developer with full-stack experience that loves to work with web graphics.</h3>
          <p>Creating beautiful interactive experiences is my forté - whether it be by crafting simple animations with CSS, SVG, and canvas, involving the viewer using WebRTC and HTML5 video, or creating full-blown immersive 3D with WebGL and ThreeJS.</p>
        </div>
        <PortfolioArea items={this.props.content} />
      </div>
    )
  }
}

PortfolioSide.propTypes = {
  content: React.PropTypes.array.isRequired
}
