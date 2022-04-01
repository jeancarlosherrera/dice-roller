import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { diceOne: 'one', diceTwo: 'one' };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    let rand1 = Math.floor(Math.random() * 7);
    let rand2 = Math.floor(Math.random() * 7);
    const toString = (rand) =>
      rand === 1
        ? 'one'
        : rand === 2
        ? 'two'
        : rand === 3
        ? 'three'
        : rand === 4
        ? 'four'
        : rand === 5
        ? 'five'
        : 'six';
    let val1 = toString(rand1);
    let val2 = toString(rand2);
    this.setState({ diceOne: val1, diceTwo: val2 });
  }
  render() {
    return (
      <div>
        <Dice face={this.state.diceOne} />
        <Dice face={this.state.diceTwo} />
        <br />
        <button onClick={this.rollDice}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
