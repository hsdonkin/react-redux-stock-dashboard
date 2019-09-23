import * as constants from "./../constants";

// the reducer handles updating the state, dispatch requests arrive here with the action type and the payload
const batchStockData = (state = constants.initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_BATCH_STOCK_DATA:
      return { ...state, loading: true };
    case constants.UPDATE_BATCH_STOCK_DATA:
      return {
        loading: false,
        ["Meta Data"]: action.json["Meta Data"],
        ["Stock Quotes"]: action.json["Stock Quotes"]
      };
    default:
      return state;
  }
};

export default batchStockData;
