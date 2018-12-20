import React, { Component } from 'react';

class Todo extends Component {
  render() {
    let styleDone = {textDecoration: 'line-through'};
    let style = this.props.todo.done ? styleDone : {};

    return(
      <li
        style={style}
        onClick={()=>{this.props.checkOff(this.props.index)}}
      >{this.props.todo.task}</li>
    );
  }
}

export default Todo;
