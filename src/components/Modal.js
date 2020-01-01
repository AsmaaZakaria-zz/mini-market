import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ product, onDismiss }) => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-body">
                <button className="modal-close" onClick={onDismiss}>
                    X
                </button>
                <img src={product.image} alt={product.name} />
                <div className="modal-content">
                    <p className="name">{product.name}</p>
                    <p className="price">$ {product.price / 100}</p>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;
