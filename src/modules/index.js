import { combineReducers } from 'redux'
import profile from './profile'
import staffGalleryImages from './staffGalleryImages'
import businessCurrentUser from './businessCurrentUser'

export default combineReducers({
  profile,
  staffGalleryImages,
  businessCurrentUser
})
