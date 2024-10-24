import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { thunk } from "redux-thunk";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./redux/reducer/rootReducer";
import rootSaga from "./redux/saga/rootSaga";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['productCart', 'productfavourite']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    devtools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware, thunk),
});

sagaMiddleware.run(rootSaga);

export default store;

