import React from 'react';
import { Delete, Edit } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
const CategoryItem = props => {
  const { deleteItem, selectItem, item } = props;
  return (
    <ListItem key={item._id}>
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            deleteItem(item);
          }}
        >
          <Delete />
        </IconButton>
        <IconButton
          onClick={() => {
            selectItem(item);
          }}
        >
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemText inset primary={item.Category} />
    </ListItem>
  );
};
export default CategoryItem;
