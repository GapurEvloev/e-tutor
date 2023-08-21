import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  return (
    <div className={styles.counter}>
      <h1>Counter: {value}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}