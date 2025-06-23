import styles from "./CounterButton.module.css";
import { useEffect, useState } from "react";

function CounterButton() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  /** Menjalankan useEffect untuk melakukan side effect
   * param1: dijalankan setelah dirender(lifecycle mount dan update)
   * param2: dijalankan ketika state di dalam array berubah
   */
  useEffect(() => {
    // console.log("Lifecycle: Component dimount");
    document.title = `Result: ${counter}`;
  }, [counter]);

  // console.log("Lifecycle: Component dirender");

  return (
    <>
      <div className={styles.container}>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Tambah</button>
      </div>
    </>
  );
}

export default CounterButton;
