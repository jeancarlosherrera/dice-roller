import React from 'react';

function Dice(props) {
  return (
    <i
      className={`Dice fa-solid fa-dice-${props.face} ${
        props.rolling && 'shaking'
      }`}
    ></i>
  );
}

export default Dice;
