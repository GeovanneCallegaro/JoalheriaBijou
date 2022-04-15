import { createStore, combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ProductsReducer from "./Products/Products.reducer";

const rootReducer = combineReducers({
    products: ProductsReducer
})

const persistedReducer = persistReducer({
    key: 'productsNewID',
    storage, 
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)

