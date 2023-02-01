import { runSaga } from 'redux-saga';
import { AnyAction } from '@reduxjs/toolkit';
import { watchChangeSidebarAsync, watchChangeLIstViewAsync } from './saga';
import { NavbarActions } from './slice';

describe('counter saga', () => {
  it('should handle false side bar', async () => {
    const dispatchedActions: AnyAction[] = [];
    const fakeStore = {
      getState: () => ({ IsSidebarOpen: true }),
      dispatch: (action: AnyAction) => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, watchChangeSidebarAsync).toPromise();
    expect(dispatchedActions).toContainEqual(
      NavbarActions.changeSidebar(false)
    );
  });
  it('should handle false list View', async () => {
    const dispatchedActions: AnyAction[] = [];
    const fakeStore = {
      getState: () => ({ IsSidebarOpen: true }),
      dispatch: (action: AnyAction) => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, watchChangeLIstViewAsync).toPromise();
    expect(dispatchedActions).toContainEqual(
      NavbarActions.changeListView(false)
    );
  });
});
