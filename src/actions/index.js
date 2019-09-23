// types are constants to standardize the action types
import * as types from "./../constants";
import v4 from "uuid";

// this is the first function to fire
// first, it dispatches an action to the store, telling it to change the status to loading:true
// then, it calls the api
// when the api response returns, it dispatches another action to update the data in the redux store, and change the status to loading: false

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
        dispatch(updateBatchStockData(json));
      });
  };
}

export const requestBatchStockData = symbols => ({
  type: types.REQUEST_BATCH_STOCK_DATA,
  symbols: symbols
});

export const updateBatchStockData = json => ({
  type: types.UPDATE_BATCH_STOCK_DATA,
  json: json
});

export const requestDailyStockData = symbol => ({
  type: types.REQUEST_DAILY_STOCK_DATA,
  symbol: symbol
});

export function fetchDailyStockData(symbol) {
  return function(dispatch) {
    dispatch(requestDailyStockData(symbol));
    return fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&apikey=${
        process.env["API_KEY"]
      }&symbol=TSLA&interval=15min`
    )
      .then(response => response.json())
      .then(json => {
        dispatch(updateDailyStockData(json));
      });
  };
}

export const updateDailyStockData = json => ({
  type: types.UPDATE_DAILY_STOCK_DATA,
  json: json
});
