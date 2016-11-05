import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './redux/store.js'

import SideBar from './SideBar.js';
import Category from './Category.js';
import './App.css';

import moves from './data/jiu-jitsu.json';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SideBar>
            <Category title="Positions" items={moves.positions} />
            <Category title="Chokes" items={moves.chokes} />
            <Category title="Arm Locks" items={moves.armLocks} />
            <Category title="Leg Locks" items={moves.legLocks} />
          </SideBar>
        </div>
      </Provider>
    );
  }
}

export default App;
