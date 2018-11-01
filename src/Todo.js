import React, { Component } from 'react';
import './Todo.css';
import { ListGroup, ListGroupItem, Button, Card, CardBody } from 'reactstrap';

class Todo extends Component {
  render() {
    return (
      <Card className="TodoContainer">
        <CardBody className="Todo">{this.props.value}</CardBody>
        <br />
        <Button className="m-2" onClick={this.props.handleDeleteTodo}>
          Remove
        </Button>
        <Button className="m-2" onClick={this.props.enableEditTodo}>
          Edit
        </Button>
      </Card>
    );
  }
}

export default Todo;
