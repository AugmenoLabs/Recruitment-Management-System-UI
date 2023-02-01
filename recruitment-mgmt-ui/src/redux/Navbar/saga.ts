import { delay, put, Effect } from 'redux-saga/effects';
// import { PayloadAction } from '@reduxjs/toolkit';
import { NavbarActions } from './slice';

export function* watchChangeSidebarAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(NavbarActions.changeSidebar(false));
}
export function* watchChangeLIstViewAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(NavbarActions.changeListView(false));
}

const NavbarSagas = watchChangeSidebarAsync;

export default NavbarSagas;
