import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  flex-basis: 90%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-basis: 90%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  overflow: auto;
`;

export const StyledToolbar = styled(Toolbar)`
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NavbarList = styled.ul`
  align-self: center;
  margin: auto;
  justify-content: center;
  flex-grow: 1;
  list-style-type: none;
  display: flex;
  width: 100%;
  padding: 0;
`;

export const Title = styled.li`
  flex-grow: 1;
`;

export const NavbarItem = styled.li`
  flex-grow: 1;
`;

export const Item = styled.a`
  color: #400515;
  font-size: 1.15rem;
  font-family: "Avenir W01", "futura", "Lucida grande", sans-serif;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  display: block;
  letter-spacing: 0.06rem;
  padding-bottom: 4px;
  -webkit-font-smoothing: antialiased !important;
  cursor: pointer;

  &:hover {
    color: #600515;
  }
  &:hover:after {
    color: #600515;
    transition: ease-in-out;
    text-decoration: none;
    width: 1.5rem;
    background-color: #800515;
  }
  &:after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    width: 0px;
    margin-top: 4px;
    background: transparent;
    transition: width 0.3s ease, background-color 0.3s ease;
  }
`;

export const BasedBottomNavbar = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
`;
export const BottomNavbarItem = styled.li`
  flex-grow: 1;
`;
export const BottomNavbarList = styled.ul`
  align-self: center;
  transform: translateY(50%);
  margin: auto;
  justify-content: center;
  flex-grow: 1;
  list-style-type: none;
  display: flex;
  padding: 0;
`;
