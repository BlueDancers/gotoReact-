import actions from './actionTypes'
import axios from 'axios'


function getInputChangeAction (value) {
  return {
    type: actions.CHANGE_INPUT_VALUE,
    value
  }
}
function getAddItemAction () {
  return {
    type: actions.UPDATE_LIST_VALUE
  }
}

function getDeleteListAction (index) {
  return {
    type: actions.DELETE_TODO_ITEM,
    index
  }
}

function initListAction (data) {
  return {
    type: actions.INIT_LIST_ACTION,
    data
  }
}

function getTodoList() {
  return (dispatch) => { // 这个逻辑有点混乱.....
    axios.get('/list')
    .then(res => {
      console.log(res);
      let data = res.data
      let action = initListAction(data)
      dispatch(action)
    })
    .catch(res => {
      console.log(res);
    })
  }
}

export default {
  getInputChangeAction,
  getAddItemAction,
  getDeleteListAction,
  initListAction,
  getTodoList
}