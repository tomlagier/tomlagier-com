import React, { Component, propTypes } from 'react'
import Link from '../Link'
import store from '../../store'

import './MainSide.scss'

export default class MainSide extends Component {
  togglePortfolio() {
    store.dispatch({
      type: 'TOGGLE_PORTFOLIO'
    })
  }

  render() {
    const links = []

    this.props.links.forEach( (link, ind) => {
      links.push(<Link key={'link-' + ind} data={link} />)
    })

    return (
      <div className="main-side">
        <div className="profile-image-wrapper">
          <img src="assets/images/profile-picture.jpg" />
        </div>
        <h1>Tom Lagier</h1>
        <h2>Javascript & Front-End Developer</h2>
        <p>I'm a Javascript developer with a passion for next-generation web technologies. I love all elements of interaction design and spend my free time working on projects that leverage WebGL, Canvas, SVG, and video to make the web come alive.</p>
        <p>I'm always looking for exciting opportunities to build beautiful, interactive pages and applications. <a className="portfolio-link" onClick={this.togglePortfolio}>Take a look at my portfolio!</a></p>
        <div className="links">
          {links}
        </div>
      </div>
    )
  }
}

MainSide.propTypes = {
  links: React.PropTypes.array.isRequired
}
