import {all, call, put, takeLatest} from 'redux-saga/effects';

import {addOrder, getOrder, getSingleOrder} from '../../api/orderApi';
import {deleteAccessCart} from '../../utils/asyncStore';
import {clearCart} from '../slice/cartSlice';

import {
  addOrderPending,
  addOrderSuccess,
  getSingleOrderPending,
  getSingleOrderSuccess,
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
  console.log(payload.id);
  const {data} = yield call(getSingleOrder, payload.id);
  if (data) {
    yield put({
      type: getSingleOrderSuccess.type,
      payload: {res: {order: data}},
    });
  }
}

function* workerOrderSaga() {
  yield takeLatest(orderPending.type, getOrderSaga);
  yield takeLatest(orderLoadMorePending.type, loadMoreOrderSaga);
  yield takeLatest(addOrderPending.type, addOrderSaga);
  yield takeLatest(getSingleOrderPending.type, getSingleOrderSaga);
}

export default function* OrderSaga() {
  console.log('OrderSaga running');
  yield all([workerOrderSaga()]);
}
