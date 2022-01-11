import React, { useState } from 'react';
import Tracker from '../Tracker';

/**
 * Challenge:
 * 1. Create state called `show`, default to `true`
 * 2. When the button is clicked, toggle `show`
 * 3. Only display `<WindowTracker>` if `show` is `true`
 */

const Window = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((prevState) => !prevState);
    console.log(show);
  };

  return (
    <div>
      <button onClick={toggleShow}>Toggle Windowtracker</button>
      {show && <Tracker />}
    </div>
  );
};

export default Window;
