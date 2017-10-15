import React, { Component } from 'react';

class Thanks extends Component {

  constructor(props) {
    super(props);
    this.state = {text: 'T'};
    const text = "Thank you!"

    setInterval(_=> {
      const len = this.state.text.length;
      if (len < text.length) {
        this.setState({text: this.state.text + text[len]});
      } else {
        this.setState({text: 'T'});
      }
    }, 150);

  }
  
  render() {
    return (
      <span className="thank-you">
         {this.state.text}
        </span>
    );
  }
}

export default Thanks;