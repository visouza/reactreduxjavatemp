import dispatcher from './../dispatcher/Dispatcher'
import store from './../store/StoreRedux';

export function createToDO(name,surname) {
  /*dispatcher.dispatch(
    {
      type:"change",
      name:name,
      surname:surname
    }
  );*/
  console.log("calling dispatch");
  store.dispatch(
  {
    type:"ADD_NAME",
    user:{
      name:name,
      surname:surname
    }
  }
  )
}

export function deleteToDO(name,surname) {
  store.dispatch(
  {
    type:"DELETE_NAME",
    user:{
      name:name,
      surname:surname
    }
  }
  )
}
