import React from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';

const Category = ({ title, items, filteredBy }) => {
  return (
    <ul>
      <li>{title}</li>
      <li>
        <ul>
          {
            items
              .filter(item => new RegExp(filteredBy, 'gi').test(item.name))
              .map((item, i) => {
                return <li key={i}><CategoryItem item={item.name} highlight={filteredBy} /></li>;
              })
          }
        </ul>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    filteredBy: state.filteredBy
  }
};

export default connect(
  mapStateToProps
)(Category);
