import { combineReducers } from 'redux'
import counter from './counter'
import profile from './profile'
import staffGalleryImages from './staffGalleryImages'
import businessCurrentUser from './businessCurrentUser'

export default combineReducers({
  counter,
  profile,
  staffGalleryImages,
  businessCurrentUser
})
