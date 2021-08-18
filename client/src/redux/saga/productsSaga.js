import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects';

import {getCategories, getProducts} from '../../api/categoryApi';
import {productPending, productSuccess} from '../slice/productsSlice';

function* getProductsSaga(action) {
  const {payload} = action;
  const {data} = yield call(getProducts, (payload.id, payload.page));
  yield put({
    type: productSuccess.type,
    payload: {res: {id: payload.id, products: data}},
  });
}

function* workerCategoriesSaga() {
  yield takeEvery(productPending.type, getProductsSaga);
}

export default function* categoriesSaga() {
  console.log('productsSaga running');
  yield all([workerCategoriesSaga()]);
}
