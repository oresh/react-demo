import React, { Component } from 'react';

class TimerLast extends Component {
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
        Current time is <Clock date={this.state.date} />
        <br />
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    const {date} = this.props;
    return (
      <span>{this.getTime(date)}</span>
    );
  }


  getTime(date) {
    return this.format(date.getMinutes()) + ':' + this.format(date.getSeconds());
  }

  format(time) {
    return time < 10 ? "0" + time : time;
  }
}

export default TimerLast;


