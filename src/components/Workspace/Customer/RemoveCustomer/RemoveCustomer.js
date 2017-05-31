import React, { Component } from "react";
import './RemoveCustomer.css';

import { dispatchDeleteCustomer } from '../../../../services/workspaceService';

export default class RemoveCustomer extends Component {
  constructor() {
    super();
    this.state = {
      showConfirm: false
    };

    this.toggle = this.toggle.bind( this );
    this.remove = this.remove.bind( this );
  }

  toggle() {
    this.setState({ showConfirm: !this.state.showConfirm });
  }

  remove() {
    dispatchDeleteCustomer( this.props.id );
  }

  render() {
    return (
      <div id="RemoveCustomer__container">
        <button className="RemoveCustomer__removeBtn" onClick={ this.toggle } disabled={ this.state.showConfirm }> Remove </button>
        {
          this.state.showConfirm
          ?
            <div id="RemoveCustomer__confirmationContainer">
              <button id="RemoveCustomer__cancelBtn" onClick={ this.toggle }> Cancel </button>
              <button className="RemoveCustomer__removeBtn" onClick={ this.remove }> Confirm </button>
            </div>
          :
            null
        }
      </div>
    )
  }
}