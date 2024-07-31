import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ genre, sortOrder, volumes }) => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const getBooks = async () => {
			try {
				const getResponse = await fetch(
					// `https://www.googleapis.com/books/v1/volumes?q=${genre}${sortOrder}${volumes}`
					`http://openlibrary.org/${genre}.json`
				);
				if (!getResponse.ok) {
					throw new Error("Error on the get request for books");
				}
				const getResult = await getResponse.json();
				setBooks(getResult.works);
				console.log(getResult.works);
			} catch (error) {
				alert("Ope that didn't work", error.message);
			}
		};
		getBooks();
	}, [genre, sortOrder, volumes]);
	return (
		<>
			<div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 overflow-scroll ">
				{books?.map((book) => (
					<div className="flex flex-col items-center" key={book.key}>
						<Link>
							<img
								className="h-[230px] w-[150px] object-contain"
								// src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
								src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
								alt="Book Cover"
							/>
						</Link>
						<p className="text-center w-[200px]">{book.title}</p>
						<p className="text-center">by: {book.authors.name}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Card;
