import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Book__1_-removebg-preview.png";

import "../App.css";

const Header = () => {
	return (
		<div>
			<div className="flex justify-between pl-5 pr-5">
				<NavLink>
					<img
						className="h-72 w-72 mt-[-20px]"
						src={Logo}
						alt="Book worms logo"
					/>
					{/* <div className="flex justify-center items-center mt-[-55px] w-[50%]"></div> */}
				</NavLink>
				<div className="w-[90%] mt-[-55px] flex items-center justify-center xl:justify-evenly flex-col-reverse xl:flex-row ">
					<NavBar />
					<SearchBar />
				</div>
			</div>
		</div>
	);
};

export default Header;
