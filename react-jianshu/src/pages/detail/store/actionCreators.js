import { actionType } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

function _getDetail(data) {
  return {
    type: actionType.GET_TEXT_DETAIL,
    data: fromJS(data)
  }
}

function getDetail (id) {
  return dispatch => {
    //携带动态参数
    // axios.get(`/textdetail?id=${id}`)
    axios.get(`/textdetail`)
    .then(res => {
      console.log(res.data);
      dispatch(_getDetail(res.data))
    })
    .catch(res => {
      console.log(res);
    })
  }
}


export default {
  getDetail
}