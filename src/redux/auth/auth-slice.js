import { createSlice } from '@reduxjs/toolkit';

import { signIn, signUp, getCurrentUser, logOut } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  loading: false,
  error: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //реєстрація нового юзера
    [signUp.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signUp.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      ...payload,
    }),
    [signUp.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    //логін юзера
    [signIn.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signIn.fulfilled]: (store, { payload }) => {
      const { token, email, totalBalance } = payload;
      return {
        ...store,
        loading: false,
        isLogin: true,
        token,
        userData: { email, totalBalance },
      };
    },
    [signIn.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //перевірка каррент
    [getCurrentUser]: (store, _) => ({ ...store, loading: true, error: null }),
    [getCurrentUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      isLogin: true,
      userData: payload,
    }),
    [getCurrentUser.rejected]: (_, { payload }) => ({
      ...initialState,
      error: payload,
    }),
    //логаут
    [logOut.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [logOut.fulfilled]: () => ({ ...initialState, loading: false }),
    [logOut.rejected]: () => ({ ...initialState, loading: false }),
  },
});
export default authSlice.reducer;
