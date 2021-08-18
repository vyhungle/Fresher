import {all} from 'redux-saga/effects';
import categoriesSaga from './saga/categoriesSaga';

export default function* rootSaga() {
  yield all([categoriesSaga()]);
}
