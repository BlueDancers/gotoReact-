import { combineReducers } from 'redux'
import {reducer as headerReducer} from '../common/header/store';

// combineReducers就可以对数据进行拆分管理
export default combineReducers ({ 
  header: headerReducer
})