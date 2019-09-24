import React from "react";
import { connect } from "react-redux";
import { Chart } from "chart.js";

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate = () => {
    const data = this.props.state.dailyStockData["Time Series (15min)"];
    const dates = Object.keys(data);
    if (this.props.state.dailyStockData.loading === false) {
    }

    let closingPrices = [];
    for (let timestamp in data) {
      closingPrices.push(data[timestamp]["4. close"]);
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: dates.reverse(),
        datasets: [
          {
            data: closingPrices.reverse(),
            label: "",
            borderColor: "lightcoral",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        title: {
          display: false,
          text: ""
        }
      }
    });
  };

  render() {
    let loadMessage;
    if (this.props.state.dailyStockData.loading === false) {
      loadMessage = "Done loading!";
    } else {
      loadMessage = "Loading.......";
    }

    return (
      <div className="chart-holder">
        <canvas id="chart" height="500" width="700"></canvas>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(Graph);
