import React from 'react';
import { connect } from 'react-redux'
import { filterMoves } from './redux/actions.js';

const SideBar = ({ userTyped, children }) => {
    return (
      <aside className="MovesList">
        <div className="search">
          <input type="text" onChange={userTyped} placeholder="Filter moves..." />
        </div>
        {children}
      </aside>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userTyped: (ev) => { dispatch(filterMoves(ev.target.value)) }
  }
}

export default connect(null, mapDispatchToProps)(SideBar);
