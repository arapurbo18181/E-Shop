import { createSlice } from "@reduxjs/toolkit";

interface NavToggleState {
  isOpen: boolean;
}

const initialState: NavToggleState = {
  isOpen: false,
};

export const NavToggleSlice = createSlice({
  name: "toggleNav",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNav, closeNav } = NavToggleSlice.actions;

export default NavToggleSlice.reducer;
