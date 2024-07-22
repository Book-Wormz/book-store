import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

  useEffect(() => {
    getBooks();
  }, [genre]);
  // hook is called any time genre prop changes

  const getBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&orderBy=relevance&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Error fetching books");
      }
      const data = await response.json();
      setBooks(data.items || []);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {books?.map((book) => (
        <div className="flex flex-col items-center" key={book.id}>
          <Link>
            <img
              className="h-[230px] w-[150px] object-contain"
              src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
              alt="Book Cover"
            />
          </Link>
          <p className="text-center w-[200px]">{book.volumeInfo.title}</p>
          <p className="text-center">
            by: {book.volumeInfo.authors?.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GenreCard;
