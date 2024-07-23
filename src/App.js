import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import Fiction from "./pages/FictionPage";
import NonFiction from "./pages/NonFiction";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fiction" element={<Fiction />} />
         <Route path="/nonfiction" element={<NonFiction />} />
				<Route path="/search-results" element={<SearchResults />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
