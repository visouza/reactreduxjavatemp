import {EventEmitter} from 'events';
import dispatcher from './../dispatcher/Dispatcher'
class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id:1,
        name: "vishal1",
        surname: "dsouza"
      },
      {
        id:2,
        name: "jasmine",
        surname: "fernandes"
      }
    ]
  }

  createTodo(name,surname){
    const id = Date.now();

    this.todos.push(
      {
        id:id,
        name:name,
        surname:surname
      }
    );
    console.log("in create todo");
    console.log(this.todos);
    //this.todos.push(id,name,surname);
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleChange(action) {
    console.log("action: ",action);
    switch(action.type) {
      case "change":
          this.createTodo(action.name,action.surname);
          break;
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleChange.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;
