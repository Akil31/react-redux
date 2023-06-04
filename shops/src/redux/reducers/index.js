import { combineReducers } from "redux";
import { productsReducer,selectedProuctsReducer,deletedProductsReducer } from "./products_reducer";


const reducers = combineReducers({
    allProudcts: productsReducer,
    selectProduct: selectedProuctsReducer,
    remove: deletedProductsReducer


})
console.log(reducers);
// const allProucts = combineReducers({postsReducer});

export default reducers;