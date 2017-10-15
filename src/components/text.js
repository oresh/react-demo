import React, { Component } from 'react';

class TextSample extends Component {

  render() {
    return (
      <button onClick={this.props.click}>{this.props.name}</button>
    );
  }

}

export default TextSample;
