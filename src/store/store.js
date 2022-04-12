import { createStore, combineReducers } from "redux";
import ProductsReducer from "./Products/Products.reducer";

const rootReducer = combineReducers({
    products: ProductsReducer
})

export const store = createStore(rootReducer)

