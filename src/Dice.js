import React from 'react';

function Dice(props) {
  return (
    <div>
      <i className={`Dice fa-solid fa-dice-${props.face}`}></i>
    </div>
  );
}

export default Dice;
