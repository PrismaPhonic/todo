import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    let addMe = { ...todo, id: uuid() };
    this.setState(st => ({
      todos: [...st.todos, addMe]
    }));
  }

  removeTodo(id) {
    this.state.todos.splice(id, 1);
    this.setState(st => ({ todos: st.todos }));
  }

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map(todo => (
          <React.Fragment>
            <Todo
              key={todo.id}
              value={todo.value}
              handleDeleteTodo={evt => this.removeTodo(todo.id)}
            />
            <br />
          </React.Fragment>
        ))}

        <TodoForm handleNewTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
