import React from "react";
import { useLocation } from "react-router-dom";
import unavailableCover from "../assets/cover-not-available.png";

const SearchResults = () => {
  const location = useLocation();
  const { books, error, query } = location.state;
  // destructuring location.state- accesses state data passed previously in SearchBar

  if (error) return <div>Error: {error}</div>;
  if (books?.length === 0) return <div>No books found for: {query}</div>;

  return (
    <>
      <h1>Search Results for: {query}</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        {books?.map((book) => (
          <div
            key={book.key}
            style={{ marginBottom: "20px" }}
            className="flex flex-col items-center"
          >
            {book.cover_i ? (
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={`Cover of ${book.title}`}
                style={{ width: "150px", height: "auto" }}
              />
            ) : (
              <img
                className="border border-black"
                src={unavailableCover}
                alt={`Cover of ${book.title} is not available`}
                style={{ width: "150px", height: "auto" }}
              />
            )}
            <ul className="text-sm">
              <li className="text-center">Title: {book.title}</li>
              <li className="text-center">
                Author(s): {book.author_name?.join(", ")}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
