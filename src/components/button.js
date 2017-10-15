import React, { Component } from 'react';
import './button.css';

class Button extends Component {

  render() {
    const {onClick, size = "md", className, children} = this.props;

    const buttonClass = ["btn", "btn-" + size];
    className && buttonClass.push(className);

    return (
      <button onClick={onClick} className={buttonClass.join(" ")}>{children}</button>
    );
  }

}

export default Button;