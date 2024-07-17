<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
};
=======
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
	// const [books, setBooks] = useState([])
	// useEffect(() => {
	// 	getBooks()
	// }, [])
>>>>>>> 1cf20f3d59bf14b0158e61a59ea2b090c0f12500

	// const getBooks = async () => {
	// 	try {
	// 		const getResponse = await fetch(
	// 			"https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&startIndex=0&maxResults=2"
	// 		)
	// 		if (!getResponse.ok) {
	// 			throw new Error("Error on the get request for books")
	// 		}
	// 		const getResult = await getResponse.json()
	// 		setBooks(getResult)
	// 	} catch (error) {
	// 		alert("Opps that didn't work", error.message)
	// 	}
	// }

	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default App
