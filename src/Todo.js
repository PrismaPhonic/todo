import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="TodoContainer">
        <li className="Todo">{this.props.value}</li>
        <br />
        <button onClick={this.props.handleDeleteTodo}>Remove</button>
      </div>
    );
  }
}

export default Todo;
