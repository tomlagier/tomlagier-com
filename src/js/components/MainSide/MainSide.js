import React, { Component, propTypes } from 'react'
import Link from '../Link'
import store from '../../store'
import { pushPath } from 'redux-simple-router'

import './MainSide.scss'

export default class MainSide extends Component {
  togglePortfolio() {
    store.dispatch(pushPath('/portfolio'))
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
        <p>I'm a Javascript developer with a passion for next-generation web technologies. I love all elements of interaction design and spend my free time working on projects that leverage WebGL, Canvas, SVG, and video to make the web come&nbsp;alive.</p>
        <a className="portfolio-link" onClick={this.togglePortfolio}>Take a look at my portfolio!</a>
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
