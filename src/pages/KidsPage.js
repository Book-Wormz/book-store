import React from "react";
import Sort from "../components/Sort";
import SortButton from "../components/Sort";
import Card from "../components/Card";

const Kids = () => {
	return (
		<div className="mt-[125px]">
			<h1 className="flex justify-center font-bold text-5xl text-black">
				Kids
			</h1>
			<SortButton genre="subject:children+ficiton" volumes="&maxResults=40" />
			<Card />
		</div>
	);
};

export default Kids;
