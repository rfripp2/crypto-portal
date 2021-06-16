import React from "react";

export default function CoinContainer({ coin, price }) {
  return (
    <div>
      <h2>{coin}</h2>
      <h3>{price}$</h3>
    </div>
  );
}
