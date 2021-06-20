import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { apiCall, getCoinList } from "../actions/actions";

export function Searcher(props) {
  const [coin, setCoin] = useState("");
  // Trato de mapear coinPrices array global con precios actualizados con setInterval

  // updatePrice es un dispatcher. Recibe el array global de coinPrices con formato [{bitcoin : {usd: 100}},]

  const handleOnChange = (e) => {
    setCoin(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCoin("");
    props.getCoinList(coin); // Este dispatch es solo de referencia,no tiene funcionalidad
    props.apiCall(coin); // Agrega al estado global coinPrices
  }
  return (
    <div>
      <h2>Search Crypto Price</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="coin"
          value={coin}
          onChange={(e) => handleOnChange(e)}
        ></input>
        <button
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    coinPrices: state.coinPrices,
    coinList: state.coinList,
  };
}

export default connect(mapStateToProps, {
  apiCall,
  getCoinList,
})(Searcher);
