import * as types from "./../constants";
import v4 from "uuid";

export const requestBatchStockData = symbols => ({
  type: types.REQUEST_BATCH_STOCK_DATA,
  symbols: symbols
});

export function fetchBatchStockData(symbols) {
  return function(dispatch) {
    dispatch(requestBatchStockData(symbols));
    let joinSymbols = symbols.join(",");
    return fetch(
      `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${
        process.env["API_KEY"]
      }&symbols=${symbols}`
    )
      .then(response => response.json())
      .then(json => {
        console.log("This is the json response", json);
        dispatch(updateBatchStockData(json));
      });
  };
}

export const updateBatchStockData = json => ({
  type: types.UPDATE_BATCH_STOCK_DATA,
  json: json
});
