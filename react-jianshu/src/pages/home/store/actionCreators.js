import actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
function _gethomeData(data) {
  return {
    type: actionTypes.GET_HOME_DATA,
    data: fromJS(data)
  }
}

function _getMoreList(data, listPage) {
  console.log(listPage)

  return {
    type: actionTypes.GET_MORE_LIST,
    data: fromJS(data),
    listPage: fromJS(listPage)
  }
}

function gethomeData() {
  return dispatch => {
    axios.get('/home').then(res => {
      if (res.data.success) {
        dispatch(_gethomeData(res.data.data))
      } else {
        console.log('数据获取失败')
      }
    })
  }
}

function getMoreList(listPage) {
  return dispatch => {
    axios.get('/morelist').then(res => {
      console.log(res.data.articleList)
      if (res.data.success) {
        dispatch(_getMoreList(res.data.articleList, listPage + 1))
      } else {
        console.log('数据获取失败')
      }
    })
  }
}
function toggleTopShow (data) {
  return {
    type: actionTypes.TOGGLE_SHOWSCROLL,
    data
  }
}
export default {
  gethomeData,
  getMoreList,
  toggleTopShow
}
