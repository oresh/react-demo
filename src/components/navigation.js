import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    const {items, className} = this.props;

    const navClass = ["nav"];
    className && navClass.push(className);

    return (
      <nav className={navClass.join(" ")}>
        {items.map((item, index) => this.renderItem(item, index))}
      </nav>
    );
  }

  renderItem(item, index) {
    return (
      <li key={index}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  }

}

export default Navigation;