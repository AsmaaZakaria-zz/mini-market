import { FETCH_PRODUCT, FETCH_PRODUCTS, SEARCH_PRODUCTS } from "../constants";

const INITIAL_STATE = {
    products: [],
    filterProducts: [],
    name: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, product: action.payload };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                filterProducts: action.payload,
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                name: action.payload.name,
                filterProducts: action.payload.products,
            };
        default:
            return state;
    }
};
