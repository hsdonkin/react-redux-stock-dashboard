import * as types from "./../constants";

const initialState = {
  loading: true,
  ["Meta Data"]: {},
  ["Time Series (15min)"]: {}
};

const dailyStockData = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_DAILY_STOCK_DATA:
      return { ...state, loading: true };
    case types.UPDATE_DAILY_STOCK_DATA:
      return {
        loading: false,
        ["Meta Data"]: action.json["Meta Data"],
        ["Time Series (15min)"]: action.json["Time Series (15min)"]
      };
    default:
      return state;
  }
};

export default dailyStockData;
