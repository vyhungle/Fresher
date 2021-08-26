import {all, call, put, takeLatest} from 'redux-saga/effects';

import {getNotification} from '../../api/notificationApi';
import {addOrder, getSingleOrder} from '../../api/orderApi';
import {deleteAccessCart} from '../../utils/asyncStore';
import {clearCart} from '../slice/cartSlice';
import {
  notificationLoadMorePending,
  notificationLoadMoreSuccess,
  notificationPending,
  notificationSuccess,
} from '../slice/notificationSlice';
import {
  addOrderPending,
  addOrderSuccess,
  getSingleOrderPending,
  getSingleOrderSuccess,
} from '../slice/orderSlice';

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

function* addOrderSaga(action) {
  const {payload} = action;
  yield call(addOrder, {...payload, status: 0});
  yield put({type: clearCart.type});
  yield call(deleteAccessCart);
  yield put({
    type: addOrderSuccess.type,
    payload: {res: {...payload, status: 0}},
  });
}

function* getSingleOrderSaga(action) {
  const {payload} = action;
  const {data} = yield call(getSingleOrder, payload.id);
  if (data) {
    yield put({
      type: getSingleOrderSuccess.type,
      payload: {res: {order: data}},
    });
  }
}
function* workerNotificationSaga() {
  yield takeLatest(notificationPending.type, getNotificationSaga);
  yield takeLatest(notificationLoadMorePending.type, loadMoreNotificationSaga);
  yield takeLatest(addOrderPending.type, addOrderSaga);
  yield takeLatest(getSingleOrderPending.type, getSingleOrderSaga);
}

export default function* NotificationSaga() {
  console.log('NotificationSaga running');
  yield all([workerNotificationSaga()]);
}
