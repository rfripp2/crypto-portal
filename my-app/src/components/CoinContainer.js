import React, { useEffect, useState, useRef } from "react";
import styles from "./CoinContainer.module.css";

function usePrevious(data) {
  const ref = useRef();
  useEffect(() => {
    ref.current = data;
  }, [data]);
  return ref.current;
}
export default function CoinContainer({ coin, price }) {
  const [priceUpdated, setPrice] = useState("");
  const [reset, setReset] = useState(false);

  const prevPrice = usePrevious(priceUpdated);

  // Update price
  useEffect(() => {
    setInterval(priceUpdate, 20000);
  }, []);

  // Apply different flash-color style according to up$ or down$ from prev
  const toggleClassName = () => {
    setTimeout(() => setReset(true), 6000);

    return prevPrice && prevPrice > priceUpdated
      ? styles.redPrice
      : prevPrice && prevPrice < priceUpdated
      ? styles.greenPrice
      : null;
  };

  function priceUpdate() {
    return fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((data) => data.json())
      .then((result) => {
        let key = Object.keys(result);
        console.log(prevPrice);
        setReset(false);
        setPrice(result[key].usd);
      });
  }
  return (
    <div className={styles.padding}>
      <h2>{coin}</h2>
      {/* Here is the problem,i would like to remove the class after a few seconds,or edit the CSS code to retrigger the animation */}
      <h3 className={reset ? "" : toggleClassName()}>
        {priceUpdated ? priceUpdated : price}$
      </h3>
    </div>
  );
}
