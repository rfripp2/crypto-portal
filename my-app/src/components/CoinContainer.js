import React, { useEffect, useState, useRef } from "react";
import styles from "./CoinContainer.module.css";
export default function CoinContainer({ coin, price }) {
  const [priceUpdated, setPrice] = useState("");
  useEffect(() => {
    setInterval(priceUpdate, 20000);
  });

  const prevPriceRef = useRef();
  useEffect(() => {
    prevPriceRef.current = priceUpdated;
  }, [priceUpdated]);

  const prevPrice = prevPriceRef.current;

  function toggleClassName() {
    return prevPrice > priceUpdated ? styles.redPrice : styles.greenPrice;
  }

  function priceUpdate() {
    return fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((data) => data.json())
      .then((result) => {
        let key = Object.keys(result);
        setPrice(result[key].usd);
        console.log(priceUpdated, prevPrice);
      });
  }
  return (
    <div className={styles.padding}>
      <h2>{coin}</h2>
      <h3 className={toggleClassName()}>
        {priceUpdated ? priceUpdated : price}$
      </h3>
    </div>
  );
}
