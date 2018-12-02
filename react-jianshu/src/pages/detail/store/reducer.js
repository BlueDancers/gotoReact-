import { actionType } from './index'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  title: '',
  content: ``,
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_TEXT_DETAIL:
    console.log(action.data);
      return state.merge({
        title: action.data.get('title'),
        content: action.data.get('content')
      })
    default:
      return state
  }
}