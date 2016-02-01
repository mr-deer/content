import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      text: 'Hello',
      isEditable: false
    }
  },

  updateText(e) {
    this.setState({
      text: this.refs.text.value,
      isEditable: false
    })
  },

  cancel() {
    this.setState({
      isEditable: false
    });
  },

  enterEditMode() {
    this.setState({
      isEditable: true
    });
  },

  componentDidUpdate: function(){
    console.log('Here');
    if (this.state.isEditable) {
      this.refs.text.getDOMNode().focus();
    }
  },

  render() {
    return this.state.isEditable ?
      <div>
        <input type="text" ref="text" style={{
          border: 'none',
          ouline: 'none',
          fontFamily: 'Times',
          fontSize: '16px',
          padding: 0
        }} defaultValue={ this.state.text } autofocus='true' />
        <button onClick={ this.updateText }>Edit</button>
        <button onClick={ this.cancel }>Cancel</button>
      </div> :
      <p onClick={ this.enterEditMode }>{ this.state.text }</p>;
  }
});
