export const ADD_COIN = "ADD_COIN";
export const API_CALL = "API_CALL";
export function addCoin(coin) {
  return {
    type: "ADD_COIN",
    payload: coin,
  };
}

export function apiCall(coin) {
  return function (dispatch) {
    console.log("entering here");

    return fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: API_CALL, payload: json });
        console.log(json);
      });
  };
}
