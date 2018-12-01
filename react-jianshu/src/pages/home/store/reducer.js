import { actionTypes } from './index'
import { fromJS } from 'immutable'
// 组件内部的数据年比较小 一般情况下 组件内部的state不拆分出去
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  listPage: 0,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.data.get('topicList'),
    articleList: action.data.get('articleList'),
    recommendList: action.data.get('recommendList')
  })
}
const getMoreList = (state,action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.data),
    listPage: action.listPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA:
      return changeHomeData(state,action)
    case actionTypes.GET_MORE_LIST:
      return getMoreList(state,action)
    case actionTypes.TOGGLE_SHOWSCROLL:
      console.log(action.data)
      return state.set('showScroll', action.data)
    default:
      return state
  }
}
