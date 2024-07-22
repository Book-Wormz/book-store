import React from "react";
import BookGrid from "../components/BookGrid";

const fiction = () => {
	return (
		<div>
			<h1>Fiction</h1>
			<BookGrid genre="subject:fiction" volumes="&maxResults=40" />
		</div>
	);
};

export default fiction;
