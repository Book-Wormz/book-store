import React from "react";
import NavButton from "./NavButton";

const NavBar = () => {
	return (
		<div>
			<NavButton url="/" buttonContent="Books" />
			<span>|</span>
			<NavButton url="/" buttonContent="Fiction" />
			<span>|</span>
			<NavButton url="/" buttonContent="Nonfiction" />
			<span>|</span>
			<NavButton url="/" buttonContent="Teen & YA" />
			<span>|</span>
			<NavButton url="/" buttonContent="Kids" />
			<span>|</span>
			<NavButton url="/" buttonContent="eBooks" />
			<span>|</span>
			<NavButton url="/" buttonContent="Magazines" />
		</div>
	);
};

export default NavBar;
