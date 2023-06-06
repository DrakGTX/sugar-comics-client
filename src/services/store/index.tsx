import { configureStore } from '@reduxjs/toolkit';
import { submitReducer } from './reducers/submitReducer';
// import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        // user: userReducer,
        submitData: submitReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
