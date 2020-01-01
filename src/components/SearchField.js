import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchProducts } from "../modules/product/actions/searchProducts";

const Container = styled.form`
    padding-left: 15px;
    width: 100%;
    max-width: 380px;
    height: auto;
    border-radius: 10px;
`;

const Input = styled.input`
    margin: 15px 0;
    padding: 15px 10px;
    width: 100%;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 20px;
    display: inline-block;
    box-sizing: border-box;
`;

const mapStateToProps = (state) => {
    return {
        name: state.products.name,
        products: state.products.products,
    };
};

const mapDispatchToProps = {
    searchProducts,
};

const SearchField = (props) => {
    return (
        <Container>
            <Input
                name="search"
                placeholder="Search..."
                autoComplete="off"
                value={props.name}
                onChange={(e) =>
                    props.searchProducts(props.products, e.target.value)
                }
            />
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
