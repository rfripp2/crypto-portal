import React, { useState } from "react";
import { connect } from "react-redux";
import { addCoin } from "../actions/actions";

export function Searcher(props) {
  const [coin, setCoin] = useState("");

  const handleOnChange = (e) => {
    setCoin(e.target.value);
    console.log(coin);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCoin("");
    props.addCoin(coin);
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
    coins: state.coins,
  };
}

export default connect(mapStateToProps, { addCoin })(Searcher);
