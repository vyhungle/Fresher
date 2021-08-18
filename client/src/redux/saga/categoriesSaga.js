import {all, call, put, takeEvery} from 'redux-saga/effects';

import {getCategories} from '../../api/categoryApi';
import {categoriesPending, categoriesSuccess} from '../slice/categoriesSlice';

function* getCategoriesSaga() {
  yield put({type: categoriesPending.type});
  const {data} = yield call(getCategories);
  yield put({type: categoriesSuccess.type, payload: {categories: data}});
}

// function* workerCategoriesSaga() {
//   yield takeEvery(categoriesPending.type, getCategoriesSaga);
// }

export default function* categoriesSaga() {
  console.log('categoriesSaga running');
  yield all([getCategoriesSaga()]);
}
