import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import CategoryItem from './CategoryItem';

const Category = ({ title, items, filteredBy }) => {
  let keys = Object.keys(items);
  let filtered = keys
                  .map(url => { return { url, data: items[url] }; })
                  .filter(move => new RegExp(filteredBy, 'gi').test(move.data.name));

  return (
    <ul className={!filtered.length ? 'hidden' : ''}>
      <li>{title} <span>({showCount(filtered.length, keys.length)})</span></li>
      <li>
        <ul>
          {
            filtered
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

const showCount = (filtered, total) => {
  return filtered + '/' + total;
}

const mapStateToProps = (state) => {
  return {
    filteredBy: state.filteredBy
  }
};

export default connect(
  mapStateToProps
)(Category);
