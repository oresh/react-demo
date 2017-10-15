import React, { Component } from 'react';
import {menuLinks} from '../menu';

class NavigationRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // request is made
    setTimeout(_=> this.setState({items: menuLinks,}), 5000);
  }

  render() {
    const {className} = this.props;

    const navClass = ["nav"];
    className && navClass.push(className);

    let items = 'Loading...';
    if (this.state.items.length) {
      items = this.state.items.map((item, index) => this.renderItem(item, index));
    }

    return (
      <nav className={navClass.join(" ")}>
        {items}
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

export default NavigationRequest;