import {all, call, put, takeLatest} from 'redux-saga/effects';

import {getNotification, readNotification} from '../../api/notificationApi';
import {
  notificationLoadMorePending,
  notificationLoadMoreSuccess,
  notificationPending,
  notificationSuccess,
  readNotificationPending,
  readNotificationSuccess,
} from '../slice/notificationSlice';

function* getNotificationSaga(action) {
  const {payload} = action;
  const {data} = yield call(getNotification, payload.phone, payload.page);
  yield put({
    type: notificationSuccess.type,
    payload: {res: {notifications: data}},
  });
}
function* loadMoreNotificationSaga(action) {
  const {payload} = action;
  const {data} = yield call(getNotification, payload.phone, payload.page);
  yield put({
    type: notificationLoadMoreSuccess.type,
    payload: {res: {notifications: data}},
  });
}

function* readNotificationSaga(action) {
  const {payload} = action;
  if (payload.id !== undefined) {
    yield call(
      readNotification,
      {...payload.notification, read: true},
      payload.id,
    );
  }

  yield put({type: readNotificationSuccess.type, payload: {id: payload.id}});
}
function* workerNotificationSaga() {
  yield takeLatest(notificationPending.type, getNotificationSaga);
  yield takeLatest(notificationLoadMorePending.type, loadMoreNotificationSaga);
  yield takeLatest(readNotificationPending.type, readNotificationSaga);
}

export default function* NotificationSaga() {
  console.log('NotificationSaga running');
  yield all([workerNotificationSaga()]);
}
