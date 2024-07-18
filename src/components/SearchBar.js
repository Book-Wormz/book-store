import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState(undefined);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
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
        className="flex flex-col sm:flex-row items-center pb-2 space-y-2 sm:space-y-0 z-10"
      >
        <input
          className="text-m border-2 border-black rounded-md w-80 mr-2 px-1"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Title, Author, Keyword or ISBN"
          aria-label="Search by Title, Author, Keyword or ISBN"
        />
        <button
          className=" font-bold text-lg w-20 border-2 border-black rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
