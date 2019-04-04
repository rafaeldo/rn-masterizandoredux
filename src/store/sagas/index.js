import api from '~/services/api';

import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

// LOGIN ACTIONS
import * as loginActions from '~/store/actions/login';

// CALLBACKS (async)
function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(loginActions.loginSuccess(username));
    // navigation.navigate('Repositories');
  } catch (err) {
    yield put(loginActions.loginFailure());
  }
}
//

// SAGA CONFIG
export default function* rootSaga() {
  return yield all([takeLatest('LOGIN_REQUEST', login)]);
}
