const initialState = {
    post: {
      username: '',
      postId: 0,
      userId: 0
    }
  }

  const GET_POST = 'GET_POST';
  const UPDATE_POST = 'UPDATE_POST';
  const DELETE_POST = 'DELETE_POST';

  export function getpost(postObj) {
    return {
      type: GET_POST,
      payload: postObj
    }
  }
  
  export function DELETE() {
    return {
      type: DELETE_POST,
      payload: {}
    }
  }
  
  export function updatePost(post) {
    return {
      type: UPDATE_POST,
      payload: post
    }
  }
  
  
  export default function reducer2(state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case DELETE_POST:
        return initialState;
      case GET_POST:
        return { ...state, post: payload };
      case UPDATE_POST:
        return { ...state, username: payload.post.username, userId: payload.post.postId };
      default:
        return state;
    }
  }