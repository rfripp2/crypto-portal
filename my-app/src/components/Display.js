import React from "react";
import { connect } from "react-redux";
import { apiCall } from "../actions/actions";
import CoinContainer from "./CoinContainer";
import styles from "./Display.module.css";
function Display(props) {
  return (
    <div className={styles.flex}>
      {props.coinPrices &&
        props.coinPrices.map((coin) => (
          <CoinContainer
            className={styles.padding}
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
