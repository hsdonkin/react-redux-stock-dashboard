import React from "react";
import { connect } from "react-redux";

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.state.dailyStockData.loading === false) {
    //   const data = this.props.state.dailyStockData["Time Series (15min)"];
    //   const dates = Object.keys(data);
    //   let closingPrices = [];
    //   for (let timestamp in data) {
    //     closingPrices.push(data[timestamp]["4. close"]);
    //   }
    //   const ctx = document.getElementById("chart").getContext("2d");
    //   const chart = new Chart(ctx, {
    //     type: "line",
    //     data: {
    //       labels: dates,
    //       datasets: [
    //         {
    //           data: closingPrices,
    //           label: "Test",
    //           borderColor: "#3e95cd",
    //           fill: false
    //         }
    //       ]
    //     }
    //   });
    // }

    return (
      <div>
        <canvas id="chart" width="800" height="450"></canvas>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(Chart);
