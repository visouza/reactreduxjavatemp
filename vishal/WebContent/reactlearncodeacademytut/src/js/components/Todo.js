import React from "react";

export default class Todo extends React.Component {
  render() {
    console.log("in todo");
    console.log(this.props);
    return (
      <div>

      <p>name: {this.props.name}</p>
      <p>surname: {this.props.surname}</p>
      </div>
    );
  }
}
