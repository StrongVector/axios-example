import React, { Component } from 'react';
import { dispatchUpdateCustomer } from '../../../../services/workspaceService';
import './ToggleEdit.css';

export default class ToggleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val,
      editting: false
    }

    this.handleChange = this.handleChange.bind( this );
    this.toggle = this.toggle.bind( this );
    this.save = this.save.bind( this );
  }

  handleChange(event) {
    this.setState({ val: event.target.value });
  }

  toggle() {
    this.setState({ editting: !this.state.editting, val: this.props.readOnlyVal })
  }

  save() {
    dispatchUpdateCustomer( this.props.id, { [this.props.property]: this.state.val } );
    this.setState({ editting: !this.state.editting });
  }

  render() {
    const { description, multi } = this.props;
    const { editting, val } = this.state;

    return (
      <div className="CustomerToggleEdit__container">
        {
          multi
          ?
            <textarea className="CustomerToggleEdit__textarea" disabled={ !editting } value={ val } onChange={ this.handleChange } />
          :
            <input className="CustomerToggleEdit__input" disabled={ !editting } placeholder={ description } value={ val } onChange={ this.handleChange } />  
        }
        {
          editting
          ?
            multi
            ?
              <button className="CustomerToggleEdit__editBtn" onClick={ this.toggle } style={ { position: 'relative', top: '-20px' } }> X </button>
            :
              <button className="CustomerToggleEdit__editBtn" onClick={ this.toggle }> X </button>
          :
            multi
            ?
              <button className="CustomerToggleEdit__editBtn" onClick={ this.toggle } style={ { position: 'relative', top: '-20px' } }>Edit</button>
            :
              <button className="CustomerToggleEdit__editBtn" onClick={ this.toggle }>Edit</button>
        }
        {
          editting
          ?
            multi
            ?
              <button className="CustomerToggleEdit__saveBtn" onClick={ this.save } style={ { position: 'relative', top: '-20px' } }>Save</button>
            :
              <button className="CustomerToggleEdit__saveBtn" onClick={ this.save }>Save</button>
          :
            null
        }
      </div>
    )
  }
}