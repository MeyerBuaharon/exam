import React from 'react';
import List from '@material-ui/core/List';
import CategoryItem from './CategoryItem';
const View = props => {
  const { deleteItem, selectItem, data } = props;
  const items = data.map(x => {
    return (
      <CategoryItem
        key={x._id}
        deleteItem={deleteItem}
        selectItem={selectItem}
        item={x}
      />
    );
  });
  return <List component="nav">{items}</List>;
};

export default View;
