import { ADD_COIN, API_CALL } from "../actions/actions";

const initialState = {
  coins: [],
  coinPrices: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COIN:
      console.log("adding?");
      return {
        ...state,
        coins: state.coins.concat(action.payload),
      };

    case API_CALL:
      return {
        ...state,
        coinPrices: state.coinPrices.concat(action.payload),
      };

    default:
      return state;
  }
}

export default rootReducer;
