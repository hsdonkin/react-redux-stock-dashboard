import * as types from "./../constants";

const initialState = {
  loading: true,
  symbols: []
};

const dailyCryptoData = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_CRYPTO_DAILY_DATA:
      return { ...state, loading: true };
    case types.UPDATE_CRYPTO_DAILY_DATA:
      let newSymbolsList = state.symbols.slice();
      newSymbolsList.push({ [action.symbol]: action.json });
      return { ...state, loading: false, symbols: newSymbolsList };
    default:
      return state;
  }
};

export default dailyCryptoData;
