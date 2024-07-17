import React, { useState } from "react";
import NavButton from "./NavButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MobileMenu = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<>
			{/* Hamburger menu */}
			<div className="flex justify-between">
				<div onClick={handleClick} className="md:hidden h-8 w-8 z-30 ">
					{!nav ? (
						<FaBars className="h-6 w-6" />
					) : (
						<FaTimes className="h-6 w-6" />
					)}
				</div>
				<div>
					<Link>
						<AiOutlineShoppingCart className="h-8 w-8" />
					</Link>
				</div>
			</div>
			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center z-20"
				}
			>
				<li className="py-6 text-4xl">
					<NavButton to="books" onClick={handleClick}>
						Books
					</NavButton>
				</li>
				<li className=" py-6 text-4xl">
					<NavButton to="fiction" onClick={handleClick}>
						Fiction
					</NavButton>
				</li>
				<li className=" py-6 text-4xl">
					<NavButton to="nonfiction" onClick={handleClick}>
						Nonfiction
					</NavButton>
				</li>
				<li className=" py-6 text-4xl">
					<NavButton to="TeenYA" onClick={handleClick}>
						Teen & YA
					</NavButton>
				</li>
				<li className=" py-6 text-4xl">
					<NavButton to="kids" onClick={handleClick}>
						Kids
					</NavButton>
				</li>
				<li className=" py-6 text-4xl">
					<NavButton to="magazines" onClick={handleClick}>
						Magazines
					</NavButton>
				</li>
			</ul>
		</>
	);
};

export default MobileMenu;
