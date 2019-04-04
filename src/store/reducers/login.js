const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      // * IMPORTANT: Redux Saga does not block an Action to reach the Reducer
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return {
        ...state, username: action.payload.username, error: false, loading: false,
      };
    case 'LOGIN_FAILURE':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
