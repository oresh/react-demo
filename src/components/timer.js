import React, { Component } from 'react';
import Button from './button';
import './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      active: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.active) {
      this.setState({
        date: new Date(),
      });
    }
  }

  render() {
    return (
      <div className="timer">
        Current time is {this.getTime(this.state.date)}
        <br />
        <Button onClick={this.toggleTimer.bind(this)}>
          {this.state.active ? "Stop Timer" : "Start Timer"}
        </Button>
      </div>
    );
  }
  
  toggleTimer() {
    this.setState({
      active: !this.state.active
    });
  }

  getTime(date) {
    return this.format(date.getMinutes()) + ':' + this.format(date.getSeconds());
  }

  format(time) {
    return time < 10 ? "0" + time : time;
  }
}

export default Timer;


