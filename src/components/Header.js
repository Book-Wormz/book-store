import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Logo from "../assets/book-worms-cropped.png";
import ShoppingCart from "../components/ShoppingCart";

import "../App.css";

const Header = () => {
	return (
		<div className="flex flex-col md:flex-row align-middle p-5">
			<MobileMenu />
			<div className="flex justify-center">
				<NavLink to="/">
					<img className="w-52 sm:w-80" src={Logo} alt="Book worms logo" />
				</NavLink>
			</div>
			<div className="flex items-center justify-center flex-col-reverse xl:flex-row ml-5 mt-3">
				<NavBar />
				<div className="flex">
					<SearchBar />
					<ShoppingCart />
				</div>
			</div>
		</div>
	);
};

export default Header;
