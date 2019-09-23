// these constants are to set up the inital state for the app, as well as standardize the action types

export const initialState = {
  loading: true,
  ["Meta Data"]: {},
  ["Stock Quotes"]: []
};

export const UPDATE_BATCH_STOCK_DATA = "UPDATE_BATCH_STOCK_DATA";

export const REQUEST_BATCH_STOCK_DATA = "REQUEST_BATCH_STOCK_DATA";

export const REQUEST_DAILY_STOCK_DATA = "REQUEST_DAILY_STOCK_DATA";

export const UPDATE_DAILY_STOCK_DATA = "UPDATE_DAILY_STOCK_DATA";
