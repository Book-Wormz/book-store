import React from "react";
import Card from "../components/Card";

const Home = () => {
	return (
		<div className="w-screen h-screen flex flex-col items-start">
			<div className="w-full">
				<h2>Newest Fiction</h2>
				<Card genre="fiction" volumes="&maxResults=40" sort="&orderBy=newest" />
			</div>
		</div>
	);
};

export default Home;
