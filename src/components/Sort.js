import React, { useState } from "react";
import BookGrid from "./BookGrid";

const SortButton = ({ genre, volumes }) => {
  const [sortOrder, setSortOrder] = useState("");
  const [displayedOrder, setDisplayedOrder] = useState("Relevance");
  const handleSort = (order) => {
    setSortOrder(order);
    if (order.includes("relevance")) {
      setDisplayedOrder("Relevance");
    } else {
      setDisplayedOrder("Newest");
    }
  };

  return (
    <>
      <details className="dropdown p-10">
        <summary className="btn m-1">Sort by: {displayedOrder}</summary>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <div onClick={() => handleSort("&orderBy=relevance")}>
              Relevance
            </div>
          </li>
          <li>
            <div onClick={() => handleSort("&orderBy=newest")}>Newest</div>
          </li>
        </ul>
      </details>
      <BookGrid genre={genre} volumes={volumes} sortOrder={sortOrder} />
    </>
  );
};

export default SortButton;
