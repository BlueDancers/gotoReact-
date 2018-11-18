import actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";
function _gethomeData(data) {
  return {
    type: actionTypes.GET_HOME_DATA,
    data: fromJS(data)
  };
}

function gethomeData() {
  return dispatch => {
    axios.get("/home").then(res => {
      console.log(res);
      if (res.data.success) {
        dispatch(_gethomeData(res.data.data));
      } else {
        console.log("数据获取失败");
      }
    });
  };
}
export default {
  gethomeData
};
