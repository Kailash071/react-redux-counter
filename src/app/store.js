import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter/counterSlice';
export const store = configureStore({
    reducer: {
        counter:counterReducer
    },
})