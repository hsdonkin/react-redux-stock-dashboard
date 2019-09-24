import React from "react";
import { connect } from "react-redux";
import Crypto from "./Crypto";

class CryptoSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cryptoList;
    if (this.props.state.dailyCryptoData.loading === false) {
      let cryptoSymbols = this.props.state.dailyCryptoData.symbols;
      cryptoList = cryptoSymbols.map(cryptoObj => {
        let currentSymbol = Object.keys(cryptoObj)[0];
        return <Crypto symbol={currentSymbol} />;
      });
    }
    return <div className="cryptoSidebar">{cryptoList}</div>;
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(CryptoSidebar);
