import staffGalleryImages from '../fixtures/staffPhotoGallery.json';
export const GET_STAFF_GALLERY = 'GET_STAFF_GALLERY';

const initialState = staffGalleryImages;

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFF_GALLERY:
            return state;

        default:
            return state;
    }
}

export const getStaffGallery = () => {
    return dispatch => {
        dispatch({
            type: GET_STAFF_GALLERY
        })
    }
}
