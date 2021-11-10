import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Title from "../Title";
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
      path: undefined,
    },
    {
      name: "Annual Report",
      haveDropDown: false,
      dropDown: [],
      path: "annual",
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
            path={item.path}
            key={item.name}
            haveDropDown={item.haveDropDown}
            dropDown={item.dropDown}
          />
        ))}
      </div>
      <Button path="/download">Download App</Button>
    </nav>
  );
}

function NavbarItem({ styles, name, path, haveDropDown, dropDown }) {
  return (
    <Link to={path ? path : ""}>
      <div className={styles.navitem}>{name}</div>
    </Link>
  );
}

export default Navbar;
