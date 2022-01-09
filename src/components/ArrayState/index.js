// un autre component d'exercice
// toujours inutile pour l'app
// mais permet de pratiquer l'utilisation d'array dans un state

/**
 * Challenge: Convert the code below to use an array
 * held in state instead of a local variable. Initialize
 * the state array with the same 2 items below
 *
 * Don't worry about fixing `addItem` quite yet.
 */
import React, { useState } from 'react';

const Array = () => {
  const [things, setThings] = useState(['Thing 1', 'Thing 2']);
  // const thingsArray = ['Thing 1', 'Thing 2'];

  const addItem = () => {
    setThings((prevState) => {
      return [...prevState, `Thing ${prevState.length + 1}`];
    });
  };

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
};

export default Array;
