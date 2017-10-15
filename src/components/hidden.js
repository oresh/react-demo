import React, { Component } from 'react';

class Hidden extends Component {

  constructor(props) {
    super(props);
    this.state = {index: 10};
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {active} = nextProps;
    if (active === false && nextState.index < 5) return false;

    return true;
  }

  render() {
    return (
      <div className="black-box" onMouseOver={this.over.bind(this)}>{this.state.index}</div>
    );
  }

  over() {
    this.setState(
      {index: this.state.index-1}
    )
  }


}

export default Hidden;