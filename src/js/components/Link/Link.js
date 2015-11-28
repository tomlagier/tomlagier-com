import React, { Component, propTypes } from 'react'

import './Link.scss'

function portfolioFlip() {
  console.log('flipped!')
}

export default class Link extends Component {
  render() {
    let onClick = this.props.data.text === 'Portfolio' ?  portfolioFlip : ''
    return (
      <a className={'link ' + this.props.data.className} href={this.props.data.link} onClick={onClick}>{this.props.data.text}</a>
    )
  }
}

Link.propTypes = {
  data: React.PropTypes.shape({
    className: React.PropTypes.string,
    link: React.PropTypes.string,
    text: React.PropTypes.string
  })
}
