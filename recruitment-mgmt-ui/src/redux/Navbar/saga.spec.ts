import { runSaga } from 'redux-saga';
import { AnyAction } from '@reduxjs/toolkit';
import {watchChangeSidebarAsync
} from './saga';
import { NavbarActions } from './slice';

describe('counter saga', () => {
  it('should handle increment', async () => {
    const dispatchedActions: AnyAction[] = [];
    const fakeStore = {
      getState: () => ({ IsSidebarOpen: true }),
      dispatch: (action: AnyAction) => dispatchedActions.push(action),
    };

    await runSaga(fakeStore, watchChangeSidebarAsync).toPromise();
    expect(dispatchedActions).toContainEqual(NavbarActions.changeSidebar());
  });

});
