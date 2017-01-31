import React from "react";
import Todo from "./../components/Todo";
import TodoStore from "./../store/TodoStore";
import * as Actions from './../actions/Actions';
export default class Featured extends React.Component {

 constructor(){
    super();
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on("change", () => {
        this.setState({
          todos:TodoStore.getAll()
        });
      }
    );
  }

  submitInput() {
        //this.todoChange.bind(ReactDOM.findDOMNode(this.refs.myInput));
  }


  render() {
    console.log("infeatured");
    console.log(this.props);

  //  const todoComponent = this.state.todos.map((todo)=>{return <Todo key={todo.id} {...todo} />});
    const todoComponent = this.state.todos.map((todo)=>{return <Todo key={todo.id} {...todo} />});
    return (
      <div>
      <h2>Featured</h2>

      <ul>{todoComponent}</ul>
      name:<input ref = "name"></input><br></br>
      surname:<input ref = "surname"></input>
      <button onClick = {(e) => this.todoChange(e)}>submit</button>
      <button onClick = {this.todoChange.bind(this)}>submit</button>

      </div>
    );
  }

  todoChange(e) {
       //const value = e.target.value;
       const name = this.refs.name.value;
       const surname = this.refs.surname.value;
       //TodoStore.createTodo(name,surname);
       Actions.createToDO(name,surname);
  }
}
