import axios from "axios";
import history from "../../../history";
import { FETCH_PRODUCTS } from "../constants";

// this is a workaround so I avoided CORS block
const URL =
    "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list";
const CORS_URL = `https://cors-anywhere.herokuapp.com/${URL}`;

export const fetchProducts = () => async (dispatch) => {
    await axios
        .get(CORS_URL)
        .then((response) => {
            dispatch({ type: FETCH_PRODUCTS, payload: response.data.products });
        })
        .catch((err) => {
            history.push("/notFound");
        });
};
