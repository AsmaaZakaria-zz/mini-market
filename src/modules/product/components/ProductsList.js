import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
// import { fetchProducts } from "../actions/fetchProducts";
import ProductCard from "./ProductsList";

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  // fetchProducts
}

class ProductsList extends React.Component {
  state = {
    todos: [
      {
        "product_id" : "1",
        "name" : "Apples",
        "price" : 120,
        // "image" : "https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg"
     },
     {
        "product_id" : "2",
        "name" : "Oranges",
        "price" : 167,
        // "image" : "https://s3-eu-west-1.amazonaws.com/developer-application-test/images/2.jpg"
     },
     {
        "product_id" : "3",
        "name" : "Bananas",
        "price" : 88,
        // "image" : "https://s3-eu-west-1.amazonaws.com/developer-application-test/images/3.jpg"
     },
     {
        "product_id" : "4",
        "name" : "Onions",
        "price" : 110,
        // "image" : "https://s3-eu-west-1.amazonaws.com/developer-application-test/images/4.jpg"
     },
     {
        "product_id" : "5",
        "name" : "Steak",
        "price" : 543,
        // "image" : "https://s3-eu-west-1.amazonaws.com/developer-application-test/images/5.jpg"
     },
    ]
  }

  render() {
    return (
      <div>
        ProductsList
        {this.state.todos.map(product => (
          <ProductCard name={product.name} />
        ))}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
