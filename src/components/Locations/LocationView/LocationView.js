import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import LocationItem from "./LocationItem";
class LocationView extends React.Component {
  render() {
    const {
      deleteItem,
      selectItem,
      categories,
      data,
      openMap,
      grouped,
      filter
    } = this.props;
    const Grouped = categories.map(x => {
      return (
        <List
          key={x._id}
          subheader={<ListSubheader>{x.Category}</ListSubheader>}
        >
          {data
            .filter(y => y.Category === x._id)
            .map(y => {
              return (
                <LocationItem
                  filter={filter}
                  key={y._id}
                  deleteItem={deleteItem}
                  selectItem={selectItem}
                  location={y}
                  openMap={openMap}
                />
              );
            })}
        </List>
      );
    });
    const unGrouped = (
      <List>
        {data.map(x => {
          return (
            <LocationItem
              filter={filter}
              key={x._id}
              deleteItem={deleteItem}
              selectItem={selectItem}
              location={x}
              openMap={openMap}
            />
          );
        })}
      </List>
    );

    return grouped ? Grouped : unGrouped;
  }
}
export default LocationView;
