import api from '~/services/api';
import { navigate } from '~/services/navigation';

import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

// LOGIN ACTIONS
import * as loginActions from '~/store/actions/login';
// REPOS ACTIONS
import * as reposActions from '~/store/actions/repositories';

// CALLBACKS (async)
// --- Login
function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(loginActions.loginSuccess(username));

    navigate('Repositories');
  } catch (err) {
    yield put(loginActions.loginFailure());
  }
}

// --- Load Repos
function* loadRepos() {
  try {
    const { username } = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(reposActions.loadReposSuccess(response.data));
  } catch (err) {
    yield put(reposActions.loadReposFailure());
  }
}
//

// SAGA CONFIG
export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('REPO_REQUEST', loadRepos),
  ]);
}
