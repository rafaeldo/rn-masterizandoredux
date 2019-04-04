const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REPO_REQUEST':
      return { ...state, loading: true };
    case 'REPO_SUCCESS':
      return {
        ...state, data: action.payload.data, loading: false, error: false,
      };
    case 'REPO_FAILURE':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
