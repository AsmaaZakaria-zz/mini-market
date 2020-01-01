import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "../../../components/Loader";
import { fetchProduct } from "../actions/fetchProduct";

const Container = styled.div`
    height: 50%;
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
`;

const Img = styled.img`
    height: 50%;
    width: 50%;
    box-shadow: 0 2px 10px #ccc;
`;

const mapStateToProps = (state, ownProps) => {
    if (ownProps.match.params.productID) {
        return {
            product: state.products.product,
        };
    }
};

const mapDispatchToProps = {
    fetchProduct,
};

const ProductView = (props) => {
    const { fetchProduct, match, product } = props;

    useEffect(() => {
        fetchProduct(match.params.productID);
    }, []);

    if (!product) {
        return <Loader />;
    }

    return (
        <Container>
            <h1>{product.name}</h1>
            <Img
                src={product.image}
                alt={product.name}
                width="300px"
                height="300px"
            />
            <h3 className="price">$ {product.price / 100}</h3>
            <p className="description">{product.description}</p>
            <a href="/list">Back</a>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
