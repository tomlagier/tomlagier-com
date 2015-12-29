import React, { Component, propTypes } from 'react'
import PortfolioModal from '../PortfolioModal'
import store from '../../store';
import $ from 'jquery';

import './PortfolioModals.scss'

export default class PortfolioModals extends Component {
  maybeRemoveModal(evt) {

    if(!$(evt.target).closest('.portfolio-modal.active').length) {
      store.dispatch({
        type: 'TOGGLE_MODAL',
        modal: -1
      })
    }
  }

  render() {
    const portfolioModals = []
    this.props.items.forEach( (portfolioModal, ind) => {
      portfolioModals.push(
        <PortfolioModal key={'portfolio-modal-' + ind} data={portfolioModal} index={ind} activeModal={this.props.activeModal}/>
      )
    })

    let modalIsActive = this.props.activeModal === -1 ? '' : 'active-modal'

    return (
      <div className={'portfolio-modals ' + modalIsActive} onClick={this.maybeRemoveModal}>
        {portfolioModals}
      </div>
    )
  }
}

PortfolioModals.propTypes = {
  items: React.PropTypes.array.isRequired,
  activeModal: React.PropTypes.number.isRequired
}
