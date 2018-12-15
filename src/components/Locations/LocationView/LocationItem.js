import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Delete, Edit } from "@material-ui/icons";
const LocationItem = props => {
  const { location, deleteItem, selectItem, filter, openMap } = props;
  if (filter !== "" && location.Category !== filter) {
    return null;
  }
  return (
    <ListItem>
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            deleteItem(location);
          }}
        >
          <Delete />
        </IconButton>
        <IconButton
          onClick={() => {
            selectItem(location);
          }}
        >
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemText
        onClick={() => {
          openMap(location);
          navigator.vibrate(200);
        }}
        inset
        primary={location.Name}
      />
    </ListItem>
  );
};
export default LocationItem;
