import React, { Component } from 'react';
import './App.css';

import Timer from './components/timer';
import SimpleTimer from './components/timer_simple';
import TimerLast from './components/timer_last';
import TimerState from './components/timer_state'
import Button from './components/button';
import SimpleButton from './components/simple_button';
import Hidden from './components/hidden';
import Bunny from './components/bunny';
import Navigation from './components/navigation';
import NavigationRequest from './components/navigation_request';
import Thanks from './components/thank_you';
import {menuLinks} from './menu';

const date_moved = new Date();
date_moved.setMinutes(55);

const btn_text ="asfasf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 style={{color:"red"}}>DISCLAIMER</h1>
          I'm not a professional React developer.<br/>
          <p>You will learn how to create a simple React app.<br/>
          You'll need to read the documentation to create complex apps<br/>
          </p>
        </div>
        {<div className="header">
          <h1>Hello World!</h1>
          <p>This is a sample project to demonstrate React</p>
        </div>}
        {<div className="section button-section">
          <h2>Props</h2>
          <SimpleButton className="btn-large" name={btn_text} />
        </div>}
        {<div className="section timer-section">
          <h2>State</h2>
          <SimpleTimer />
        </div>}
        {<div className="section button-section">
          <h2>Callback in props</h2>
          <Button className="btn-large" onClick={this.alert}>This is a more complex button</Button>
        </div>}
        {<div className="section timer-section">
          <h2>Props + state</h2> 
          <Timer />
        </div>}
        {<div className="section timer-section">
          <h2>State as props</h2>  
          <TimerLast />
        </div>}
        {<div className="section timer-section">
          <h2>State from props</h2>  
          <TimerState time={date_moved} />
        </div>}
        {<div className="section menu-section">
          <h2>Renderable + props</h2>
          <Navigation items={menuLinks} />
        </div>}
        {<div className="section menu-section">
          <h2>Renderable as state</h2>
          <NavigationRequest />
        </div>}
        {<div className="section hidden-section">
          <h2>shouldComponentUpdate()</h2>
          <Hidden />
          <Hidden active={false} />
        </div>}
        {<div className="section default-section">
          <h2>defaultProps()</h2>
          <Bunny color="red"/>
        </div>}
        {<div className="section thanks-section">
          <Thanks />
        </div>}
      </div>
    );
  }

  alert() {
    alert("Show this in a complex button");
  }
}

export default App;


