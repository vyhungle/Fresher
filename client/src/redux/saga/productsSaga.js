import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects';

import {getProducts} from '../../api/categoryApi';
import {
  pagePending,
  pageSuccess,
  productPending,
  productSuccess,
} from '../slice/productsSlice';

function* getProductsSaga(action) {
  const {payload} = action;
  const {data} = yield call(getProducts, payload.id, payload.page);
  yield put({
    type: productSuccess.type,
    payload: {res: {id: payload.id, page: payload.page, products: data}},
  });
}

function* loadPageProductsSaga(action) {
  const {payload} = action;
  const {data} = yield call(getProducts, payload.id, payload.page);
  yield put({
    type: pageSuccess.type,
    payload: {res: {id: payload.id, page: payload.page, products: data}},
  });
}

function* workerCategoriesSaga() {
  yield takeEvery(productPending.type, getProductsSaga);
  yield takeLatest(pagePending.type, loadPageProductsSaga);
}

export default function* categoriesSaga() {
  console.log('productsSaga running');
  yield all([workerCategoriesSaga()]);
}
