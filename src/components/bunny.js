import React, { Component } from 'react';

class Bunny extends Component {

  render() {
    const {color} = this.props;
    const className = ["bunny"];
    color && className.push(color);

    return (
      <span className={className.join(" ")}>
         ( ) ( )<br/>
        =( *,* )=
        </span>
    );
  }
}

Bunny.defaultProps = {
  color: 'blue'
};

export default Bunny;