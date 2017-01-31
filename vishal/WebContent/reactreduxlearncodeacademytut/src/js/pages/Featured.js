import React from "react";
import Todo from "./../components/Todo";
import TodoStore from "./../store/TodoStore";
import store from "./../store/StoreRedux"
import * as Actions from './../actions/Actions';
import {connect} from "react-redux";

@connect((store) =>{
  console.log("calling from connect",store);
  return {
    nameList: store.nameList
  };
})
export default class Featured extends React.Component {

 constructor(){
    super();
    /*this.state = {
      todos: TodoStore.getAll()
    }*/

    this.state = {
    //  todos: store.getState().nameList,
      todos: null,
      unregister:null
    }
    console.log("state",this.state);
  }

  componentDidUpdate(){
    console.log("componentDidUpdate",this.props);
  }
componentWillUpdate(){
  console.log("componentWillUpdate",this.props);
}

  componentWillMount() {
    console.log("component will mount");
    console.log("featured",this.props);
    /*this.setState({
      todos:this.props.nameList
    });
    */
    /*TodoStore.on("change", () => {
        this.setState({
          todos:TodoStore.getAll()
        });
      }
    );*/

    /*
    console.log("IAMhere: ",store.getState());
    let unregister = store.subscribe(()=>{
      console.log("subscribe",store.getState());
      const data = store.getState().nameList;
        this.setState({
          todos:data
        });
      }
    );
    this.setState({unregister :unregister});
    */
  }
componentWillUnmount() {
  //this.state.unregister();
}
  submitInput() {
        //this.todoChange.bind(ReactDOM.findDOMNode(this.refs.myInput));
  }

  render() {
    console.log("infeatured");
    console.log(this.props);
    console.log("todos",this.state.todos);
  //  const todoComponent = this.state.todos.map((todo)=>{return <Todo key={todo.id} {...todo} />});
    const{nameList} = this.props;
    //const todoComponent = this.state.todos.map((todo)=>{return <Todo key={todo.id} {...todo} />});
    const todoComponent = nameList.map((todo)=>{return <Todo key={todo.id} {...todo} />});
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
};
