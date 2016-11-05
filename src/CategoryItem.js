import React from 'react';

const CategoryItem = ({ item, highlight }) => {
  return (
    <span>
      {item
          .split(highlight)
          .map((part, i, arr) => {
            return (<span>
              {part}
              { i !== arr.length -1 ? <strong>{highlight}</strong> : ''}
            </span>);
          })}
        </span>
  );
}

export default CategoryItem;
