import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { apiCall } from "../actions/actions";
import CoinContainer from "./CoinContainer";
function Display(props) {
  const [price, setPrice] = useState("");
  useEffect(() => {});

  return (
    <div>
      {props.coinPrices &&
        props.coinPrices.map((coin) => (
          <CoinContainer
            key={Object.keys(coin)}
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
