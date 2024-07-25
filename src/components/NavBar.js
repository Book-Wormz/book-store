import React from "react";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <div className="invisible sm:visible">
      <NavButton url="/fiction" buttonContent="Fiction" />
      <span>|</span>
      <NavButton url="/nonfiction" buttonContent="Nonfiction" />
      <span>|</span>
      <NavButton url="/classics" buttonContent="Classics" />
      <span>|</span>
      <NavButton url="/kids" buttonContent="Kids" />
    </div>
  );
};

export default NavBar;
