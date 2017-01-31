
const nameList = [
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
];

 const reducer = (state= {nameList}, action)=> {
   var newState = Object.assign({}, state);
   switch(action.type){

     case "ADD_NAME":
        newState.nameList = [...newState.nameList,
          {
            id:Date.now(),
            name:action.user.name,
            surname: action.user.surname
          }
          ];
        break;

        case "DELETE_NAME":
           newState.nameList = newState.nameList.filter((user)=>{
               return ((user.name!=action.user.name) || (user.surname!=action.user.surname));
           });
           break;
   }
  return newState;
}


export default reducer;
