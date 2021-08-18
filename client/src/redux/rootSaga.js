import {all} from 'redux-saga/effects';
import categoriesSaga from './saga/categoriesSaga';
import ProductsSaga from './saga/productsSaga';

export default function* rootSaga() {
  yield all([categoriesSaga(), ProductsSaga()]);
}
