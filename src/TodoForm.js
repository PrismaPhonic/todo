import React, { Component } from 'react';
import './TodoForm.css';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleNewTodo(this.state);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <Form className="TodoForm" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="value">Your todo:</Label>
          <Input
            id="value"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
            className="m-2"
          />

          <Button color="primary">Create Todo</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default TodoForm;
