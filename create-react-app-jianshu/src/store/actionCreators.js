import actions from './actionTypes'


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

export default {
  getInputChangeAction,
  getAddItemAction,
  getDeleteListAction
}