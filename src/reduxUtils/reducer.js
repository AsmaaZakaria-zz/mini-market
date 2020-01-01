import { combineReducers } from "redux";
import ProductReducer from "../modules/product/reducers";

export default combineReducers({
    products: ProductReducer,
});
