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
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default Tracker;
