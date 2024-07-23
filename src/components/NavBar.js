import React from "react";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <div className="invisible sm:visible">
      <NavButton url="/" buttonContent="Books" />
      <span>|</span>
      <NavButton url="/fiction" buttonContent="Fiction" />
      <span>|</span>
      <NavButton url="/nonfiction" buttonContent="Nonfiction" />
      <span>|</span>
      <NavButton url="/classics" buttonContent="Classics" />
      <span>|</span>
      <NavButton url="/" buttonContent="Kids" />
      <span>|</span>
      <NavButton url="/" buttonContent="Magazines" />
    </div>
  );
};

export default NavBar;
