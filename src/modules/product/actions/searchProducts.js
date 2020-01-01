import { SEARCH_PRODUCTS } from "../constants";

export const searchProducts = (products, name) => async (dispatch) => {
    dispatch({
        type: SEARCH_PRODUCTS,
        payload: {
            name: name,
            products:
                name === ""
                    ? products
                    : products.filter((product) =>
                          product.name.toLowerCase().startsWith(name)
                      ),
        },
    });
};
