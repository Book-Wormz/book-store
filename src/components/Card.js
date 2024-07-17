import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		getBooks();
	}, []);

	const getBooks = async () => {
		try {
			const getResponse = await fetch(
				"https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&maxResults=6"
			);
			if (!getResponse.ok) {
				throw new Error("Error on the get request for cats");
			}
			const getResult = await getResponse.json();
			setBooks(getResult.items);
		} catch (error) {
			alert("Ope that didn't work", error.message);
		}
	};

	return (
		<div className=" flex justify-center ">
			{books?.map((book) => (
				<div className="flex flex-col items-center" key={book.id}>
					<Link>
						<img
							className="h-[230px] w-[150px] object-contain"
							src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
							alt="Book Cover"
						/>
					</Link>
					<p className="text-center w-[200px] truncate">
						{book.volumeInfo.title}
					</p>
					<p className="text-center">
						by: {book.volumeInfo.authors?.join(", ")}
					</p>
				</div>
			))}
		</div>
	);
};

export default Card;
