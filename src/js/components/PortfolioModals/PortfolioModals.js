import React, { Component, propTypes } from 'react'
import PortfolioModal from '../PortfolioModal'
import store from '../../store'
import $ from 'jquery'
import {pushPath} from 'redux-simple-router'

import './PortfolioModals.scss'

export default class PortfolioModals extends Component {
  maybeRemoveModal(evt) {

    if (!$(evt.target).closest('.portfolio-modal.active').length) {
      store.dispatch(pushPath('/portfolio'))
    }
  }

  render() {
    const portfolioModals = []
    this.props.items.forEach( (portfolioModal, ind) => {
      portfolioModals.push(
        <PortfolioModal key={'portfolio-modal-' + ind} data={portfolioModal} slug={portfolioModal.slug} activeModal={this.props.activeModal}/>
      )
    })

    let modalIsActive = this.props.activeModal === -1 ? '' : 'active-modal'

    if ((this.props.activeModal !== -1) && ($(window).width() < 980)) {
      $('body').addClass('modal-active')
    } else {
      $('body').removeClass('modal-active')
    }

    return (
      <div className={'portfolio-modals ' + modalIsActive} onClick={this.maybeRemoveModal}>
        {portfolioModals}
      </div>
    )
  }
}

PortfolioModals.propTypes = {
  items: React.PropTypes.array.isRequired,
  activeModal: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}
