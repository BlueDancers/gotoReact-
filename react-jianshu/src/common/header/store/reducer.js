import { actionTypes } from "./index";
import { fromJS } from 'immutable'
// 组件内部的数据年比较小 一般情况下 组件内部的state不拆分出去
const defaultState =fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.OPEN_FOCUS) {
    // immutable对象的set方法,会结合之前的immutable对象的值
    // 和设置的值,返回一个全新的对象代码量减少很多
    return state.set('focused',true)
  }
  if (action.type === actionTypes.CLOSE_FOCUS) {
    return state.set('focused',false)
  }
  return state;
};
