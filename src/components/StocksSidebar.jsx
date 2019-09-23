import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
// components
import Stock from "./Stock";

// mock api data
import mockBatch from "./../mock-api/batch.json";

class StocksSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: v4() };
  }

  render() {
    let stocksList;
    if (this.props.state.batchStockData.loading === false) {
      console.log(this.props.state.batchStockData["Stock Quotes"]);
      stocksList = this.props.state.batchStockData["Stock Quotes"].map(
        stock => {
          // for some reason the arrow function REALLY needs an explicit return statement here
          return <Stock key={v4()} stock={stock} />;
        }
      );
    }
    return <div>{stocksList}</div>;
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(StocksSidebar);
