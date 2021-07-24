export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';

const initialState = {
  showNotification: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        showNotification: action.value
      };

    case GET_NOTIFICATION:
      console.log(state);
      return state;

    default:
      return state
  }
}

export const setNotification = (value) => {
  return dispatch => {
    dispatch({
      type: SET_NOTIFICATION,
      value
    })
  }
}

export const getNotification = () => {
  return dispatch => {
    dispatch({
      type: GET_NOTIFICATION,
    })
  }
}
