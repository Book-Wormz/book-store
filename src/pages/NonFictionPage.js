import React from "react";
import Sort from "../components/Sort";
import SortButton from "../components/Sort";

const NonFiction = () => {
	return (
		<div className="mt-[125px]">
			<h1 className="flex justify-center font-bold text-5xl text-black">
				Nonfiction
			</h1>
			<SortButton genre="subject:nonfiction" volumes="&maxResults=40" />
		</div>
	);
};

export default NonFiction;
