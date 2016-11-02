import React from 'react';

const CategoryItem = (props) => {
  const html = () => {
    return {
      __html: props.highlight ? props.item.split(props.highlight).join(`<strong>${props.highlight}</strong>`) : props.item
    }
  }

  return <span dangerouslySetInnerHTML={html()}></span>
}

export default CategoryItem;
