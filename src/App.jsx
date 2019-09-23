import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {} from "./actions/index.js";
import { v4 } from "uuid";
import { fetchBatchStockData } from "./actions";

// components
import Header from "./components/Header";
import Area from "./components/Area";
import StocksSidebar from "./components/StocksSidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: v4() };
  }

  componentDidMount = () => {
    this.props.dispatch(fetchBatchStockData(["TSLA", "MSFT"]));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="page-wrap"></div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
