import React, { Component } from 'react';
import { filterMoves } from './redux/actions.js';
import store from './redux/store.js';

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
