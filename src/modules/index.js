import { combineReducers } from 'redux'
import notification from './notificationStore'
import profile from './profile'
import staffGalleryImages from './staffGalleryImages'
import businessCurrentUser from './businessCurrentUser'

export default combineReducers({
  notification,
  profile,
  staffGalleryImages,
  businessCurrentUser
})
