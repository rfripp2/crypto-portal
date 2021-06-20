import React, { useEffect, useState } from "react";

export default function CoinContainer({ coin, price }) {
  const [priceUpdated, setPrice] = useState("");
  useEffect(() => {
    setInterval(priceUpdate, 12000);
  }, []);
  function priceUpdate() {
    return fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((data) => data.json())
      .then((result) => {
        let key = Object.keys(result);
        setPrice(result[key].usd);
      });
  }
  return (
    <div>
      <h2>{coin}</h2>
      <h3>{priceUpdated ? priceUpdated : price}$</h3>
    </div>
  );
}
