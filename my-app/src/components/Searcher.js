import React, { useState } from "react";
import { connect } from "react-redux";
import { addCoin } from "../actions/actions";
import { apiCall } from "../actions/actions";
export function Searcher(props) {
  const [coin, setCoin] = useState("");

  const handleOnChange = (e) => {
    setCoin(e.target.value);
  };

  function handleApiCall() {
    if (props.coins) {
      props.coins.forEach((coin) => {
        props.apiCall(coin);
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addCoin(coin);
    setCoin("");
    handleApiCall();
  }

  return (
    <div>
      <h2>Search</h2>
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    coins: state.coins,
  };
}

export default connect(mapStateToProps, { addCoin, apiCall })(Searcher);
