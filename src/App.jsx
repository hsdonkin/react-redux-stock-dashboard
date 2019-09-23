import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {} from "./actions/index.js";
import { v4 } from "uuid";
import { fetchBatchStockData, fetchDailyStockData } from "./actions";

// components
import Header from "./components/Header";

import StocksSidebar from "./components/StocksSidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.dispatch(
      fetchBatchStockData(["TSLA", "MSFT", "AAPL", "F", "NVDA", "HEXO"])
    );
    this.props.dispatch(fetchDailyStockData("TLSA"));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="page-wrap">
          <Header />
          <StocksSidebar />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
