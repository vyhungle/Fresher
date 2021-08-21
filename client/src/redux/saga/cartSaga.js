import {all, call, put, takeEvery} from 'redux-saga/effects';

function* getCartSaga(action) {
  const {payload} = action;
}

function* workerCartSaga() {}

export default function* cartSaga() {
  console.log('cartSaga running');
  yield all([workerCartSaga()]);
}
