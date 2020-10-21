const initialState = {
    user: {
      username: '',
      userId: 0
    }
  }
  
  const GET_USER = 'GET_USER';
  const UPDATE_USER = 'UPDATE_USER';
  const LOGOUT_USER = 'LOGOUT_USER';
  
  export function getUser(userObj) {
    return {
      type: GET_USER,
      payload: userObj
    }
  }
  
  export function logout() {
    return {
      type: LOGOUT_USER,
      payload: {}
    }
  }
  
  export function updateUser(user) {
    return {
      type: UPDATE_USER,
      payload: user
    }
  }
  
  
  export default function reducer(state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case LOGOUT_USER:
        return initialState;
      case GET_USER:
        return { ...state, user: payload };
      case UPDATE_USER:
        return { ...state, username: payload.user.username, userId: payload.user.userId };
      default:
        return state;
    }
  }