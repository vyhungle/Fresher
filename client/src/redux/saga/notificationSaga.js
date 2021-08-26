import {all, call, put, takeLatest} from 'redux-saga/effects';

import {getOrder} from '../../api/orderApi';
import {
  orderLoadMorePending,
  orderLoadMoreSuccess,
  orderPending,
  orderSuccess,
} from '../slice/orderSlice';

function* getOrderSaga(action) {
  const {payload} = action;
  const {data} = yield call(getOrder, payload.phone, payload.page);
  yield put({
    type: orderSuccess.type,
    payload: {res: {orders: data}},
  });
}
function* loadMoreOrderSaga(action) {
  const {payload} = action;
  const {data} = yield call(getOrder, payload.phone, payload.page);
  yield put({
    type: orderLoadMoreSuccess.type,
    payload: {res: {orders: data}},
  });
}

function* workerOrderSaga() {
  yield takeLatest(orderPending.type, getOrderSaga);
  yield takeLatest(orderLoadMorePending.type, loadMoreOrderSaga);
}

export default function* OrderSaga() {
  console.log('OrderSaga running');
  yield all([workerOrderSaga()]);
}
