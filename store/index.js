import {configureStore, combineReducers} from '@reduxjs/toolkit';
import registerSlice from './reducer/registerSlice';

const rootReducer = combineReducers({
  registerSlice: registerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
