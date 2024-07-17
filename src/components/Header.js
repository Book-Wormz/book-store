import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Book-removebg-preview.png";
// import Logo from "../assets/Book__1_-removebg-preview.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "../App.css";

const Header = () => {
	return (
		<div className="back">
			<div className="flex justify-between pl-5 pr-5">
				<NavLink>
					<img
						className="h-60 w-60 mt-[-30px]"
						// className="h-80 w-80 mt-[-20px]"
						src={Logo}
						alt="Book worms logo"
					/>
					{/* <div className="flex justify-center items-center mt-[-55px] w-[50%]"></div> */}
				</NavLink>
				<div className="w-[90%] mt-[-55px] flex items-center justify-evenly ">
					<NavBar />
					<SearchBar />
					<Link className="">
						<AiOutlineShoppingCart className="h-8 w-8" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
