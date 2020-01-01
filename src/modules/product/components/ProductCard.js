import React, { useState } from "react";
import history from "../../../history";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        if (window.innerWidth < 600) {
            history.push(`/list/${product.product_id}`);
        }

        setShowModal(true);
    };

    return (
        <React.Fragment>
            <ProductModal
                show={showModal}
                product={product}
                onDismiss={() => setShowModal(false)}
            />
            <div className="card">
                <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => handleClick()}
                />
                <div className="card-content">
                    <p className="name">{product.name}</p>
                    <p className="price">$ {product.price / 100}</p>
                    <a href={`/list/${product.product_id}`}>Learn more</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductCard;
