import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import allReducers from "./reducer";
const store = configureStore({
    middleware: [thunk],
    reducer: allReducers
});

export default store;
