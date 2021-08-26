import {all} from 'redux-saga/effects';
import categoriesSaga from './saga/categoriesSaga';
import productsSaga from './saga/productsSaga';
import locationSaga from './saga/locationSaga';
import cartSaga from './saga/cartSaga';
import orderSaga from './saga/orderSaga';
import notificationSaga from './saga/notificationSaga';

export default function* rootSaga() {
  yield all([
    categoriesSaga(),
    productsSaga(),
    locationSaga(),
    cartSaga(),
    orderSaga(),
    notificationSaga(),
  ]);
}
