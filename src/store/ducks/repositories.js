/**
 * ACTION TYPES
 */
export const Types = {
  REQUEST: 'REPO_REQUEST',
  SUCCESS: 'REPO_SUCCESS',
  FAILURE: 'REPO_FAILURE',
};

/**
 * REDUCERS
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  loadRepos: () => ({
    type: Types.REQUEST,
  }),

  loadReposSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  loadReposFailure: () => ({
    type: Types.FAILURE,
  }),
};
