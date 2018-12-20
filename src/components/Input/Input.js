import React, { Component } from 'react';

class Input extends Component {
  state = {value: ''}

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.addTodo(this.state.value);
      this.setState({
        value: ''
      });
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return(
      <input
        placeholder='add task...'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onKeyPress={this.handleKeyPress.bind(this)}
       />
    );
  }
}

export default Input;
