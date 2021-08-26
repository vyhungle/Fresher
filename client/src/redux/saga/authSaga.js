import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {loginAuth, registerAuth} from '../../api/authApi';
import {
  getAccessAuth,
  getFcmToken,
  setAccessAuth,
} from '../../utils/asyncStore';
import {authPending, authSuccess, getAuth} from '../slice/authSlice';
import {notificationPending} from '../slice/notificationSlice';
import {orderPending} from '../slice/orderSlice';

function* loginSaga(action) {
  const {payload} = action;
  const {data} = yield call(loginAuth, payload.phone);
  if (data === []) {
    const fcmToken = yield call(getFcmToken);
    yield call(registerAuth, {
      phoneNumber: payload.phoneNumber,
      fcmToken: [fcmToken],
    });
  }
  yield call(setAccessAuth, payload.phoneNumber);
  yield put({
    type: authSuccess.type,
    payload: {phoneNumber: payload.phoneNumber},
  });
  yield put({
    type: orderPending.type,
    payload: {phone: payload.phoneNumber, page: 1},
  });
  yield put({
    type: notificationPending.type,
    payload: {phone: payload.phoneNumber, page: 1},
  });
}

function* getAuthSaga() {
  const auth = yield call(getAccessAuth);
  if (auth) {
    yield put({type: getAuth.type, payload: {phoneNumber: auth}});
    yield put({type: orderPending.type, payload: {phone: auth, page: 1}});
    yield put({
      type: notificationPending.type,
      payload: {phone: auth, page: 1},
    });
  }
}

function* workerAuthSaga() {
  yield takeLatest(authPending.type, loginSaga);
}

export default function* AuthSaga() {
  console.log('AuthSaga running');
  yield all([getAuthSaga(), workerAuthSaga()]);
}
