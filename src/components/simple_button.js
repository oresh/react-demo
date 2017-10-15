import React, { Component } from 'react';

class SimpleButton extends Component {

    constructor(props) {
      super(props);
      console.log(props);
    }

  render() {
    const {name, size = "md", className} = this.props;
    console.log(this.props);

    const buttonClass = ["btn", "btn-" + size];
    className && buttonClass.push(className);

    return (
      <button onClick={this.alertMessage} className={buttonClass.join(" ")}>{this.props.name}</button>
    );
  }

  alertMessage() {
    alert('You have clicked the button. Congrats!');
  }

}

export default SimpleButton;