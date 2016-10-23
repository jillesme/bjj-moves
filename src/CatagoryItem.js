import React, { Component } from 'react';

class CatagoryItem extends Component {
  render() {
    let items = () => {
      return this.props.items.map((item, i) => {
        return (<li key={i}><a href="#">{item.name}</a></li>);
      })
    }
    return (
      <ul>
        <li>{this.props.title}</li>
        <ul>
          {items()}
        </ul>
      </ul>
        );
  }
}

export default CatagoryItem;
