import Categories from "./components/Categories/Categories";
import Locations from "./components/Locations/Locations";

export const NavbarMock = ["view", "add", "remove", "edit"];

//export const BottomNavbarMock = ["Categories", "Locations"];

export const BottomNavbarMock = [
  {
    label: "Category",
    path: "categories",
    icon: "list"
  },
  {
    label: "Location",
    path: "locations",
    icon: "map"
  }
];
