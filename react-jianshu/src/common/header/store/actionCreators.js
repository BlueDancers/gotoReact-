import { actionTypes } from "./index";
import axios from "axios";
import { fromJS } from 'immutable';


const _changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
})  
function closeFocus() {
  return {
    type: actionTypes.CLOSE_FOCUS
  };
}

function openFocus() {
  return {
    type: actionTypes.OPEN_FOCUS
  };
}

function mouseEnter () {
  return {
    type: actionTypes.MOUSE_ENTER
  }
}
function mouseLeave () {
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}
function changePage(page) {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}

function getList() {
  return dispatch => {
    axios
      .get("/list")
      .then(res => {
        let data = res.data;
        if (data.success) {
          let action = _changeList(data.data)
          dispatch(action)
        }
      })
      .catch(() => {
        console.log("获取list失败");
      });
  };
}




export default {
  closeFocus,
  openFocus,
  getList,
  mouseEnter,
  mouseLeave,
  changePage
};
