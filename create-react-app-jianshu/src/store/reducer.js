import defaultState from "./state";
import actions from './actionTypes'
// reducer 可以接受state 但是不能修改state
export default (state = defaultState, action) => {

  if (action.type === actions.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === actions.UPDATE_LIST_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = "";
    return newState;
  }
  
  if (action.type === actions.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState
  }

  if (action.type === actions.INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data
    return newState
  }
  console.log(state, action);

  return state;
};
