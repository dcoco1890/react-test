import React from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";

// Grab state as properties
const mapStateToProps = state => {
  return { state };
};

// loop/map through state and return a product Item
const ConnectedProductView = props => {
  return (
    <div className="products">
      {props.state.map(item => {
        return (
          <ProductItem
            img={item.img}
            name={item.name}
            pricing={item.pricing}
            number={item.number}
            key={item.name}
          />
        );
      })}
    </div>
  );
};

const ProductView = connect(mapStateToProps)(ConnectedProductView);

export default ProductView;
