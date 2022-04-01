import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { diceNumber: 'one' };
  }
  render() {
    return (
      <div>
        <Dice face={this.state.diceNumber} />
      </div>
    );
  }
}

export default RollDice;
