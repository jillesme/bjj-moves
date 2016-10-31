import React, { Component } from 'react';
import store from './store.js';

class CatagoryItem extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    });
  }
  render() {
    return (
      <ul>
        <li>{this.props.title}</li>
        <ul>
          {
            this.props.items
            .filter(item => {
              let re = new RegExp(this.state.filteredBy, 'gi');
              return re.test(item.name);
            })
            .map((item, i) => {
              return (<li key={i}><a href="#">{item.name}</a></li>);
            })
          }
        </ul>
      </ul>
        );
  }
}

export default CatagoryItem;
