import { expect } from '@jest/globals';
import { NavbarReducer, NavbarActions, NavbarParam } from './slice';
import { describe, expect, it } from '@jest/globals';

describe('counter reducer', () => {
  const initialState: NavbarParam = {
    IsSidebarOpen: true,IsListView:true,
  };
  it('should handle initial state', () => {
    expect(NavbarReducer(undefined, { type: 'unknown' })).toEqual({
      IsSidebarOpen: false,
    });
  });

  it('should handle false of side bar', () => {
    const actual = NavbarReducer(
      initialState,
      NavbarActions.changeSidebar(false)
    );
    expect(actual.IsSidebarOpen).toEqual(false);
  });

  it('should handle true of side bar', () => {
    const actual = NavbarReducer(
      initialState,
      NavbarActions.changeSidebar(true)
    );
    expect(actual.IsSidebarOpen).toEqual(true);
  }); it('should handle false of list view', () => {
    const actual = NavbarReducer(
      initialState,
      NavbarActions.changeListView(false)
    );
    expect(actual.IsSidebarOpen).toEqual(false);
  });

  it('should handle true of list view', () => {
    const actual = NavbarReducer(
      initialState,
      NavbarActions.changeListView(true)
    );
    expect(actual.IsSidebarOpen).toEqual(true);
  });
});
