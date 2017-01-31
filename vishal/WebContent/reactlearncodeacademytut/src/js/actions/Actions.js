import dispatcher from './../dispatcher/Dispatcher'

export function createToDO(name,surname) {
  dispatcher.dispatch(
    {
      type:"change",
      name:name,
      surname:surname
    }
  );
}
