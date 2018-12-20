import React, { Component } from 'react';
import Input from '../Input/Input';
import Todo from '../Todo/Todo';
import './Todolist.css';

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.checkOff = this.checkOff.bind(this);
  }

  addTodo(task) {
    let state = Object.assign({}, this.state);

    this.setState({
      todos: [
        ...state.todos,
        {task: task, done: false}
      ]
    });
  }

  checkOff(index) {
    let state = Object.assign({}, this.state);
    let todos = state.todos;
    todos[index].done = !todos[index].done;
    this.setState({todos: todos});
  }

  render() {
    return(
      <div className='todolist'>
        <h1>Todolist</h1>
        <Input addTodo={this.addTodo} />
        <ul>
        { this.state.todos.map((todo, index) => {
          return <Todo todo={todo}
            checkOff={this.checkOff}
            index={index} />
        }) }
        </ul>
      </div>
    );
  }
}

export default Todolist;
