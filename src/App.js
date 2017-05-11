import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import store from './redux/store.js'

import Header from './Header.js';
import SideBar from './SideBar.js';
import Category from './Category.js';

import IndexView from './IndexView.js';
import MoveView from './MoveView.js';
import './App.css';

import moves from './data/jiu-jitsu-v2.json';

class ActualApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
          
          <SideBar>
            {Object.keys(moves).map((move, k) => {
              return <Category key={k} title={move} items={moves[move]} />
            })}
          </SideBar>

          <div style={{ height: '500px', width: '500px', border: '1px solid green', float: 'right '}}>
            {this.props.children}
          </div>

        </div>
      </Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={ActualApp}>
          <IndexRoute component={IndexView} />
          <Route path="/move/:moveUrl" component={MoveView} />
        </Route>
      </Router>
    )
  }
}

export default App;
