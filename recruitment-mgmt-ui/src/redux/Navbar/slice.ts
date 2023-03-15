import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavbarParam {
  IsSidebarOpen: boolean;
  IsListView:boolean;
}

const initialState: NavbarParam = {
  IsSidebarOpen: false,
  IsListView:false,
};

export const NavbarSlice = createSlice({
  name: 'IsSidebarOpen',
  initialState,
  reducers: {
    changeSidebar: (state, action: PayloadAction<boolean>) => {
      state.IsSidebarOpen = action.payload;
    },  changeListView: (state, action: PayloadAction<boolean>) => {
      state.IsListView = action.payload;
    },

    changeSidebarAsync: (state) => {},
    changeSidebarAsyncSuccess: (state) => {},
    changeSidebarAsyncFailure: (state) => {},
  },
});

export const { actions: NavbarActions, reducer: NavbarReducer } = NavbarSlice;
