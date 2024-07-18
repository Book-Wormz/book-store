import React, { useState } from "react";
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
						<AiOutlineShoppingCart className="h-8 w-8 sm:hidden" />
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
					<Link to="books" onClick={handleClick}>
						Books
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link to="fiction" onClick={handleClick}>
						Fiction
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link to="nonfiction" onClick={handleClick}>
						Nonfiction
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link to="TeenYA" onClick={handleClick}>
						Teen & YA
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link to="kids" onClick={handleClick}>
						Kids
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link to="magazines" onClick={handleClick}>
						Magazines
					</Link>
				</li>
			</ul>
		</>
	);
};

export default MobileMenu;
