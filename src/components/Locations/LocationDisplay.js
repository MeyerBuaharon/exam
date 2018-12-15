import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const LocationDisplay = props => {
  const { selectedItem } = props;
  return (
    <List>
      <ListItem>
        <ListItemText primary={`Name: ${selectedItem.Name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Address: ${selectedItem.Address}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Latitude: ${selectedItem.Coordinates.Lat}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Longtitude: ${selectedItem.Coordinates.Lon}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Category: ${selectedItem.Category.Category}`} />
      </ListItem>
    </List>
  );
};
export default LocationDisplay;
