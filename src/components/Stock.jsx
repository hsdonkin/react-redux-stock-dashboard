import React from "react";

const Stock = props => {
  return (
    <div className="stock">
      <p>{props.stock["1. symbol"]}</p>
      <p>{props.stock["2. price"]}</p>
    </div>
  );
};

export default Stock;
