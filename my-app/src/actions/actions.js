export const API_CALL = "API_CALL";
export const GET_COIN_LIST = "GET_COIN_LIST";

export const getCoinList = (coins) => {
  return {
    type: GET_COIN_LIST,
    payload: coins,
  };
};
function apiFunc(coin) {
  return function (dispatch) {
    return fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: API_CALL, payload: json });
      })
      .catch((error) => console.log(error));
  };
}
export const apiCall = (coin) => {
  return apiFunc(coin);
};
