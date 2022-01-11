// composant inutile pour l'app, juste là pour teste des call API
import React, { useState } from 'react';

const API = () => {
  const [starWarsData, setStarWarsData] = useState({});

  // 1. GET the data (fetch)
  // 2. Save the data to state

  console.log('component rendered');

  fetch('https://swapi.dev/api/people/1')
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
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
