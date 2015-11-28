import React, { Component, propTypes } from 'react'
import MainContent from '../MainContent'
import content from '../../data/content.json'

import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <MainContent content={content} />
      </div>
    )
  }
}
