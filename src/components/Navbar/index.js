import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Title from "../Title";
import Styles from "./Navbar.module.css";

function Navbar() {
  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Annual Report",
      path: "/annual",
    },
  ];

  const reducer = (state, action) =>
    action.type ? Styles.scrolled : undefined;
  const [navbarClass, dispatch] = useReducer(reducer, undefined);

  window.addEventListener("scroll", () => {
    window.scrollY > 0 ? dispatch({ type: true }) : dispatch({ type: false });
  });

  return (
    <nav className={navbarClass && navbarClass}>
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

function NavbarItem({ styles, name, path }) {
  return (
    <Link to={path ? path : ""}>
      <div className={styles.navitem}>{name}</div>
    </Link>
  );
}

export default Navbar;
