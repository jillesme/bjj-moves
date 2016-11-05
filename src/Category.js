import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import store from './redux/store.js';

class Category extends Component {
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
        <li>
          <ul>
            {
              this.props.items
              .filter(item => new RegExp(this.state.filteredBy, 'gi').test(item.name))
              .map((item, i) => {
                return <li key={i}><CategoryItem item={item.name} highlight={this.state.filteredBy} /></li>;
              })
            }
          </ul>
        </li>
      </ul>
        );
  }
}

export default Category;
