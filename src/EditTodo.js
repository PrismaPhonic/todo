import React, { Component } from 'react';

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
      <div className="EditToDoContainer">
        <li className="Todo">
          <input
            id="value"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </li>
        <br />
        <button onClick={() => this.props.handleEditTodo(this.state)}>Save</button>
      </div>
    );
  }
}

export default EditTodoForm;