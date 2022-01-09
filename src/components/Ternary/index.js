// composant inutile pour mon app
// juste pour pratiquer the ternary operator

import React from 'react';

const Ternary = () => {
  const isGoingOut = false;

  // if (isGoingOut === true) {
  //   answer = 'yes';
  // } else {
  //   answer = 'no';
  // }

  // ternary outside JSX
  // let answer = isGoingOut ? 'yes' : 'no';

  return (
    <div>
      <h1>Do i feel like going out tonigh ?</h1>
      <div>
        {/* ternary inside JSX, no need extra variable */}
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  );
};

export default Ternary;
