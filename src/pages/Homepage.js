import React from "react";
import BookGrid from "../components/BookGrid";

const Home = () => {
	return (
		<div>
			<h1>BOOKS</h1>
			<h2>New in fiction</h2>
			<BookGrid
				genre="subject:fiction"
				volumes="&maxResults=6"
				sortOrder="&orderBy=newest"
			/>
			<h3>New in NonFiction</h3>
			<BookGrid
				genre="subject:nonfiction"
				volumes="&maxResults=6"
				sortOrder="&orderBy=newest"
			/>
			<h4>New in Classics</h4>
			<BookGrid
				genre="subject:classics"
				volumes="&maxResults=6"
				sortOrder="&orderBy=newest"
			/>
			<h5>New in History</h5>
			<BookGrid
				genre="subject:history"
				volumes="&maxResults=6"
				sortOrder="&orderBy=newest"
			/>
			<h6>New in Fantasy</h6>
			<BookGrid
				genre="subject:fantasy"
				volumes="&maxResults=6"
				sortOrder="&orderBy=newest"
			/>
		</div>
	);
};

export default Home;
