import React from "react";
import Sort from "../components/Sort";

const fiction = () => {
	return (
		<div className="mt-auto">
			<h1>Fiction</h1>
			<Sort genre="subject:fiction" volumes="&maxResults=40" />
		</div>
	);
};

export default fiction;
