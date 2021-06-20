import { API_CALL, GET_COIN_LIST } from "../actions/actions";

const initialState = {
  coinList: [],
  coinPrices: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_LIST:
      return {
        ...state,
        coinList: state.coinList.concat(action.payload),
      };
    case API_CALL:
      return {
        ...state,
        coinPrices: [...state.coinPrices, action.payload],
      };

    default:
      return state;
  }
}

export default rootReducer;
