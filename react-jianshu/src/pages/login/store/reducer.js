import { fromJS } from 'immutable'
import { actionTypes } from './index'

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_TRUE:
      return state.set('login',true)
    case actionTypes.CHANGE_LOGIN_FALSE:
      return state.set('login',false)
    default:
      return state
  }
}
