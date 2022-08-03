import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import blogReducer from '../src/features/blog/slices/blogSlice';
import authBaseApi from './common/request/authBaseApi';
import unauthBaseApi from './common/request/unauthBaseApi';

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        [authBaseApi.reducerPath]: authBaseApi.reducer,
        [unauthBaseApi.reducerPath]: unauthBaseApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([authBaseApi.middleware, unauthBaseApi.middleware])
});

setupListeners(store.dispatch);