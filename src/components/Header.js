import React, { Component } from "react";
import {
  Navbar,
  NavbarList,
  NavbarItem,
  Item,
  Container,
  Title
} from "../shared/styles";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { NavbarMock } from "../MOCK";
import AppBar from "@material-ui/core/AppBar";

const HeaderRoute = withRouter(({ history, location, path }, props) => (
  <NavbarList>
    {NavbarMock.map(item => (
      <NavbarItem>
        <Item
          onClick={() => {
            history.push(`${path}/${item}`);
          }}
        >
          {item}
        </Item>
      </NavbarItem>
    ))}
  </NavbarList>
));

const Header = ({ title, path }) => (
  <Container>
    <AppBar position="static">
      <HeaderRoute path={path} />
    </AppBar>
  </Container>
);

export default Header;
