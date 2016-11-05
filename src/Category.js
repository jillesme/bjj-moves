import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import CategoryItem from './CategoryItem';

const Category = ({ title, items, filteredBy }) => {
  return (
    <ul>
      <li>{title}</li>
      <li>
        <ul>
          {
            Object.keys(items)
              .map(url => { return { url, data: items[url] }; })
              .filter(move => new RegExp(filteredBy, 'gi').test(move.data.name))
              .map((move, i) => {
                return (<li key={i}><Link to={"/move/"+ move.url} activeClassName="active">
                  <CategoryItem item={move.data.name} highlight={filteredBy} />
              </Link></li>);
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
