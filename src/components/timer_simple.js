import React, { Component } from 'react';

class SimpleTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="timer">
        Current time is {this.getTime(this.state.date)}
      </div>
    );
  }

  getTime(date) {
      return this.format(date.getMinutes()) + ':' + this.format(date.getSeconds());
  }

  format(time) {
    return time < 10 ? "0" + time : time;
  }
}

export default SimpleTimer;


