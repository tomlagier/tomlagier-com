import React, { Component, propTypes } from 'react'

import './Link.scss'

export default class Link extends Component {
  render() {
    return (
      <a className={'link' + this.props.data.className} href={this.props.data.link}>{this.props.data.text}</a>
    )
  }
}
