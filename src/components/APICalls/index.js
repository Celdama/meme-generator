// composant inutile pour l'app, juste là pour teste des call API
import React, { useState, useEffect } from 'react';

const API = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  // 1. GET the data (fetch)
  // 2. Save the data to state

  console.log('component rendered');

  /**
   * Challenge: Combine `count` with the request URL
   * so pressing the "Get Next Character" button will
   * get a new character from the Star Wars API.
   * Remember: don't forget to consider the dependencies
   * array!
   */

  // side effects
  useEffect(() => {
    console.log('effect ran');

    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>the count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Next Character
      </button>
    </div>
  );
};

export default API;

// # What are react's primary tasks ?
// - work with the DOM / browser to render UI to the page
// - manage state for us between render cycles (i.e state values are "remembered" from one render to the next)
// - keep the UI updated whenever state  changes occur

// # What can't React handle on its own ?
// - (Out)side effects!
//    ~ localStorage
//    ~ API/database interactions
//    ~ subscriptions (e.g web sockets)
//    ~ syncing 2 different internal states together
//    ~ basically anything that React isn't in charge of

// QUIZZ useEffect //
// 1. What is a "side effect" in React? What are some examples?
// side effect = everything take place outside the react app
// - Any code that affects an outside system.
// - local storage, API, websockets, two states to keep in sync

// 2. What is NOT a "side effect" in React? Examples?
// - Anything that React is in charge off
// - Maintaining state, keeping the UI in sync with the data, render DOM elements

// 3. When does React run your useEffect function? When does it NOT run the effect function?
// - As soon as the component load (first render)
// - On every re-render of the component (assuming no dependencies array)
// - Will NOT run the effect when the values of the dependencies in the array stay the same between renders

// 4. How would you explain what the "dependecies array" is?
// - Second parameter to the useEffect function
// - A way for React to know whether it should to re-run the effect function

// END QUIZZ //
