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
      <div className="dropdown p-10">
        <div
          tabindex="0"
          role="button"
          className="btn bg-sortGrey-10 text-white hover:text-sortGrey-20 p-2"
        >
          Sort by: {displayedOrder}
        </div>
        <ul
          tabindex="0"
          className="dropdown-content menu bg-white rounded-box z-[1] shadow"
        >
          <li>
            <div onClick={() => handleSort("&orderBy=relevance")}>
              Relevance
            </div>
          </li>
          <li>
            <div onClick={() => handleSort("&orderBy=newest")}>Newest</div>
          </li>
        </ul>
      </div>
      <BookGrid genre={genre} volumes={volumes} sortOrder={sortOrder} />
    </>
  );
};

export default SortButton;
