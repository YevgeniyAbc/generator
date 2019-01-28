import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as constants from './constants/constants';

// watcher saga
export function* watcherSaga() {
  yield takeLatest(constants.GET_KOSHA_REQUEST, workerSaga);
}

// api request
function fetchCat() {
  return axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search"
  });
}

// worker saga
function* workerSaga() {
  try {
    const response = yield call(fetchCat);
    const cat = response.data[0].url;

    yield put({ type: constants.GET_KOSHA_SUCCESS, cat });
  } catch (error) {
    yield put({ type: constants.GET_KOSHA_FAILURE, error });
  }
}