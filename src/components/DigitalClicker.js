// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const count = this.state.timeClicked;
    this.setState({
      timesClicked: count + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
