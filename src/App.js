import React, { Component } from 'react';
import SideBar from './SideBar.js';
import CatagoryItem from './CatagoryItem.js';
import './App.css';

const moves = require('./jiu-jitsu.json');
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar>
          <CatagoryItem title="Positions" items={moves.positions} />
          <CatagoryItem title="Chokes" items={moves.chokes} />
          <CatagoryItem title="Arm Locks" items={moves.armLocks} />
          <CatagoryItem title="Leg Locks" items={moves.legLocks} />
        </SideBar>
      </div>
    );
  }
}

export default App;
