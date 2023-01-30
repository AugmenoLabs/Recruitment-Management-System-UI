import { createSlice } from '@reduxjs/toolkit';

export interface NavbarParam {
  IsSidebarOpen: boolean;
}

const initialState: NavbarParam = {
  IsSidebarOpen: false,
};

export const NavbarSlice = createSlice({
  name: 'IsSidebarOpen',
  initialState,
  reducers: {
    changeSidebar: (state) => {
      state.IsSidebarOpen = !state.IsSidebarOpen;
    },
    
    changeSidebarAsync: (state) => {},
    changeSidebarAsyncSuccess: (state) => {},
    changeSidebarAsyncFailure: (state) => {},
  },
});

export const { actions: NavbarActions, reducer: NavbarReducer } =
NavbarSlice;
