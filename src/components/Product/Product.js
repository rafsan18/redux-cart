import React from "react";

const Product = (props) => {
  const { name, id } = props.product;
  return (
    <div
      style={{
        border: "2px solid tomato",
        width: "50%",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h5>{name}</h5>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
