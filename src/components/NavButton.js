import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ url, buttonContent }) => {
	return (
		<Link to={url} className="p-3 text:lg sm:text-sm lg:text-lg font-bold">
			<button>{buttonContent}</button>
		</Link>
	);
};

export default NavButton;
