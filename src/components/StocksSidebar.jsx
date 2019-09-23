import React from "react";
import { v4 } from "uuid";
// components
import Stock from "./Stock";

// mock api data
import mockBatch from "./../mock-api/batch.json";

const StocksSidebar = () => {
  const stocksList = mockBatch["Stock Quotes"].map(stock => {
    return <Stock stock={stock} key={v4()} />;
  });
  return <React.Fragment>{stocksList}</React.Fragment>;
};

export default StocksSidebar;
