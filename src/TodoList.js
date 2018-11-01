import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodo';
import { Container } from 'reactstrap';

import uuid from 'uuid/v4';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.saveTodoEdits = this.saveTodoEdits.bind(this);
  }

  addTodo(todo) {
    let addMe = { ...todo, id: uuid() };
    this.setState(st => ({
      todos: [...st.todos, addMe]
    }));
  }

  removeTodo(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState(st => ({ todos }));
  }

  makeTodoEditable(id) {
    for (let todo of this.state.todos) {
      if (todo.id === id) {
        todo.editable = true;
      }
    }
    this.setState(st => ({ todos: st.todos }));
  }

  saveTodoEdits(editedTodo) {
    let editMe = { ...editedTodo };

    let editedTodos = this.state.todos.map(todo => {
      if (editedTodo.dataId === todo.id) {
        todo.value = editedTodo.value;
        todo.editable = false;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState(st => ({
      todos: st.todos
    }));
  }

  render() {
    return (
      <Container className="TodoList">
        {this.state.todos.map(todo => (
          <React.Fragment>
            {!todo.editable ? (
              <Todo
                key={todo.id}
                value={todo.value}
                editable={false}
                enableEditTodo={evt => this.makeTodoEditable(todo.id)}
                handleDeleteTodo={evt => this.removeTodo(todo.id)}
              />
            ) : (
              <EditTodoForm
                dataId={todo.id}
                currentTodoValue={todo.value}
                handleEditTodo={this.saveTodoEdits}
              />
            )}
            <br />
          </React.Fragment>
        ))}

        <TodoForm handleNewTodo={this.addTodo} />
      </Container>
    );
  }
}

export default TodoList;
