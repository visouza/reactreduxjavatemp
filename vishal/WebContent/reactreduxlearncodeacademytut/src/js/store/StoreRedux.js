import {createStore} from 'redux';
import reducer from './../reducer/Namereducer';

const store = createStore(reducer);

store.subscribe(()=>{
  console.log("Store currrent state: ",store.getState());
})

export default  store;
