import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import NavbarSagas from './Navbar/saga';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(NavbarSagas)]);
}
