const initialState = {
    post: {
      username: '',
      postId: 0,
      userId: 0
    }
  }

  const GET_POST = 'GET_POST';
  const UPDATE_POST = 'UPDATE_POST';
  const LOGOUT_POST = 'LOGOUT_POST';

  export function getpost(postObj) {
    return {
      type: GET_POST,
      payload: postObj
    }
  }
  
  export function logout() {
    return {
      type: LOGOUT_POST,
      payload: {}
    }
  }
  
  export function updatepost(post) {
    return {
      type: UPDATE_POST,
      payload: post
    }
  }
  
  
  export default function reducer2(state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case LOGOUT_POST:
        return initialState;
      case GET_POST:
        return { ...state, post: payload };
      case UPDATE_POST:
        return { ...state, postname: payload.post.postname, postId: payload.post.postId };
      default:
        return state;
    }
  }