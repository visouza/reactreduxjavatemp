import React from "react";
import * as Actions from './../actions/Actions';

export default class Todo extends React.Component {
  render() {
    console.log("in todo");
    console.log(this.props);
    return (
      <div>
      <button onClick = {(e) => this.todoDelete(e)}>delete</button>
      <p>name: {this.props.name}</p>
      <p>surname: {this.props.surname}</p>
      </div>
    );
  }

  todoDelete(e) {
       //const value = e.target.value;
       const name = this.props.name;
       const surname = this.props.surname;
       //TodoStore.createTodo(name,surname);
       Actions.deleteToDO(name,surname);
  }
}
