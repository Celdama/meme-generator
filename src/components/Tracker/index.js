import React, { useState, useEffect } from 'react';
/**
 * Challenge:
 * 1. Create state called `windowWidth`, default to
 *    `window.innerWidth`
 * 2. When the window width changes, update the state
 * 3. Display the window width in the h1 so it updates
 *    every time it changes
 */

const Tracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      console.log('setting up...');
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', watchWidth);

    // clean up function
    return () => {
      console.log('cleaning up...');
      window.removeEventListener('resize', watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default Tracker;

/**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
*/
