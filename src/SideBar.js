import React, { Component } from 'react';
import { filterMoves } from './actions.js';
import store from './store.js';

class SideBar extends Component {
  userTyped(ev) {
    store.dispatch(filterMoves(ev.target.value));
  }
  render() {
    return (
      <aside className="MovesList">
        <input type="text" onChange={this.userTyped} />
        {this.props.children}
      </aside>
    );
  }
}

export default SideBar;
