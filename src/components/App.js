import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "../shared/styles";
import { withRouter } from "react-router";
import { compose, lifecycle } from "recompose";
import * as categoryActions from "../reducers/categories/categories-actions";
import * as locationActions from "../reducers/locations/locations-actions";
import BottomNavbar from "../shared/BottomNavbar";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <BottomNavbar />
        </Layout>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(categoryActions.fetch()),
    fetchLocations: () => dispatch(locationActions.fetch())
  };
};
export default withRouter(
  compose(
    connect(
      null,
      mapDispatchToProps
    ),
    lifecycle({
      componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchLocations();
      }
    })
  )(App)
);
