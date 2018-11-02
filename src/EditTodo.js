import React, { Component } from 'react';
import { Input, Button, Card, CardBody } from 'reactstrap';
import './TodoForm.css';

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.currentTodoValue,
      dataId: this.props.dataId
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <Card className="EditToDoContainer">
        <CardBody className="Todo">
          <Input
            id="value"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </CardBody>
        <br />
        <Button
          className="m-2"
          color="primary"
          onClick={() => this.props.handleEditTodo(this.state)}
        >
          Save
        </Button>
      </Card>
    );
  }
}

export default EditTodoForm;
