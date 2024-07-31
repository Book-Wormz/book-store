import React from "react";
import Sort from "../components/Sort";

const fiction = () => {
	return (
		<div className="mt-[125px]">
			<h1 className="flex justify-center font-bold text-5xl text-black">
				Fiction
			</h1>
			<Sort genre="subjects/fiction" />
		</div>
	);
};

export default fiction;
