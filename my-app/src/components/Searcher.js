import React, { useState } from "react";
import { connect } from "react-redux";
import { apiCall } from "../actions/actions";

export function Searcher(props) {
  const [coin, setCoin] = useState("");

  const handleOnChange = (e) => {
    setCoin(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCoin("");
    props.apiCall(coin);
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

/* function mapStateToProps(state) {
  return {
    coinPrices: state.coinPrices,
  };
} */

export default connect(null, {
  apiCall,
})(Searcher);
