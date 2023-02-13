import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinSlice';
import detailReducer from './coinDetailsSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
    details: detailReducer,
  },
});

export default store;
