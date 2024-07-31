import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { books, error, query } = location.state;
  // destructuring location.state- accesses state data passed previously in SearchBar

  if (error) return <div>Error: {error}</div>;
  if (books?.length === 0) return <div>No books found for: {query}</div>;

  return (
    <>
      <h1>Search Results for: {query}</h1>
      <div>
        {books?.map((book) => (
          <ul key={book.id}>
            <li>{book.title}</li>
            <li>{book.author_name?.join(", ")}</li>
            {/* .join(", ") method doesn't return an error if there's only one str in the arr- it just returns that single string */}
          </ul>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
