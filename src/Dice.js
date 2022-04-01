import React from 'react';

function Dice(props) {
  return (
    <span>
      <i className={`Dice fa-solid fa-dice-${props.face}`}></i>
    </span>
  );
}

export default Dice;
