import axios from "axios";
import history from "../../../history";
import { FETCH_PRODUCT } from "../constants";

export const fetchProduct = (productID) => async (dispatch) => {
    let id = productID === "6" ? "6_id_is_a_string" : productID;

    await axios
        .get(
            `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`
        )
        .then((response) => {
            dispatch({ type: FETCH_PRODUCT, payload: response.data });
        })
        .catch((err) => {
            history.push("/notFound");
        });
};
