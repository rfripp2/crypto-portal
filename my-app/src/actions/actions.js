export const API_CALL = "API_CALL";
export const GET_COIN_LIST = "GET_COIN_LIST";
export const HANDLE_INTERVAL = "HANDLE_INTERVAL";
export const RESET = "RESET";
export const getCoinList = (coins) => {
  return {
    type: "GET_COIN_LIST",
    payload: coins,
  };
};
export const apiCall = (coin) => {
  return function (dispatch) {
    return fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: API_CALL, payload: json });
      });
  };
};

export const handleInterval = (coins) => {
  return {
    type: HANDLE_INTERVAL,
    payload: coins,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
