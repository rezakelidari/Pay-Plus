import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ styles, name, path, haveDropDown, dropDown }) {
  return (
    <Link to={path ? path : ""}>
      <div className={styles.navitem}>{name}</div>
    </Link>
  );
}

export default NavbarItem;
