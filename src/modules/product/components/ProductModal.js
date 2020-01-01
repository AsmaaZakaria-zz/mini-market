import React from "react";
import Modal from "../../../components/Modal";

const ProductModal = (props) => {
    const showModal = props.show ? (
        <Modal product={props.product} onDismiss={props.onDismiss} />
    ) : null;

    return <React.Fragment>{showModal}</React.Fragment>;
};

export default ProductModal;
