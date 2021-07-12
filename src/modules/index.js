import { combineReducers } from 'redux'
import counter from './counter'
import profile from './profile'

export default combineReducers({
  counter,
  profile
})
