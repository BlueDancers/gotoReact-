import { actionTypes } from "./index";
import { fromJS } from "immutable";
// 组件内部的数据年比较小 一般情况下 组件内部的state不拆分出去
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
});

export default (state = defaultState, action) => {
  // immutable对象的set方法,会结合之前的immutable对象的值
  // 和设置的值,返回一个全新的对象代码量减少很多
  switch (action.type) {
    case actionTypes.OPEN_FOCUS:
      return state.set("focused", true);
    case actionTypes.CLOSE_FOCUS:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};

// if (action.type === actionTypes.OPEN_FOCUS) {
//   // immutable对象的set方法,会结合之前的immutable对象的值
//   // 和设置的值,返回一个全新的对象代码量减少很多
//   return state.set("focused", true);
// }
// if (action.type === actionTypes.CLOSE_FOCUS) {
//   return state.set("focused", false);
// }
// if (action.type === actionTypes.CHANGE_LIST) {
//   return state.set("list", action.data);
// }
// return state;
