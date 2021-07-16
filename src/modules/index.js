import { combineReducers } from 'redux'
import counter from './counter'
import profile from './profile'
import staffGalleryImages from './staffGalleryImages'

export default combineReducers({
  counter,
  profile,
  staffGalleryImages
})
