import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch(action.type)
  {
    case ADD:
      return count+1;
    case MINUS :
      return count -1;
    default :
      return count;
  }
};//changes my data, if countModifier return helllo, then the data becomes hello. it's kind of reducer
const countStore = createStore(countModifier);
const onChange = () => {
 number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

console.log(countStore);

const handleAdd = () => {
  countStore.dispatch({type : "ADD"})
}

const handleMinus = () => {
  countStore.dispatch({type : "MINUS"})
}



console.log(countStore.getState());
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
/*countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "MINUS"});*/

