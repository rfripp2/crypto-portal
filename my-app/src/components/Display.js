import React from "react";
import { connect } from "react-redux";
import { apiCall } from "../actions/actions";
import CoinContainer from "./CoinContainer";
function Display(props) {
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
    coinPrices: state.coinPrices,
  };
}

export default connect(mapStateToProps, { apiCall })(Display);
