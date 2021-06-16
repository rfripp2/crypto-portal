import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { apiCall } from "../actions/actions";
import CoinContainer from "./CoinContainer";
function Display(props) {
  useEffect(() => {
    props.coins.forEach((x) => {
      props.apiCall(x);
    });
  }, [props.coins]);

  return (
    <div>
      {props.coinPrices.map((coin) => (
        <CoinContainer
          coin={Object.keys(coin)}
          price={coin[Object.keys(coin)].usd}
        ></CoinContainer>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    coins: state.coins,
    coinPrices: state.coinPrices,
  };
}

export default connect(mapStateToProps, { apiCall })(Display);
