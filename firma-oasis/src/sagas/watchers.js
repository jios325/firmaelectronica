import { takeLatest, takeEvery } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';
import * as types from '../actions';

export default function* watchUserAuthentication() {
  yield takeEvery(types.LOGIN_USER, loginSaga);
}