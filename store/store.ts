import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/authSlice';
import registerReducer from './Features/registerSlice';
import launchesPastSlice from './Features/launchesPastSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    launchesPast: launchesPastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
