import { combineReducers } from "redux";
import batchStockData from "./batchStockData";
import dailyStockData from "./dailyStockData";
import dailyCryptoData from "./dailyCryptoData";

export default combineReducers({
  batchStockData,
  dailyStockData,
  dailyCryptoData
});
