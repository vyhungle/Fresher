import {all} from 'redux-saga/effects';
import categoriesSaga from './saga/categoriesSaga';
import productsSaga from './saga/productsSaga';
import locationSaga from './saga/locationSaga';
import cartSaga from './saga/cartSaga';

export default function* rootSaga() {
  yield all([categoriesSaga(), productsSaga(), locationSaga(), cartSaga()]);
}
