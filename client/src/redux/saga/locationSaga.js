import {all, call, put, takeEvery} from 'redux-saga/effects';

import {getUserLocation} from '../../api/mapApi';
import {locationPending, locationSuccess} from '../slice/locationSlice';

function* locationSaga(action) {
  const {payload} = action;
  const {data} = yield call(
    getUserLocation,
    payload.latitude,
    payload.longitude,
  );

  const localityInfo = data.localityInfo.administrative;
  const locationName = `P.${localityInfo[4].name}, Q.${localityInfo[3].name}, TP.${localityInfo[2].name}`;

  yield put({
    type: locationSuccess.type,
    payload: {res: {locationName, localityInfo}},
  });
}

function* workerLocationSaga() {
  yield takeEvery(locationPending.type, locationSaga);
}

export default function* categoriesSaga() {
  console.log('locationSaga running');
  yield all([workerLocationSaga()]);
}
