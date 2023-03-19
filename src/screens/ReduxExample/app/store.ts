import {configureStore} from '@reduxjs/toolkit';
import counterReducers from '../features/counter/counter-slice';
import usersReducer from '../features/counter/user-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducers,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
