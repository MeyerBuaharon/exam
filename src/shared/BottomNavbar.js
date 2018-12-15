import React from "react";
import { BottomNavbarMock } from "../MOCK";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import { BottomNavbarList } from "./styles";
import Categories from "../components/Categories/Categories";
import Locations from "../components/Locations/Locations";
import { Layout } from "../shared/styles";

const Landing = () => <h2>Landing</h2>;

const StyledBottomNavigation = styled(BottomNavigation)`
  flex-basis: 10%;
  width: 100%;
  justify-content: "space-around";
`;

const StyledButton = styled(Button)`
  && {
    background: red;
    border: 1px solid red;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const RouteNav = withRouter(({ history }) => (
  <BottomNavbarList>
    {BottomNavbarMock.map((item, idx) => (
      <BottomNavigationAction
        key={idx}
        label={item.label}
        icon={<Icon>{item.icon}</Icon>}
        onClick={() => {
          history.push(`/${item.path}`);
        }}
      />
    ))}
  </BottomNavbarList>
));
const BottomNavbar = () => (
  <StyledBottomNavigation>
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Landing} />
        <Route path="/categories/" component={Categories} />
        <Route path="/locations" component={Locations} />
        <RouteNav />
      </Layout>
    </BrowserRouter>
  </StyledBottomNavigation>
);

export default BottomNavbar;
