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

  const burgerInitital = {
    opened: false,
    hamburgerClass: undefined,
    dropClass: undefined,
  };

  const reducer = (state, action) =>
    action.type ? Styles.scrolled : undefined;

  const hamburgerReducer = (state, action) =>
    state.opened === false
      ? { opened: true, hamburgerClass: Styles.opened, dropClass: Styles.show }
      : burgerInitital;

  const [navbarClass, dispatch] = useReducer(reducer, undefined);
  const [dropClasses, dropDispatch] = useReducer(
    hamburgerReducer,
    burgerInitital
  );

  window.addEventListener("scroll", () => {
    window.scrollY > 0 ? dispatch({ type: true }) : dispatch({ type: false });
  });

  return (
    <nav className={navbarClass && navbarClass}>
      <Title />
      <div className={Styles.navitems}>
        {items.map((item) => (
          <NavbarItem name={item.name} path={item.path} key={item.name} />
        ))}
      </div>
      <span
        className={`${Styles.navHamburger} ${
          dropClasses.hamburgerClass && dropClasses.hamburgerClass
        }`}
        onClick={dropDispatch}
      ></span>
      <div
        className={`${Styles.navDropdown} ${
          dropClasses.dropClass && dropClasses.dropClass
        }`}
      >
        <ul className={Styles.navDropList}>
          {items.map((item) => (
            <DropdownItem name={item.name} path={item.path} key={item.name} />
          ))}
        </ul>
      </div>
      <Button path="/download">Download App</Button>
    </nav>
  );
}

function NavbarItem({ name, path }) {
  return (
    <Link to={path ? path : ""} onClick={() => window.scrollTo(0, 0)}>
      <div className={Styles.navitem}>{name}</div>
    </Link>
  );
}

function DropdownItem({ name, path }) {
  return (
    <Link to={path ? path : ""} onClick={() => window.scrollTo(0, 0)}>
      <li className={Styles.dropdownitem}>{name}</li>
    </Link>
  );
}

export default Navbar;
