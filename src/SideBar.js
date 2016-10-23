import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <aside className="MovesList">
        <input type="text" />
        {this.props.children}
      </aside>
    );
  }
}

export default SideBar;
