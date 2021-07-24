import currentUser from '../fixtures/businessCurrentUser.json';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';

const initialState = currentUser;

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return state

        default:
            return state
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        dispatch({
            type: GET_CURRENT_USER
        })
    }
}
