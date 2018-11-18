import { actionTypes } from "./index";
import { fromJS } from "immutable";
// 组件内部的数据年比较小 一般情况下 组件内部的state不拆分出去
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA:
      console.log(action.data);
      return state.merge({
        topicList: action.data.get("topicList"),
        articleList: action.data.get("articleList"),
        recommendList: action.data.get("recommendList")
      });
    default:
      return state;
  }
};
