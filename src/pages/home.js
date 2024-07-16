import React, { useEffect, useState } from "react"

const Home = () => {
	const [books, setBooks] = useState([])
	useEffect(() => {
		getBooks()
	}, [])

	const getBooks = async () => {
		try {
			const getResponse = await fetch(
				"https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&startIndex=0&maxResults=10"
			)
			if (!getResponse.ok) {
				throw new Error("Error on the get request for books")
			}
			const getResult = await getResponse.json()
			setBooks(getResult.items)
		} catch (error) {
			alert("Opps that didn't work", error.message)
		}
	}
	// console.log(books.items)

	return (
		<>
			<div>
				<ul>
					{books.map((book, index) => (
						<li key={index}>{book.items}</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Home
