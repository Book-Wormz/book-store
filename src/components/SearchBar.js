import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState(undefined);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e?.preventDefault();
    // preventing default behavior of the form submission (to reload the page)

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      if (!response.ok) {
        throw new Error("Error fetching books");
      }

      const data = await response.json();
      setBooks(data.items || []);
      // items property of the data obj should be arr of book objs returned by the api
      // || [] jic data.items is undefined or null- prevents potential errors downstream with iteration etc

      navigate(`/search-results`, {
        state: {
          books: data.items,
          error: "",
          query: query,
        },
      });
      // navigate has 2nd optional arg- contains data sent to /search-results
    } catch (err) {
      setError(err.message);
      navigate("/search-results", {
        state: {
          books: [],
          error: err.message,
          query: query,
        },
      });
    } finally {
      setQuery("");
      // code inside finally block runs whether an error occurs or not whereas if setLoading(false) is outside the try/catch, it won't execute if an error occurs. putting it after both try and catch is redundant.
    }
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 z-10"
      >
        <div className="flex">
          <input
            className="text-m rounded-tl-md rounded-bl-md w-44 h-6 sm:w-80 sm:h-8 px-1"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Title, Author, Keyword or ISBN"
            aria-label="Search by Title, Author, Keyword or ISBN"
          />
          <button className="flex items-center justify-center font-bold text-md sm:text-lg w-16 sm:w-20 h-6 sm:h-8 border-1 border-white rounded-tr-md rounded-br-md">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
