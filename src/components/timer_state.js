import React, { Component } from 'react';

class TimerState extends Component {
  constructor(props) {
    super(props);

    const {time} = props;

    this.state = {
      date: time
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let date = this.state.date;
    date.setSeconds(date.getSeconds() + 1);

    this.setState({
      date: date
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

export default TimerState;


