import { createSlice } from '@reduxjs/toolkit';

export const createAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    phone: '',
    isAuthenticated: false,
    isFirstTime: true,
  },
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    setIsFirstTime: (state, { payload }) => {
      state.isFirstTime = payload;
    },
  },
});

export const { setIsFirstTime, setIsAuthenticated } = createAuthSlice.actions;

export default createAuthSlice.reducer;
