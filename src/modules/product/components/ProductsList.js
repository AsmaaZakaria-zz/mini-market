import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../../../logo.jpeg";
import ProductCard from "./ProductCard";
import Loader from "../../../components/Loader";
import NotFound from "../../../components/NotFound";
import SearchField from "../../../components/SearchField";
import { fetchProducts } from "../actions/fetchProducts";

const Container = styled.div`
    width: 85%;
    margin: auto;
`;

const HeaderContainer = styled.div`
    text-align: center;
`;

const Header = styled.h1`
    text-align: center;
    font-size: 4rem;
    color: #d77fa1;
    font-weight: 700;
    font-style: normal;
    font-family: "PT Sans", sans-serif;
    color: #604848;
    font-size: 44px;
    line-height: 1.1;
    letter-spacing: 0px;
`;

const HR = styled.hr`
    max-width: 100%;
    width: 190px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #e1e1e1;
`;

const LogoContainer = styled.img`
    height: 100%;
    max-height: 345px;
`;

const mapStateToProps = (state) => {
    return {
        products: state.products.filterProducts,
    };
};

const mapDispatchToProps = {
    fetchProducts,
};

class ProductsList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProductList = () => {
        if (!this.props.products) {
            return <Loader />;
        }

        if (this.props.products.length === 0) {
            return <NotFound />;
        }

        return this.props.products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
        ));
    };

    render() {
        return (
            <section>
                <Container>
                    <LogoContainer src={Logo} alt="Logo" />
                    <HeaderContainer>
                        <Header>Our Products</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec metus nulla, varius sit amet suscipit sed,
                            vulputate eu diam
                        </p>
                    </HeaderContainer>
                    <HR />
                    <SearchField />
                    <main>{this.renderProductList()}</main>
                </Container>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
