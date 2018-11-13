/* eslint-disable require-yield */
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actionType from "./actionTypes";
import actions from "./actionCreators";
import axios from "axios";
function* getInitList() {
  try {
    const res = yield axios.get("/list");
    const action = actions.initListAction(res.data);
    yield put(action);
  } catch (error) {
    console.log('list.json 请求失败');
  }
}

// 迭代器
function* mySaga() {
  yield takeEvery(actionType.GET_INIT_LIST, getInitList);
}

export default mySaga;
