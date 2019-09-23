import { combineReducers } from "redux";
import batchStockData from "./batchStockData";
import dailyStockData from "./dailyStockData";

export default combineReducers({
  batchStockData,
  dailyStockData
});
