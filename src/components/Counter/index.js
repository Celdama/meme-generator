// Composent inutile, je le garde dans le projet car il ma permit de saisir la notion de state, et de modification de state.

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state
   */

  const incrementeCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementeCounter}>+</button>
    </div>
  );
};

export default Counter;
