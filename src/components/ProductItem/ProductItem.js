import React from "react";
import { connect } from "react-redux";
import { logPartInfo } from "../../redux/actions";
import "./Product.css";

const mapDispatchToProps = (dispatch, ownProps) => {
  // originally I had this as objToLog = {...ownprops} but
  // instructions said just price and part
  const { number, pricing } = ownProps;
  return {
    log: () => dispatch(logPartInfo({ number: number, pricing: pricing }))
  };
};

// I think this should classify as reusable. Gets the object keys as props and
// the log function created by mapdispatchtoprops
const ConnectedProductItem = ({ img, name, number, pricing, log }) => {
  return (
    <div className="product-list-item">
      <div className="product-img">
        <img src={img} alt="a battery for sale" />
      </div>
      <div className="product-info-section">
        <h3 className="product-header">{name}</h3>
        <p className="part-number-identifier">
          PartNo: <span className="part-number">{number}</span>
        </p>
        <h5 className="price">${pricing}</h5>
        <button onClick={() => log()} className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// connecting with react-redux
const ProductItem = connect(null, mapDispatchToProps)(ConnectedProductItem);

export default ProductItem;
