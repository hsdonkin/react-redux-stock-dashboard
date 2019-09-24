import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {} from "./actions/index.js";
import { v4 } from "uuid";
import {
  fetchBatchStockData,
  fetchDailyStockData,
  fetchCryptoDailyData
} from "./actions";

// components
import Header from "./components/Header";
import StocksSidebar from "./components/StocksSidebar";
import Graph from "./components/Graph";
import CryptoSidebar from "./components/CryptoSidebar";

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
    let cryptoSymbols = ["BTC", "LTC", "DOGE"];
    cryptoSymbols.forEach(symbol => {
      this.props.dispatch(fetchCryptoDailyData(symbol));
    });
  };

  render() {
    document.body.style =
      "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); height: 100vh; margin: 0;";

    return (
      <BrowserRouter>
        <div className="page-wrap">
          <Header />
          <StocksSidebar />
          <Graph />
          <CryptoSidebar />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
