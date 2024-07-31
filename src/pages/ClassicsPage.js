import React from "react";
import SortButton from "../components/Sort";

const Classics = () => {
	return (
		<div className="mt-[125px]">
			<h1 className="flex justify-center font-bold text-5xl text-black">
				Classics
			</h1>
			<SortButton genre="subject:classics" volumes="&maxResults=40" />
		</div>
	);
};

export default Classics;
