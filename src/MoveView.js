import React, { Component } from 'react';

class MoveView extends Component {
  render() {
    const { params } = this.props;
    return (
      <div>
        <h1>{params.moveUrl}</h1>
        <p>Info....</p>
      </div>
    )
  }
}

export default MoveView;
