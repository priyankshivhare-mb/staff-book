import staffProfiles from '../fixtures/staffProfiles.json';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';

const initialState = staffProfiles;

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return state

        default:
            return state
    }
}

export const getUserProfiles = () => {
    return dispatch => {
        dispatch({
            type: GET_USER_PROFILE
        })
    }
}
