import React, { Component } from 'react';
import './Todo.css';
import { ListGroup, ListGroupItem, Button, Card, CardBody } from 'reactstrap';

class Todo extends Component {
  state = {
    completed: false
  };

  toggleCompleted() {
    this.setState(st => ({ completed: !st.completed }));
  }

  render() {
    return (
      <Card
        className="TodoContainer my-2"
        color={!this.state.completed ? 'light' : 'success'}
      >
        <CardBody className="Todo">
          {!this.state.completed ? this.props.value : <s>{this.props.value}</s>}
        </CardBody>
        <Button
          className="m-2"
          color="danger"
          onClick={this.props.handleDeleteTodo}
        >
          Remove
        </Button>
        <Button
          className="m-2"
          color="info"
          onClick={this.props.enableEditTodo}
        >
          Edit
        </Button>
        <Button
          className="m-2"
          color="primary"
          onClick={this.toggleCompleted.bind(this)}
        >
          {!this.state.completed ? 'Complete' : 'Incomplete'}
        </Button>
      </Card>
    );
  }
}

export default Todo;
