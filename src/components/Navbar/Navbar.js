import React from "react";
import NavbarItem from "./NavbarItem";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Styles from "./Navbar.module.css";

function Navbar() {
  const items = [
    {
      name: "Home",
      haveDropDown: false,
      dropDown: [],
      path: "/",
    },
    {
      name: "Services",
      haveDropDown: false,
      dropDown: [],
      path: null,
    },
    {
      name: "Annual Report",
      haveDropDown: false,
      dropDown: [],
      path: "annual"
    },
  ];

  return (
    <nav>
      <Title />
      <div className={Styles.navitems}>
        {items.map((item) => (
          <NavbarItem
            styles={Styles}
            name={item.name}
            key={item.name}
            haveDropDown={item.haveDropDown}
            dropDown={item.dropDown}
          />
        ))}
      </div>
      <Button>Download App</Button>
    </nav>
  );
}

export default Navbar;
