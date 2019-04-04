export const loadRepos = () => ({
  type: 'REPO_REQUEST',
});

export const loadReposSuccess = data => ({
  type: 'REPO_SUCCESS',
  payload: { data },
});

export const loadReposFailure = () => ({
  type: 'REPO_FAILURE',
});
