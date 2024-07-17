import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const SearchBar = () => {
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSearch = async (e) => {
		e.preventDefault();
		// preventing default behavior of the form submission (to reload the page)
		setIsLoading(true);

		try {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${query}`
			);

			if (!response.ok) {
				throw new Error("Error fetching books");
			}

			const data = await response.json();
			setBooks(data.items);
			// items property of the data obj should be arr of book objs returned by the api
		} catch (err) {
			setError(err.message);
		} finally {
			// code inside finally block runs whether an error occurs or not whereas if setLoading(false) is outside the try/catch, it won't execute if an error occurs. putting it after both try and catch is redundant.
			setIsLoading(false);
		}
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (books?.length === 0) return <div>No books found.</div>;

	return (
		<>
			<form onSubmit={handleSearch} className="flex pb-2">
				{/* <label>Search by Title or Author</label> */}
				<input
					className="text-m text-center border-2 border-black rounded-md w-80 mr-2"
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search by Title, Author, Keyword or ISBN"
					aria-label="search by title or author"
				/>
				<button
					className=" font-bold text-lg w-20 border-2 border-black rounded"
					type="submit"
				>
					Search
				</button>
				<Link>
					<AiOutlineShoppingCart className="h-8 w-8 ml-3" />
				</Link>
			</form>
			<div>
				{books?.map((book) => (
					<ul key={book.id}>
						<li>{book.volumeInfo.title}</li>
						<li>{book.volumeInfo.authors?.join(", ")}</li>
						{/* .join(", ") method doesn't return an error if there's only one str in the arr- it just returns that single string */}
					</ul>
				))}
			</div>
		</>
	);
};

export default SearchBar;
