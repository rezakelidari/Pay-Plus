import React from "react";

function NavbarItem({ styles, name, haveDropDown, dropDown }) {
  return <div className={styles.navitem}>{name}</div>;
}

export default NavbarItem;
