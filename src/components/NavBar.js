import React, { useState } from "react";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <div className="invisible sm:visible">
      <NavButton url="/" buttonContent="Books" />
      <span>|</span>
      <NavButton url="/" buttonContent="Fiction" />
      <span>|</span>
      <NavButton url="/nonfiction" buttonContent="Nonfiction" />
      <span>|</span>
      <NavButton url="/" buttonContent="Teen & YA" />
      <span>|</span>
      <NavButton url="/" buttonContent="Kids" />
      <span>|</span>
      <NavButton url="/" buttonContent="Magazines" />
    </div>
  );
};

export default NavBar;
