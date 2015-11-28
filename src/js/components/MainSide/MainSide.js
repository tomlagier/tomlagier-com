import React, { Component, propTypes } from 'react'
import Link from '../Link';

import './MainSide.scss'

export default class MainSide extends Component {
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
        <h2>Front-End Developer</h2>
        <p>I am a driven and self-motivated web developer, working at intersection of art and computer science. I love all aspects of design and am happiest when I am making beautiful web-based applications. I have a hunger to use new tools and technology to produce engaging interactive experiences that impress and delight.</p>
        <div className="links">
          {links}
        </div>
      </div>
    )
  }
}

MainSide.propTypes = {
  links: React.PropTypes.array
}
