import { NavbarReducer, NavbarActions, NavbarParam } from './slice';

describe('counter reducer', () => {
  const initialState: NavbarParam = {
    IsSidebarOpen: true,
  };
  it('should handle initial state', () => {
    expect(NavbarReducer(undefined, { type: 'unknown' })).toEqual({
      IsSidebarOpen: false,
    });
  });

  it('should handle increment', () => {
    const actual = NavbarReducer(
      initialState,
      NavbarActions.changeSidebar(false)
    );
    expect(actual.IsSidebarOpen).toEqual(false);
  });

  it('should handle decrement', () => {
    const actual = NavbarReducer(
      initialState,
      NavbarActions.changeSidebar(true)
    );
    expect(actual.IsSidebarOpen).toEqual(true);
  });
});
