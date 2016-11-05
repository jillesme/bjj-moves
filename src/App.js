import React, { Component } from 'react';
import SideBar from './SideBar.js';
import Category from './Category.js';
import './App.css';

const moves = require('./data/jiu-jitsu.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar>
          <Category title="Positions" items={moves.positions} />
          <Category title="Chokes" items={moves.chokes} />
          <Category title="Arm Locks" items={moves.armLocks} />
          <Category title="Leg Locks" items={moves.legLocks} />
        </SideBar>
      </div>
    );
  }
}

export default App;
